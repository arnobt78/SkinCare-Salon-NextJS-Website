import CountUp from "react-countup";

type PropsType = {
  countNum: number;
  countText?: string;
  text: string;
};

const StatsItem = ({ countNum, countText, text }: PropsType) => {
  return (
    <div className="text-center font-primary">
      <div className="text-[40px] text-accent mb-4">
        <CountUp end={countNum} delay={2.4} duration={6} />
        <span>{countText}</span>
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default StatsItem;
