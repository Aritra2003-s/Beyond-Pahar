import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, FileText, RefreshCw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PolicyPage({ policyType = 'privacy' }) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      updated: 'October 2026',
      icon: ShieldCheck,
      body: `
        At BeyondPahar, we treat the personal privacy of our travelers with absolute integrity. This policy outlines how inquiry details, names, emails, and reservation preferences are handled.

        ### Information Collected
        We collect only the contact information provided voluntarily through our trip planning forms and reservation inquiry modals (name, phone number, email address, travel dates, and group size).

        ### How Your Information is Used
        - To plan, customize, and verify your travel itineraries with our regional guides and partner homestays.
        - To coordinate pickup arrangements with verified local drivers in Purulia and Bankura.
        - We do not sell, rent, or trade traveler data to third-party marketing companies.

        ### Community Data Security
        All reservation records are stored securely. Payment transactions during demo interactions are simulated and no real credit card or bank credentials are required or stored.
      `
    },
    terms: {
      title: 'Terms & Conditions',
      updated: 'October 2026',
      icon: FileText,
      body: `
        Welcome to BeyondPahar. By planning or booking curated regional journeys through our platform, you agree to the following terms designed to protect travelers and indigenous communities alike.

        ### Responsible & Respectful Tourism
        - **Sacred Groves & Jaherthan:** Travelers must respect local tribal traditions, sacred groves, and village customs in Santhal, Kurmali, and Bhumij hamlets.
        - **Zero Littering:** The Sal and Mahua forests of Ajodhya Hills, Bamni Falls, and Baranti are pristine natural ecosystems. All plastic wrappers and non-biodegradable items must be carried back to town centers.

        ### Local Guides & Vehicle Logistics
        - Sightseeing circuits depend on seasonal weather conditions and state forest regulations. In case of unexpected flash monsoon flows at hill waterfalls, guides reserve the right to modify walking trails for group safety.

        ### Direct Artisan Remuneration
        - Workshop fees for masterclasses in Charida (Chhau masks), Panchmura (terracotta), and Bikna (Dokra) are remitted directly to the artisan families.
      `
    },
    cancellation: {
      title: 'Cancellation & Refund Policy',
      updated: 'October 2026',
      icon: RefreshCw,
      body: `
        We understand that travel schedules may change due to personal or railway transit disruptions. Our cancellation policies are designed to be fair to both travelers and our village hosts.

        ### Flexible Cancellation Windows
        - **Cancellations up to 72 hours prior to arrival:** 100% full refund or free rescheduling to any available dates within 12 months.
        - **Cancellations within 24 to 72 hours:** 80% refund (20% retained to cover perishable local food preparation by village homestay hosts).
        - **Same-day cancellations or no-shows:** Homestay night charge applies to ensure rural families are not financially penalized.

        ### Weather Disruptions
        If train services or roads are closed due to rare weather emergencies, 100% credit is issued for future travel without any deduction.
      `
    }
  };

  const selected = content[policyType] || content.privacy;
  const IconComponent = selected.icon;

  return (
    <div className="py-14">
      <Helmet>
        <title>{`${selected.title} | BeyondPahar`}</title>
      </Helmet>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl space-y-8">
        <Link to="/" className="text-xs font-semibold text-laterite hover:underline inline-flex items-center gap-1">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to homepage
        </Link>

        <div className="space-y-2 border-b border-border pb-6">
          <div className="flex items-center gap-2 text-laterite">
            <IconComponent className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-wider">Legal & Transparency</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream">
            {selected.title}
          </h1>
          <p className="text-xs text-softgrey">Last updated: {selected.updated}</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert text-charcoal/90 dark:text-cream/90 text-sm leading-relaxed whitespace-pre-line space-y-4">
          {selected.body}
        </div>
      </div>
    </div>
  );
}
