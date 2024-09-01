import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import classes from './main-header.module.css';
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image priority src={logo} alt="NextLevel Food Logo" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
