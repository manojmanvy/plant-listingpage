"use client";
import SectionFrameHeading from "@/components/SectionFrameHeading";
import { motion } from "framer-motion";

const plantGrid = [
  {
    img: "/assets/agloneama-plant.png",
    name: "Aglaonema plant",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen, for its attractive foliage and ease of care.",
    price: "Rs. 300/-",
  },
  {
    img: "/assets/desk-plant-1.png",
    name: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.",
    price: "Rs. 380/-",
  },
  {
    img: "/assets/cactus.png",
    name: "Cactus",
    desc: "It is known for their ability to thrive in arid environments.",
    price: "Rs. 259/-",
  },
  {
    img: "/assets/swiss-cheese.png",
    name: "Swiss cheese Plant",
    desc: "It is a popular tropical houseplant known for its large, perforated leaves.",
    price: "Rs. 40/-",
  },
  {
    img: "/assets/sansevieria.png",
    name: "Sansevieria plant",
    desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
  },
  {
    img: "/assets/agave.png",
    name: "Agave plant",
    desc: "The Agave plant is a genus of succulent plants for their striking rosettes of thick, fleshy leaves.",
    price: "Rs. 359/-",
  },
];

export default function TopSellingPlants() {
  return (
    <section className="w-full max-w-6xl mx-auto pb-12 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <SectionFrameHeading>Our Top Selling Plants</SectionFrameHeading>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plantGrid.map((plant, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 80, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.79 + idx * 0.08, type: "spring" }}
            viewport={{ once: true, amount: 0.40 }}
            className={`relative bg-white/9 backdrop-blur-[8px] border border-white/20 rounded-[30px] pt-[125px] pb-6 px-6 flex flex-col items-center shadow-xl overflow-visible
              ${idx >= 3 ? 'mt-0 md:mt-[64px]' : ''}`
            }
            style={{ boxShadow: "0 6px 30px 0 rgba(0,0,0,0.13)", height: 320 }}
          >
            <motion.img
              src={plant.img}
              alt={plant.name}
              initial={{ opacity: 0, y: -80, scale: 0.72, rotate: idx%2===0?-13:8, x: idx%2===0?-60:50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, x: 0 }}
              transition={{
                type: "spring",
                duration: 1.07 + idx * 0.06,
                bounce: 0.53,
                delay: 0.09 + idx * 0.07,
                stiffness: 63,
              }}
              viewport={{ once: true, amount: 0.7 }}
              className="h-[210px] w-[215px] object-contain absolute left-1/2 -translate-x-1/2 -top-[80px] select-none pointer-events-none"
              style={{ zIndex: 30 }}
              draggable={false}
            />
            <div className="text-[22px] text-white font-semibold mb-2">{plant.name}</div>
            <div className="text-sm text-white/75 text-center mb-3">{plant.desc}</div>
            <div className="text-green-200 font-bold text-lg mb-0 mt-auto">{plant.price}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
