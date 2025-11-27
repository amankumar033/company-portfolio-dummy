'use client';

import { useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function NavigationProgressContent() {
  const pathname = usePathname();

  useEffect(() => {
    // Start progress immediately when pathname changes
    NProgress.start();
    
    // Simulate faster progress for better UX
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress > 90) progress = 90;
      NProgress.set(progress / 100);
    }, 10);

    // Complete progress quickly
    const timer = setTimeout(() => {
      clearInterval(interval);
      NProgress.done();
    }, 100); // Slightly longer for better visual feedback

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}

export default function NavigationProgress() {
  return (
    <Suspense fallback={null}>
      <NavigationProgressContent />
    </Suspense>
  );
}
