"use client";
import SectionFrameHeading from "@/components/SectionFrameHeading";
import { motion } from "framer-motion";

const trendyPlants = [
  {
    img: "/assets/desk-plant-1.png",
    title: "For Your Desks Decorations",
    desc: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
    btn: "Explore",
  },
  {
    img: "/assets/desk-plant-2.png",
    title: "For Your Desks Decorations",
    desc: "The greenery adds a touch of nature and serenity to my desk, making it feel renewed and calming.",
    price: "Rs. 399/-",
    btn: "Explore",
  },
];

export default function TrendyPlants() {
  return (
    <section className="max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-8 pb-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <SectionFrameHeading>Our Trendy plants</SectionFrameHeading>
      </motion.div>
      <div className="flex flex-col gap-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.88 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex flex-col md:flex-row items-center bg-white/8 border border-white/25 rounded-[40px] min-h-[220px] overflow-visible shadow-2xl backdrop-blur-md"
          style={{
            boxShadow: "0 6px 30px 0 rgba(0,0,0,0.17)",
          }}
        >
          <motion.img
            src={trendyPlants[0].img}
            alt={trendyPlants[0].title}
            initial={{ opacity: 0, x: -90, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              duration: 0.93,
              bounce: 0.48,
              delay: 0.10,
              stiffness: 70
            }}
            viewport={{ once: true, amount: 0.7 }}
            className="h-[320px] w-[295px] object-contain absolute left-[-32px] md:left-[-42px] -top-[66px] select-none pointer-events-none"
            draggable={false}
            style={{ zIndex: 2 }}
          />
          <div className="flex-1 md:ml-[180px] ml-0 md:pl-8 px-6 py-10 flex flex-col justify-center items-start md:items-start">
            <div className="text-xl text-white/95 font-semibold mb-2">{trendyPlants[0].title}</div>
            <div className="text-white/85 text-[18px] leading-snug mb-6">{trendyPlants[0].desc}</div>
            <div className="flex flex-row gap-3 items-center mt-2">
              <div className="font-bold text-green-200 text-lg">{trendyPlants[0].price}</div>
              <button className="border border-white/80 rounded-xl px-7 py-2 text-white font-semibold hover:bg-white/10 transition">
                {trendyPlants[0].btn}
              </button>
              <button className="border border-white/80 rounded-xl px-[10px] py-2 text-white font-semibold hover:bg-white/10 transition flex items-center">
                <img src="/assets/bag.png" alt="Shopping Bag" className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 120, scale: 0.88 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex flex-col md:flex-row-reverse items-center bg-white/8 border border-white/25 rounded-[40px] min-h-[220px] overflow-visible shadow-2xl backdrop-blur-md"
          style={{
            boxShadow: "0 6px 30px 0 rgba(0,0,0,0.17)",
          }}
        >
          <motion.img
            src={trendyPlants[1].img}
            alt={trendyPlants[1].title}
            initial={{ opacity: 0, x: 90, scale: 0.74, rotate: 11 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              duration: 0.93,
              bounce: 0.50,
              delay: 0.19,
              stiffness: 67
            }}
            viewport={{ once: true, amount: 0.7 }}
            className="h-[350px] w-[290px] object-contain absolute right-[-35px] md:right-[-44px] -top-[66px] select-none pointer-events-none"
            draggable={false}
            style={{ zIndex: 2 }}
          />
          <div className="flex-1 md:mr-[150px] mr-0 md:pl-10 px-6 py-12 flex flex-col justify-center items-start md:items-start">
            <div className="text-xl text-white/95 font-semibold mb-2">{trendyPlants[1].title}</div>
            <div className="text-white/85 text-[18px] leading-snug mb-6">{trendyPlants[1].desc}</div>
            <div className="flex flex-row gap-3 items-center mt-2">
              <div className="font-bold text-green-200 text-lg">{trendyPlants[1].price}</div>
              <button className="border border-white/80 rounded-xl px-7 py-2 text-white font-semibold hover:bg-white/10 transition">
                {trendyPlants[1].btn}
              </button>
              <button className="border border-white/80 rounded-xl px-[10px] py-2 text-white font-semibold hover:bg-white/10 transition flex items-center">
                <img src="/assets/bag.png" alt="Shopping Bag" className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
