import Image from "next/image";

type PropsType = {
  imgSrc: `/${string}`;
  title: string;
  description: React.ReactNode;
};

const InfoItem = ({ imgSrc, title, description }: PropsType) => {
  return (
    <div className="flex items-start gap-4">
      {/* icon */}
      <div className="relative w-[36px] h-[36px]">
        <Image src={imgSrc} fill alt="" />
      </div>
      <div className="pt-1 flex-1">
        <h4 className="h4 mb-2">{title}</h4>
        {description}
      </div>
    </div>
  );
};

export default InfoItem;
