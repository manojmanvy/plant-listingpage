"use client";
import SectionFrameHeading from "@/components/SectionFrameHeading";
import { motion } from "framer-motion";

const reviews = [
  {
    avatar: "/assets/review-1.png",
    name: "Shelly Russel",
    stars: 5,
    color: "bg-white/12 text-white",
    review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    avatar: "/assets/review-2.png",
    name: "Lula Rolfson",
    stars: 5,
    color: "bg-white/16 text-white",
    review:
      "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    avatar: "/assets/review-3.png",
    name: "Carol Huels",
    stars: 5,
    color: "bg-red-700/18 text-white",
    review:
      "It’s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-lg font-bold mr-1">
      {"★".repeat(count)}
    </span>
  );
}

export default function CustomerReview() {
  return (
    <section className="w-full max-w-5xl mx-auto pt-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <SectionFrameHeading>Customer Review</SectionFrameHeading>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85 + idx * 0.07, delay: idx * 0.09, type: "spring" }}
            viewport={{ once: true, amount: 0.45 }}
            className={`${r.color} rounded-[32px] border border-white/20 shadow-xl backdrop-blur-[10px] p-6 flex flex-col items-start`}
            style={{ boxShadow: "0 6px 38px 0 rgba(0,0,0,0.16)" }}
          >
            <div className="flex items-center mb-3">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-full ring-1 ring-white/30 mr-4 object-cover"
                draggable={false}
              />
              <span className="font-semibold text-white text-lg">{r.name}</span>
            </div>
            <Stars count={r.stars} />
            <div className="text-white/80 text-base font-normal mt-2">{r.review}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
