import Hero from "@/components/landing/Hero";
import VideoSection from "@/components/landing/VideoSection";
import ValueProps from "@/components/landing/ValueProps";
import Included from "@/components/landing/Included";
import WaitlistForm from "@/components/landing/WaitlistForm";
import SocialProof from "@/components/landing/SocialProof";
import Urgency from "@/components/landing/Urgency";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digital Intelligence Marketplace",
    url: "https://launch.digitalintelligencemarketplace.com/",
    sameAs: [
      "https://twitter.com/",
      "https://www.linkedin.com/",
    ],
  };

  return (
    <div>
      <Hero />
      <main>
        <VideoSection />
        <ValueProps />
        <Included />
        <WaitlistForm />
        <SocialProof />
        <Urgency />
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
};

export default Index;
