import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { otpStore } from '@/lib/otp-store';

const schema = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid request' },
        { status: 400 }
      );
    }

    const { email, otp } = result.data;
    const entry = otpStore.get(email);

    if (!entry) {
      return NextResponse.json(
        { success: false, message: 'No verification code found. Please request a new one.' },
        { status: 400 }
      );
    }

    // Max 5 attempts
    if (entry.attempts >= 5) {
      otpStore.delete(email);
      return NextResponse.json(
        { success: false, message: 'Too many attempts. Please request a new code.' },
        { status: 429 }
      );
    }

    // Increment attempts
    entry.attempts += 1;
    otpStore.set(email, entry);

    if (entry.code !== otp) {
      return NextResponse.json(
        { success: false, message: `Incorrect code. ${5 - entry.attempts} attempts remaining.` },
        { status: 400 }
      );
    }

    // OTP verified — clean up
    otpStore.delete(email);

    return NextResponse.json({ success: true, message: 'Email verified successfully' });
  } catch (error: unknown) {
    console.error('Verify OTP error:', error);
    return NextResponse.json(
      { success: false, message: 'Verification failed. Please try again.' },
      { status: 500 }
    );
  }
}
