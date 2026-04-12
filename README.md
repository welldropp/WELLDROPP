# WELLDROPP - Intelligent Software Solutions

WELLDROPP is a premium, research-backed digital agency platform specializing in AI Agents, Automation, and Scalable Web Applications.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory and add the following variables (refer to `.env.example`):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Running Locally
To start the development server on the custom port **9002**:
```bash
npm run dev
```
Visit [http://localhost:9002](http://localhost:9002) in your browser.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
npm start
```

## 🤖 AI Features
### AI Chatbot Integration
The website now features a fully integrated **AI Assistant** widget.
- **Backend**: Hosted on Vercel
- **Frontend**: `src/components/ui/ChatWidget.tsx`
- **Logic**: Real-time interaction with custom AI agents for customer support and lead generation.

## 🛠️ Tech Stack
- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [Web3Forms API](https://web3forms.com/) for email integration
- **AI Integration**: Custom AI Agent logic with Genkit support

## 📁 Project Structure
- `src/app`: Next.js App Router (Pages & Layouts)
- `src/components/sections`: Reusable website sections (Hero, Services, Contact, etc.)
- `src/components/ui`: Core UI components (Buttons, Inputs, Modals)
- `public`: Static assets (Logos, Icons)

## ☎️ Contact
- **Email**: welldropp.tech@gmail.com
- **Phone**: +91 87788 60376
- **Location**: Tamil Nadu, India 🇮🇳

## ⚖️ MSME Compliance
Welldropp is a government registered **MSME Enterprise**, ensuring reliability and professional compliance in all operations.
