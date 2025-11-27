'use client';

import { useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function ProgressBarContent() {
  const pathname = usePathname();

  useEffect(() => {
    // Start progress bar on route change
    NProgress.start();
    
    // Complete progress bar after a short delay
    const timer = setTimeout(() => {
      NProgress.done();
    }, 100);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}

export default function ProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarContent />
    </Suspense>
  );
}
