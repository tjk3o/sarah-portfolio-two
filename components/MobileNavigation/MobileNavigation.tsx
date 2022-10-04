import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import {
  NavLink,
  NavButton,
  NavigationOptions,
  StyledNavAnchor,
} from './styles';
import Link from 'next/link';

const Navigation = () => {
  const [menuStatus, toggleMenu] = useState(false);

  return (
    <>
      <NavigationOptions open={menuStatus}>
        <Link href='/about' passHref>
          <NavLink open={menuStatus}>About</NavLink>
        </Link>
        <Link href='/land' passHref>
          <NavLink open={menuStatus}>Land</NavLink>
        </Link>
        <Link href='/ocean' passHref>
          <NavLink open={menuStatus}>Ocean</NavLink>
        </Link>
        <Link href='/city' passHref>
          <NavLink open={menuStatus}>City</NavLink>
        </Link>
        <StyledNavAnchor
          href='mailto:enquiries@sarahanneartist.com'
          target='_blank'
          rel='noopener noreferrer'
          alt='Mailto link'
          aria-label='Send me an email with this link'
        >
          <FontAwesome
            name='envelope'
            style={{
              color: '#7a7a7a',
              textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
              lineHeight: '40px',
            }}
          />
        </StyledNavAnchor>
        <StyledNavAnchor
          href='https://instagram.com/sarahanne_artist?igshid=xwzzd1ac87ob'
          target='_blank'
          rel='noopener noreferrer'
          alt='Instagram link'
          aria-label='Take a look at my instagram with this link'
        >
          <FontAwesome
            name='instagram'
            style={{
              color: '#7a7a7a',
              textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
              lineHeight: '40px',
            }}
          />
        </StyledNavAnchor>
      </NavigationOptions>

      <NavButton onClick={() => toggleMenu(!menuStatus)}>Menu</NavButton>
    </>
  );
};

export default Navigation;
