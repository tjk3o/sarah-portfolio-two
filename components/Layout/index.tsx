import Header from '../Header';
import Footer from '../Footer';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import { MainContainer } from './styles';

export default function Layout({ route, children }) {
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
