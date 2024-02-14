import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Icon, buttonVariants } from '@/components/ui';

import { MainNav } from './MainNav';
import { ThemeToggleButton } from './ThemeToggleButton';
import { NavMenuDialogTriggerButton } from './NavMenuDialogTriggerButton';

export const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-40 w-full h-16">
      <div className="hidden md:flex items-center justify-between px-32">
        <MainNav items={siteConfig.mainNav} />
        <nav className="flex items-center space-x-1">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: 'icon',
                variant: 'ghost',
              })}
            >
              <Icon.gitHub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: 'icon',
                variant: 'ghost',
              })}
            >
              <Icon.linkedIn className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </div>
          </Link>
          <ThemeToggleButton />
        </nav>
      </div>
      <div className="flex items-center justify-end md:hidden">
        <ThemeToggleButton />
        <NavMenuDialogTriggerButton />
      </div>
    </header>
  );
};
