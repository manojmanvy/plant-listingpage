"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.92, type: "spring" }}
      viewport={{ once: true, amount: 0.6 }}
      className="w-full max-w-7xl mx-auto pb-7 pt-14 px-5 text-white mt-10"
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-8 border-t border-white/10 pt-10">
        <div className="flex flex-col gap-3 min-w-[250px]">
          <div className="flex items-center gap-2 font-bold text-xl">
            <img src="/assets/logo.png" alt=""
              className="h-7 w-7 object-contain bg-none inline-block" draggable={false} />
            FloraVision.
          </div>
          <div className="text-white/70 text-[14px]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </div>
          <div className="flex gap-4 mt-2 text-lg text-white/60">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-white min-w-[170px]">
          <div className="font-semibold mb-2">Quick Link's</div>
          <a href="/" className="hover:underline text-white/85">Home</a>
          <a href="/" className="hover:underline text-white/85">Type's Of plant's</a>
          <a href="/" className="hover:underline text-white/85">Contact</a>
          <a href="/" className="hover:underline text-white/85">Privacy</a>
        </div>

        <div className="flex flex-col gap-2 min-w-[220px]">
          <div className="font-semibold mb-2">For Every Update.</div>
          <form className="flex">
            <input type="email" placeholder="Enter Email"
              className="bg-transparent border-2 border-white/70 rounded-l-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none" />
            <button className="px-3 py-2 bg-white text-[#1B2316] font-bold rounded-r-lg shadow -ml-[2px]">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-white/60 text-[14px]">
        FloraVision © all right reserve
      </div>
    </motion.footer>
  );
}
