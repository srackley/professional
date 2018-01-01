import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/services">
      <a>Services</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
    <style jsx>
      {`
  a {
    text-decoration: none;
    margin-right: 5px;
  }
`}
    </style>
  </div>
);

export default Header;
