const WaitlistTagCard = ({ tagCardData }: any) => {
  return (
    <div className=" flex justify-between mt-2 ">
      {tagCardData.map((waitlist, indx) => (
        <div
          key={indx}
          className="w-[30%] flex items-center gap-2 border-slate border-solid rounded-md  border-2 p-1 pl-2  hover:border-2 hover:border-solid hover:border-gray-900/20 cursor-pointer hover:shadow-gray hover:shadow-lg"
        >
          <span className="font-semibold">{waitlist.waitlistTagName}</span>
          <span className="text-[12px] text-slate-600">
            {waitlist.waitlistNumber}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WaitlistTagCard;
