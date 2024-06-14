import React from 'react';
import FontAwesome from 'react-fontawesome';
import Link from 'next/link';
import 'font-awesome/css/font-awesome.css';
import { NavLink, NavigationContainer, NavAnchor } from './styles';
import { colors } from '../../theme';

const Navigation = ({ route }: { route: string }) => (
  <>
    <NavigationContainer>
      <Link href='/about'>
        <NavLink open={route === 'about'}>
          {' '}
          About me
        </NavLink>
      </Link>
      <Link href='/land'>
        <NavLink open={route === 'land'}>
          Land
        </NavLink>
      </Link>
      <Link href='/city'>
        <NavLink open={route === 'city'}>
          City
        </NavLink>
      </Link>
      <Link href='/ocean'>
        <NavLink open={route === 'ocean'}>
          Ocean
        </NavLink>
      </Link>
      <NavAnchor
        href='mailto:enquiries@sarahanneartist.com'
        target='_blank'
        rel='noopener noreferrer'
        alt='Mailto link'
        aria-label='Send me an email with this link'
      >
        {' '}
        <FontAwesome
          name='envelope'
          style={{
            color: colors.grey,
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
            lineHeight: '26px',
          }}
        />
      </NavAnchor>
      <NavAnchor
        href='https://instagram.com/sarahanne_artist?igshid=xwzzd1ac87ob'
        target='_blank'
        rel='noopener noreferrer'
        alt='Instagram link'
        aria-label='Take a look at my instagram with this link'
      >
        <FontAwesome
          name='instagram'
          style={{
            color: colors.grey,
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
            lineHeight: '26px',
          }}
        />
      </NavAnchor>
    </NavigationContainer>
  </>
);

export default Navigation;
