"use client";
import SectionFrameHeading from "@/components/SectionFrameHeading";
import { motion } from "framer-motion";

export default function O2BestPlants() {
  return (
    <section className="w-full max-w-5xl mx-auto pt-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <SectionFrameHeading>Our Best o2</SectionFrameHeading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 90, scale: 0.92 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.93, type: "spring" }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-[12px] border border-white/22 rounded-[32px] shadow-2xl px-8 py-10 w-full min-h-[340px] overflow-visible"
        style={{ boxShadow: "0 10px 44px 0 rgba(0,0,0,0.14)" }}
      >
        <img
          src="/assets/agloneama-plant.png"
          alt="O2 Plant"
          className="h-[320px] w-[250px] object-contain absolute md:static left-6 md:relative md:left-0 -top-[100px] md:top-5 select-none pointer-events-none"
          draggable={false}
          style={{ zIndex: 3 }}
        />
        <div className="flex-1 flex flex-col items-start justify-center md:ml-8 mt-[170px] md:mt-0 z-10">
          <div className="text-[22px] md:text-xl text-white font-bold mb-3">
            We Have Small And Best O2 Plants Collection’s
          </div>
          <div className="text-white/70 text-[16px] leading-[1.6] mb-7 max-w-xl">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.<br /><br />
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-auto">
            <button className="border border-white/85 rounded-xl px-7 py-2 text-white font-semibold hover:bg-white/10 transition">
              Explore
            </button>
            <div className="flex items-center gap-4 ml-auto">
              <button className="rounded-full bg-white/10 border border-white/40 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 15L8 10L12 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <span className="text-white/80 text-base font-semibold tracking-wide w-[40px] text-center">01/04</span>
              <button className="rounded-full bg-white/10 border border-white/40 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5L12 10L8 15" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-[-34px] -translate-x-1/2 flex flex-row gap-4 z-20">
          <div className="w-6 h-2 rounded-full bg-white/90"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </motion.div>
    </section>
  );
}
