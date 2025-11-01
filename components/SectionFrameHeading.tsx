export default function SectionFrameHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit mx-auto flex items-center my-10 relative" style={{gap: 0}}>
      <img
        src="/assets/left-bend.png"
        alt=""
        className="h-[48px] w-[48px] object-contain -mr-10 select-none pointer-events-none"
        draggable={false}
        style={{ marginLeft: "-8px" }}
      />
      <h2 className="text-white font-extrabold text-[2.3rem] leading-tight drop-shadow-xl px-0 m-0">
        {children}
      </h2>
      <img
        src="/assets/right-bend.png"
        alt=""
        className="h-[48px] w-[48px] object-contain -ml-10 select-none pointer-events-none"
        draggable={false}
        style={{ marginRight: "-8px" }}
      />
    </div>
  );
}
