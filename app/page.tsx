import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TrendyPlants from "@/components/TrendyPlants";
import TopSellingPlants from "@/components/TopSellingPlants";
import CustomerReview from "@/components/CustomerReview";
import O2BestPlants from "@/components/O2BestPlants";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-[#1B2316] font-sans"
      style={{
        backgroundImage: "url('/assets/bg-image.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <Navbar />
      <HeroBanner />
      <TrendyPlants />
      <TopSellingPlants />
      <CustomerReview />
      <O2BestPlants />
      <Footer />
    </div>
  );
}
