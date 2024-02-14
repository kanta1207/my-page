import Link from 'next/link';

import { INavItem } from '@/types';

import { cn } from '@/lib/tailwind/utils';

interface MainNavProps {
  items?: INavItem[];
}

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <nav className="flex gap-6">
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex items-center text-md font-semibold text-foreground outline-none border-border',
                'focus:border-b hover:border-b',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  );
};
