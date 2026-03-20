import { SectionHeading } from "@/components/ui/section-heading";

const policies: Record<string, { title: string; content: string[] }> = {
  shipping: {
    title: "Shipping Policy",
    content: [
      "Free shipping on all orders over $75 within the continental United States.",
      "Standard shipping (3-5 business days) is available for $5.99 on orders under $75.",
      "Expedited shipping (1-2 business days) is available for $12.99.",
      "Orders are processed within 1-2 business days. You'll receive a tracking number via email once your order ships.",
      "Currently shipping to the United States and Canada. International shipping coming soon.",
    ],
  },
  returns: {
    title: "Return Policy",
    content: [
      "We offer a 30-day money-back guarantee on all products.",
      "If you're not completely satisfied, contact our support team within 30 days of delivery for a full refund.",
      "Return shipping is covered by Aeterion Labs.",
      "Refunds are processed within 5-7 business days after we receive your return.",
      "Opened products are eligible for return if at least 75% of the product remains.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    content: [
      "Aeterion Labs is committed to protecting your privacy and personal information.",
      "We collect only the information necessary to process your orders and improve your experience.",
      "Your personal data is never sold to third parties.",
      "We use industry-standard encryption to protect your payment information.",
      "You can request deletion of your data at any time by contacting support@aeterionlabs.com.",
    ],
  },
  terms: {
    title: "Terms of Service",
    content: [
      "By using the Aeterion Labs website, you agree to these terms of service.",
      "Products are intended for use by healthy adults over 18 years of age.",
      "Consult your physician before using any dietary supplement.",
      "Prices and availability are subject to change without notice.",
      "Aeterion Labs reserves the right to limit quantities and refuse service.",
    ],
  },
  refund: {
    title: "Refund Policy",
    content: [
      "Full refunds are available within 30 days of delivery.",
      "Refunds are processed to the original payment method.",
      "Processing time is typically 5-7 business days after return receipt.",
      "Subscription orders can be refunded for the most recent shipment.",
      "Contact support@aeterionlabs.com to initiate a refund.",
    ],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  const policy = policies[slug] || { title: "Policy", content: ["Policy not found."] };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={policy.title} />
        <div className="space-y-4">
          {policy.content.map((paragraph, idx) => (
            <p key={idx} className="text-sm text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
