export default function HeroPlantCard() {
  return (
    <div className="absolute right-0 top-0 w-[265px] h-[240px] flex flex-col rounded-[24px] border-[2.5px] border-[#CFCFCF] bg-white/6 backdrop-blur-[12px] shadow-xl px-12 pt-8 pb-8 z-20 overflow-visible"
      style={{
        boxShadow: "0 12px 44px 0 rgba(0,0,0,0.21)"
      }}>
      <img
        src="/assets/agloneama-plant.png"
        alt="Aglaonema plant"
        className="w-[620px] h-[660px] object-contain mx-auto mb-3 -mt-28 select-none pointer-events-none"
        style={{
          marginTop: '-112px',
          zIndex: 10,
          filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.21))'
        }}
        draggable={false}
      />
      <div className="text-[10px] font-light text-white/90 mb-1 mt-1">Indoor Plant</div>
      <div className="text-[28px] font-semibold leading-none text-white mb-8">Aglaonema plant</div>
      <button className="w-[180px] h-[56px] border-[2.5px] border-white text-white text-2xl font-bold rounded-[13px] tracking-wider hover:bg-white/10 transition mx-auto flex items-center justify-center mb-8">
        Buy Now
      </button>
      <div className="text-white opacity-70 text-[36px] ml-auto mr-3 -mt-5">&#8594;</div>
      <div className="flex items-center justify-center gap-2 mt-3">
        <div className="w-5 h-[6px] rounded-full bg-white/80"></div>
        <div className="w-3 h-[6px] rounded-full bg-white/40"></div>
        <div className="w-3 h-[6px] rounded-full bg-white/40"></div>
      </div>
    </div>
  );
}
