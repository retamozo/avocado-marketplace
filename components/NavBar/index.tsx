import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="example_grid"> Example grid tailwindcss</Link>
      </menu>
    </nav>
  );
};

export default NavBar;
