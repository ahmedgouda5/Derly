import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-2 py-5 bg-white dark:bg-neutral-900 text-sm md:text-base">
      <span className="font-semibold text-[#6361e4]">Derly</span>

      <span className="text-neutral-700 dark:text-neutral-300">by</span>

      <Link
        href="https://portfolio-two-lemon-69.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#6361e4] hover:underline"
      >
        Goudeawy
      </Link>

      <span className="text-neutral-700 dark:text-neutral-300">
        © {new Date().getFullYear()}. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
