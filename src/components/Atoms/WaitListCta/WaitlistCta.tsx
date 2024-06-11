import Image from "next/image";

const WaitlistCta = ({ ctaButtons }: any) => {
  return (
    <div className="flex gap-6">
      {ctaButtons.map((icon, indx) => (
        <div key={indx} className="cursor-pointer">
          <Image
            className="w-[20px]"
            src={icon.ctaButtonIcon}
            alt="cta button data"
          />
        </div>
      ))}
    </div>
  );
};

export default WaitlistCta;
