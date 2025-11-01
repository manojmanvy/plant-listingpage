
import HeroReviewCard from "@/components/HeroReviewCard";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[820px] flex justify-between items-start max-w-[1450px] mx-auto pt-4 pb-7 bg-transparent overflow-visible">
      <div className="flex flex-col justify-start items-start z-10 pl-[3vw] pt-20">
        <h1 className="text-[#ececec] text-[104px] font-bold leading-[102px] tracking-[-2px] drop-shadow-lg mb-3">
          Earth’s Exhale
        </h1>
        <p className="text-[29px] text-white/80 font-normal mb-8 max-w-2xl leading-[130%]">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
        </p>
        <div className="flex flex-row items-center gap-7 mb-12 mt-2">
          <button className="h-[56px] px-10 border-2 border-white text-white text-[1.45rem] font-normal rounded-xl hover:bg-white/10 transition flex items-center min-w-[130px]">
            Buy Now
          </button>
          <button className="flex items-center justify-center h-[56px] w-[56px] border border-white/80 rounded-full hover:bg-white/10 transition">
            <span className="flex h-[44px] w-[44px] rounded-full bg-transparent border-2 border-white items-center justify-center">
              <svg height="28" width="28" viewBox="0 0 30 30" fill="none">
                <polygon points="9,6 25,15 9,24" fill="white" />
              </svg>
            </span>
          </button>
          <span
            className="text-white/90 text-xl tracking-wide hover:text-green-300 duration-150 cursor-pointer"
            style={{ fontFamily: "cursive" }}
          >
            Live Demo…
          </span>
        </div>
        <div>
          <HeroReviewCard />
        </div>
      </div>
      <div className="absolute right-[6vw] top-42 z-30">
        <div
          className="relative w-[468px] h-[492px] flex flex-col rounded-[62px] border bg-white/10 backdrop-blur-[8px] shadow-2xl px-14 pb-10 overflow-visible pointer-events-auto"
          style={{
            boxShadow: "0 9px 34px 0 rgba(0,0,0,0.17)",
            border: "1px solid rgba(255,255,255,0.20)",
            borderTop: "0"
          }}
        >
          <div style={{
            position: 'absolute',
            left: "50%",
            top: "-180px",
            transform: "translateX(-50%)",
            zIndex: 50,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}>
            <img
              src="/assets/agloneama-plant.png"
              alt="Aglaonema plant"
              className="w-[530px] h-[450px] object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>
          <div style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            width: '100%',
            height: '0',
            borderTop: '1px solid rgba(255,255,255,0.20)',
            zIndex: 12,
          }} />
          <br />
          <br />
          <br />
          <br />
          <div className="pt-[185px] flex flex-col">
            <div className="text-[21px] font-light text-white/90 mb-2 pl-[2px]">Indoor Plant</div>
            <div className="text-[39px] font-normal text-white mb-6 pl-[2px] tracking-tight leading-[1.1]">Aglaonema  plant</div>
            <div className="flex flex-row items-center justify-between w-full px-1 mb-5">
              <button
                className="h-[58px] w-[210px] border border-white text-white text-[1.57rem] font-normal rounded-xl bg-transparent hover:bg-white/10 transition flex items-center justify-center"
                style={{ boxShadow: "none", letterSpacing: '-0.5px' }}
              >
                Buy Now
              </button>
              <span className="text-[2rem] font-normal text-white/80">{'>'}</span>
            </div>
            <div className="flex items-center justify-center gap-2 w-full mt-auto">
              <div className="w-7 h-[5px] rounded-full bg-white/70"></div>
              <div className="w-3 h-[5px] rounded-full bg-white/32"></div>
              <div className="w-3 h-[5px] rounded-full bg-white/32"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
