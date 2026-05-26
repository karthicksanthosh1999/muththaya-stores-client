import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import { Toaster } from "react-hot-toast";
import ReduxProviders from "@/store/provider";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muththya Stores",
  description: "Developed by JK Industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
           <QueryClientProvider client={queryClient}>
          <ReduxProviders>
            {children}
            <Toaster position="top-right"/>
          </ReduxProviders>
           </QueryClientProvider>
        </body>
    </html>
  );
}
