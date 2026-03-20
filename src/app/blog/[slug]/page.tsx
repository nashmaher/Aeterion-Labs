import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogPostPage() {
  return (
    <div className="pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Badge variant="gold">Supplementation</Badge>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mt-4 mb-4">
            L-Citrulline vs L-Arginine: Which is Better for Pumps?
          </h1>
          <p className="text-sm text-text-secondary">
            December 10, 2025 &middot; 5 min read
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-4">
          <p className="text-sm text-text-secondary leading-relaxed">
            For years, L-Arginine was the go-to supplement for boosting nitric oxide and achieving skin-splitting pumps. But modern research has revealed that L-Citrulline is actually the superior choice for most athletes.
          </p>
          <h2 className="text-lg font-medium text-text-primary mt-8 mb-2">The Science</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            While L-Arginine is a direct precursor to nitric oxide, it has poor oral bioavailability due to extensive first-pass metabolism in the gut and liver. L-Citrulline, on the other hand, bypasses this metabolism and is efficiently converted to L-Arginine in the kidneys, resulting in sustained elevated arginine levels.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            Studies show that supplementing with L-Citrulline actually raises plasma arginine levels more effectively than supplementing with L-Arginine itself. That&apos;s why every Aeterion pre-workout formula contains a full clinical dose of L-Citrulline at 6000-8000mg.
          </p>
          <h2 className="text-lg font-medium text-text-primary mt-8 mb-2">Why Dosage Matters</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Many supplement companies include L-Citrulline in their formulas but at sub-clinical doses. Research consistently shows that 6000-8000mg is the effective range for enhancing exercise performance and nitric oxide production. Anything less, and you&apos;re leaving results on the table.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            At Aeterion Labs, we believe in full transparency and clinical dosing. Our Ascension pre-workout contains 8000mg of pure L-Citrulline — the maximum clinically studied dose. No proprietary blends, no underdosing.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-secondary mb-4">
            Ready to experience clinically dosed supplements?
          </p>
          <Link href="/shop">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
