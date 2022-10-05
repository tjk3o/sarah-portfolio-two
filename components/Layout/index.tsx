import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MobileNavigation from '../MobileNavigation';
import DesktopNavigation from '../DesktopNavigation';
import { MainContainer } from './styles';

export default function Layout({
  route,
  children,
}: {
  route: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <MobileNavigation route={route} />
      <Header siteTitle='SARAH ANNE' />
      <MainContainer>
        <DesktopNavigation route={route} />
        {children}
        <Footer />
      </MainContainer>
    </>
  );
}
