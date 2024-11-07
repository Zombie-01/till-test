import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-[300px] h-[50px] relative">
      <Image src="/bg_logo.jpg" alt="logo" width={300} height={32} />
    </div>
  );
};
