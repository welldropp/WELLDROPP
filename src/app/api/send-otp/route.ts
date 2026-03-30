import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { otpStore } from '@/lib/otp-store';

const schema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // Rate limit: max 1 OTP per email per 60 seconds
    const existing = otpStore.get(email);
    if (existing && Date.now() - existing.createdAt < 60_000) {
      return NextResponse.json(
        { success: false, message: 'Please wait 60 seconds before requesting a new code' },
        { status: 429 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP with 10-minute expiry
    otpStore.set(email, {
      code: otp,
      createdAt: Date.now(),
      attempts: 0,
    });

    // Send OTP via Gmail SMTP (nodemailer)
    const gmailUser = process.env.GMAIL_USER || 'welldropp.tech@gmail.com';
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailAppPassword) {
      otpStore.delete(email);
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Please contact us directly at welldropp.tech@gmail.com' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `"WELLDROPP" <${gmailUser}>`,
      to: email,
      subject: 'Your WELLDROPP Verification Code',
      text: `Your verification code is: ${otp}\n\nThis code expires in 10 minutes. If you didn't request this, please ignore this email.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 420px; margin: 0 auto; padding: 32px; text-align: center;">
          <h1 style="color: #00e676; font-size: 28px; font-weight: 900; letter-spacing: 2px; margin-bottom: 4px;">WELLDROPP</h1>
          <p style="color: #888; font-size: 13px; margin-bottom: 32px;">Email Verification</p>
          <div style="background: #f5f5f5; border-radius: 16px; padding: 28px; margin-bottom: 24px;">
            <p style="color: #555; font-size: 14px; margin: 0 0 16px;">Your verification code:</p>
            <p style="font-size: 40px; font-weight: 900; letter-spacing: 10px; color: #0a0a0a; margin: 0; font-family: monospace;">${otp}</p>
          </div>
          <p style="color: #aaa; font-size: 12px; margin: 0;">This code expires in 10 minutes.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Verification code sent to your email' });
  } catch (error: unknown) {
    console.error('Send OTP error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send verification code. Please try again.' },
      { status: 500 }
    );
  }
}
