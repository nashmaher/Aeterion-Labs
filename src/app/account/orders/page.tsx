import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Order History" />
        <div className="text-center py-16 bg-bg-card border border-border rounded-sm">
          <p className="text-text-secondary text-sm mb-4">Sign in to view your order history</p>
          <Button>Sign In</Button>
        </div>
        <div className="mt-6 text-center">
          <Link href="/account" className="text-xs text-text-secondary hover:text-accent-gold transition-colors uppercase tracking-wider">
            Back to Account
          </Link>
        </div>
      </div>
    </div>
  );
}
