import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SearchDialog } from '@/components/common/SearchDialog';
import { WishlistDrawer } from '@/components/common/WishlistDrawer';
import { BookingModal } from '@/components/common/BookingModal';

import { HomePage } from '@/pages/HomePage';
import { DistrictExplorePage } from '@/pages/DistrictExplorePage';
import { DestinationsPage } from '@/pages/DestinationsPage';
import { DestinationDetailPage } from '@/pages/DestinationDetailPage';
import { StaysPage } from '@/pages/StaysPage';
import { StayDetailPage } from '@/pages/StayDetailPage';
import { ItineraryPlannerPage } from '@/pages/ItineraryPlannerPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { JournalPage } from '@/pages/JournalPage';
import { JournalDetailPage } from '@/pages/JournalDetailPage';
import { FaqPage } from '@/pages/FaqPage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { PolicyPage } from '@/pages/PolicyPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-deep text-charcoal dark:text-cream selection:bg-laterite selection:text-white">
            <Navbar />

            <main className="flex-1 relative z-0">
              <Routes>
                {/* 1. Home */}
                <Route path="/" element={<HomePage />} />

                {/* 2 & 3. District Explores */}
                <Route path="/purulia" element={<DistrictExplorePage districtName="Purulia" />} />
                <Route path="/bankura" element={<DistrictExplorePage districtName="Bankura" />} />

                {/* 4 & 5. Destinations */}
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route path="/destinations/:id" element={<DestinationDetailPage />} />

                {/* 6. Experiences - Landing page experience section only */}
                <Route path="/experiences" element={<Navigate to="/#experiences" replace />} />
                <Route path="/experiences/:slug" element={<Navigate to="/#experiences" replace />} />

                {/* 8 & 9. Stays */}
                <Route path="/stays" element={<StaysPage />} />
                <Route path="/stays/:slug" element={<StayDetailPage />} />

                {/* 10. Packages - Landing page package section only */}
                <Route path="/packages" element={<Navigate to="/#packages" replace />} />
                <Route path="/packages/:slug" element={<Navigate to="/#packages" replace />} />
                <Route path="/circuits" element={<Navigate to="/#packages" replace />} />
                <Route path="/circuits/:id" element={<Navigate to="/#packages" replace />} />

                {/* 12. Plan Your Trip */}
                <Route path="/plan-your-trip" element={<ItineraryPlannerPage />} />
                <Route path="/planner" element={<ItineraryPlannerPage />} />

                {/* 13 & 14. About & Contact */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* 15 & 16. Travel Journal */}
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/journal/:slug" element={<JournalDetailPage />} />

                {/* 17. FAQ */}
                <Route path="/faq" element={<FaqPage />} />

                {/* 18. Login & Register */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* 19, 20, 21. Legal & Policies */}
                <Route path="/privacy-policy" element={<PolicyPage policyType="privacy" />} />
                <Route path="/terms" element={<PolicyPage policyType="terms" />} />
                <Route path="/cancellation-policy" element={<PolicyPage policyType="cancellation" />} />

                {/* Catch-all Fallback */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>

            <Footer />

            {/* Overlays */}
            <SearchDialog />
            <WishlistDrawer />
            <BookingModal />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
