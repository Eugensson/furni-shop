import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={className}>
      <Image
        src="/assets/logo.svg"
        alt="Company's logo"
        width={150}
        height={30}
      />
    </Link>
  );
};
