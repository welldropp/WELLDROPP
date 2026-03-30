
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WELLDROPP | Building Intelligent Software for the Future',
  description: 'AI Agents, Chatbots, Automation & Scalable Digital Solutions for the modern enterprise.',
};

import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(typeof window==='undefined')return;
                var n=function(){};
                var methods=['log','debug','info','warn','error','table','trace','dir','dirxml',
                  'group','groupCollapsed','groupEnd','clear','count','countReset','assert',
                  'profile','profileEnd','time','timeLog','timeEnd','timeStamp'];
                for(var i=0;i<methods.length;i++){console[methods[i]]=n;}
                document.addEventListener('contextmenu',function(e){e.preventDefault();});
                document.addEventListener('keydown',function(e){
                  if(e.key==='F12')e.preventDefault();
                  if(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='J'||e.key==='C'))e.preventDefault();
                  if(e.ctrlKey&&e.key==='u')e.preventDefault();
                });
              })();
            `,
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
