import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <menu className="h-1/2 mx-auto bg-center bg-neutrals-500">
        <Link href="/">
          <a className="">Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="tailwind"> TAILWIND PLAYGROUND</Link>
      </menu>
    </nav>
  );
};

export default NavBar;
