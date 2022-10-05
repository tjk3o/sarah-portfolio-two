import Link from 'next/link';
import { HeaderContainer, HeaderText, HeaderLink } from './styles';

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <HeaderContainer>
    <HeaderText>
      <Link href='/' passHref>
        <HeaderLink>{siteTitle}</HeaderLink>
      </Link>
    </HeaderText>
  </HeaderContainer>
);

export default Header;
