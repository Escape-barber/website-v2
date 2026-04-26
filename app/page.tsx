import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { VideoSection } from "@/components/video-section";
import { BookingForm } from "@/components/booking-form";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <VideoSection />
      <BookingForm />
      <Testimonials />
      <Footer />
    </main>
  );
}
