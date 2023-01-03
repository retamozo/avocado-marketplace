import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutrals-100 text-sm h-14">
      <article className="flex flex-col text-center p-2">
        <p>
          Made with ♥ by{" "}
          <a
            href="https://github.com/retamozo/avocado-marketplace"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Enzo Retamozo
          </a>
        </p>
        <p>
          Inspired on{" "}
          <a
            href="https://github.com/jonalvarezz/platzi-nextjs"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            {" "}
            Jona Alvarez's project
          </a>{" "}
        </p>
      </article>
    </footer>
  );
};

export default Footer;
