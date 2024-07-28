import ComingSoon from "@/components/Coming/ComingSoon";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ComingSoon />
      <Footer />
    </div>
  );
}
