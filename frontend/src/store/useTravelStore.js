import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTravelStore = create(
  persist(
    (set, get) => ({
      // Active District Filter
      activeDistrict: 'all', // 'all' | 'Purulia' | 'Bankura'
      setActiveDistrict: (district) => set({ activeDistrict: district }),

      // Search Query
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),

      // Wishlist
      wishlist: [],
      toggleWishlist: (item) => {
        const { wishlist } = get();
        const exists = wishlist.some((w) => w.id === item.id);
        if (exists) {
          set({ wishlist: wishlist.filter((w) => w.id !== item.id) });
        } else {
          set({ wishlist: [...wishlist, item] });
        }
      },
      isInWishlist: (id) => get().wishlist.some((w) => w.id === id),
      clearWishlist: () => set({ wishlist: [] }),

      // Booking Modal State
      isBookingModalOpen: false,
      bookingTarget: null, // Stay or Circuit object
      openBookingModal: (target) => set({ isBookingModalOpen: true, bookingTarget: target }),
      closeBookingModal: () => set({ isBookingModalOpen: false, bookingTarget: null }),

      // UI Overlays
      isSearchDialogOpen: false,
      setSearchDialogOpen: (isOpen) => set({ isSearchDialogOpen: isOpen }),

      isWishlistOpen: false,
      setWishlistOpen: (isOpen) => set({ isWishlistOpen: isOpen }),

      // Soundscape Ambient Audio
      soundscapePlaying: false,
      toggleSoundscape: () => set((state) => ({ soundscapePlaying: !state.soundscapePlaying })),

      // Dark / Light Theme
      isDarkMode: false,
      toggleDarkMode: () => {
        const nextMode = !get().isDarkMode;
        if (nextMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        set({ isDarkMode: nextMode });
      },

      // Custom Itinerary Builder State
      itineraryDraft: {
        districtPreference: 'Both',
        days: 3,
        interests: ['Nature & Waterfalls', 'Heritage & Architecture', 'Tribal Culture & Chhau'],
        travelStyle: 'Balanced',
        guests: 2,
      },
      updateItineraryDraft: (updates) =>
        set((state) => ({
          itineraryDraft: { ...state.itineraryDraft, ...updates },
        })),
    }),
    {
      name: 'rarh-trails-storage',
      partialize: (state) => ({
        wishlist: state.wishlist,
        isDarkMode: state.isDarkMode,
      }),
    }
  )
);
