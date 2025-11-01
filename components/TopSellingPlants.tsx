
import SectionFrameHeading from "@/components/SectionFrameHeading";

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
      <div>
        <SectionFrameHeading>Our Top Selling Plants</SectionFrameHeading>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plantGrid.map((plant, idx) => (
          <div
            key={idx}
            className={`relative bg-white/9 backdrop-blur-[8px] border border-white/20 rounded-[30px] pt-[125px] pb-6 px-6 flex flex-col items-center shadow-xl overflow-visible
              ${idx >= 3 ? 'mt-0 md:mt-[64px]' : ''}`
            }
            style={{ boxShadow: "0 6px 30px 0 rgba(0,0,0,0.13)", height: 320 }}
          >
            <img
              src={plant.img}
              alt={plant.name}
              className="h-[210px] w-[215px] object-contain absolute left-1/2 -translate-x-1/2 -top-[80px] select-none pointer-events-none"
              style={{ zIndex: 30 }}
              draggable={false}
            />
            <div className="text-[22px] text-white font-semibold mb-2">{plant.name}</div>
            <div className="text-sm text-white/75 text-center mb-3">{plant.desc}</div>
            <div className="text-green-200 font-bold text-lg mb-0 mt-auto">{plant.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
