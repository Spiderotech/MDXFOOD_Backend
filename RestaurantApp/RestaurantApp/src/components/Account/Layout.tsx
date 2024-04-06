import React, { ReactNode } from 'react';
import Accountheader from './Accountheader'


interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }:LayoutProps) {
    return (
        <div>
            <Accountheader />

            <main className="">{children}</main>
        </div>
    )
}

export default Layout