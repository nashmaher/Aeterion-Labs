import { Hero } from "@/components/home/hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { BrandPromiseBar } from "@/components/home/brand-promise-bar";
import { CategoryNav } from "@/components/home/category-nav";
import { BestSellers } from "@/components/home/best-sellers";
import { AeterionDifference } from "@/components/home/aeterion-difference";
import { AthleteSection } from "@/components/home/athlete-section";
import { ReviewsShowcase } from "@/components/home/reviews-showcase";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { EmailCapture } from "@/components/home/email-capture";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandPromiseBar />
      <FeaturedProducts />
      <CategoryNav />
      <BestSellers />
      <AeterionDifference />
      <AthleteSection />
      <ReviewsShowcase />
      <InstagramFeed />
      <EmailCapture />
    </>
  );
}
