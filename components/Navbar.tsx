import Link from "next/link";

const nav = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link className="logo" href="/">Shahzaib Soomro</Link>

      <nav className="navlinks">
        {nav.map((item) => (
          <Link href={item.href} key={item.name}>
            {item.name}
          </Link>
        ))}
      </nav>

      <Link className="btn secondary small-btn" href="/contact">
        Hire Me
      </Link>
    </header>
  );
}
