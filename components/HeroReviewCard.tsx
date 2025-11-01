export default function HeroReviewCard() {
  return (
    <div className="bg-white/15 border border-white/25 rounded-2xl px-5 py-3 shadow-2xl backdrop-blur-[1px] flex items-center gap-4 min-w-[315px] max-w-sm"
      style={{
        boxShadow: "0 9px 16px 0 rgba(0,0,0,0.18)",
      }}>
      <img
        src="/assets/profile-ronnie.png"
        alt="Ronnie Hamill"
        className="w-12 h-12 object-cover rounded-full border-2 border-yellow-400"
        draggable={false}
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[17px] text-white">Ronnie Hamill</span>
          <span className="text-yellow-400 text-lg -ml-1">★ ★ ★ ★ ★</span>
        </div>
        <div className="text-white/85 text-[15px] mt-1 leading-tight">
          I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
        </div>
      </div>
    </div>
  );
}
