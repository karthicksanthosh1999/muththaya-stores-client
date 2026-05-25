'use client';

import { ReactNode } from 'react';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { PhotoProvider } from 'react-photo-view';
import ScrollToTop from '@/components/custom/ScrollBar';

const PublicLayout = ({children} : {children: ReactNode}) => {
  return (
      <PhotoProvider>
        <TooltipProvider>
            <Header />
              {children}          
              <ScrollToTop />
            <Footer />
          </TooltipProvider>
      </PhotoProvider>
  )
}

export default PublicLayout;
