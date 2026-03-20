import Link from "next/link";

const footerLinks = {
  Shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop/pre-workout", label: "Pre-Workout" },
    { href: "/shop/protein", label: "Protein" },
    { href: "/bundles", label: "Bundles" },
    { href: "/subscribe", label: "Subscribe & Save" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/athletes", label: "Athletes" },
    { href: "/ingredients", label: "Ingredients" },
    { href: "/blog", label: "Blog" },
    { href: "/reviews", label: "Reviews" },
  ],
  Support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
    { href: "/policies/shipping", label: "Shipping" },
    { href: "/policies/returns", label: "Returns" },
    { href: "/account", label: "My Account" },
  ],
  Legal: [
    { href: "/policies/privacy", label: "Privacy Policy" },
    { href: "/policies/terms", label: "Terms of Service" },
    { href: "/policies/refund", label: "Refund Policy" },
  ],
};

const certifications = [
  "GMP Certified",
  "Lab Tested",
  "Made in USA",
  "No Proprietary Blends",
];

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="heading-display text-lg text-text-primary">
              Aeterion
            </Link>
            <p className="text-text-secondary text-xs mt-4 leading-relaxed">
              Elevating human performance beyond natural limits. Precision-built formulas
              with full transparency.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Twitter", "YouTube", "TikTok"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-text-secondary hover:text-accent-gold transition-colors text-xs uppercase tracking-wider"
                  aria-label={platform}
                >
                  {platform.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-[0.15em] text-text-primary font-medium mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-text-secondary hover:text-accent-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 text-xs text-text-secondary uppercase tracking-wider"
              >
                <div className="w-2 h-2 bg-accent-gold/50 rounded-full" />
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Aeterion Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
            <span>Google Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
