import Image from "next/image";

interface LogoProps {
  dark?: boolean;
  className?: string;
}

export default function Logo({
  className = "",
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Baba Motors"
      width={180}
      height={60}
      priority
      className={`h-auto w-[125px] object-contain sm:w-[145px] lg:w-[175px] ${className}`}
    />
  );
}