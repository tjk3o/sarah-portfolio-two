import Header from '../Header';
import Footer from '../Footer';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import { MainContainer } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <MobileNavigation />
      <Header siteTitle='SARAH ANNE' />
      <MainContainer>
        <DesktopNavigation />
        {children}
        <Footer />
      </MainContainer>
    </>
  );
}
