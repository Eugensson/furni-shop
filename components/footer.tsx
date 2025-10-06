import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="section bg-primary">
      <div className="container text-white">
        <div className="pb-7 lg:pb-14 mb-14 flex flex-col lg:flex-row items-center justify-between border-b border-gray-700/75">
          <Logo className="mb-6 lg:mb-0" />
          <Socials />
        </div>
        <p className="text-center">
          &copy; FurniShop 2025 - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
