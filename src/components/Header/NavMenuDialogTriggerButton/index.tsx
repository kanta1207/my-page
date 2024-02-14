import React from 'react';
import { Button, Dialog, DialogTrigger, Icon } from '../../ui';
import { NavMenuDialogContent } from './NavMenuDialogContent';

export const NavMenuDialogTriggerButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Icon.menu className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <NavMenuDialogContent />
    </Dialog>
  );
};
