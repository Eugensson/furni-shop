import Link from "next/link";

import { socialsData } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="flex items-center justify-center gap-x-4">
      {socialsData.map(({ id, label, href, icon: Icon }) => (
        <li
          key={id}
          className="size-12 flex items-center justify-center bg-gray-700 hover:bg-accent transition-colors duration-300 rounded-full"
        >
          <Link
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} link`}
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
