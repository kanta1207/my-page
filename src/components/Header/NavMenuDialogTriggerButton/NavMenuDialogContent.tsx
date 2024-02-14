import React from 'react';
import { DialogContent } from '../../ui';

import { cn } from '@/lib';

import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const NavMenuDialogContent = () => {
  console.log('siteConfig', siteConfig.mainNav);

  return (
    <DialogContent className="flex justify-center items-center">
      <div className="flex flex-col gap-1">
        {siteConfig.mainNav?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'flex items-center text-2xl font-bold text-foreground outline-none border-border',
              'focus:border-b hover:border-b'
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </DialogContent>
  );
};
