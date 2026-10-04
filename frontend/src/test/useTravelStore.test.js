import { describe, it, expect, beforeEach } from 'vitest';
import { useTravelStore } from '@/store/useTravelStore';

describe('useTravelStore Zustand Store', () => {
  beforeEach(() => {
    useTravelStore.setState({
      activeDistrict: 'all',
      wishlist: [],
      isBookingModalOpen: false,
      bookingTarget: null,
      soundscapePlaying: false,
    });
  });

  it('should initialize with default state', () => {
    const state = useTravelStore.getState();
    expect(state.activeDistrict).toBe('all');
    expect(state.wishlist).toEqual([]);
    expect(state.isBookingModalOpen).toBe(false);
  });

  it('should set active district', () => {
    useTravelStore.getState().setActiveDistrict('Purulia');
    expect(useTravelStore.getState().activeDistrict).toBe('Purulia');

    useTravelStore.getState().setActiveDistrict('Bankura');
    expect(useTravelStore.getState().activeDistrict).toBe('Bankura');
  });

  it('should toggle items in wishlist correctly', () => {
    const testItem = { id: 'ayodhya-hills', name: 'Ayodhya Hills' };

    useTravelStore.getState().toggleWishlist(testItem);
    expect(useTravelStore.getState().wishlist).toHaveLength(1);
    expect(useTravelStore.getState().isInWishlist('ayodhya-hills')).toBe(true);

    useTravelStore.getState().toggleWishlist(testItem);
    expect(useTravelStore.getState().wishlist).toHaveLength(0);
    expect(useTravelStore.getState().isInWishlist('ayodhya-hills')).toBe(false);
  });

  it('should manage booking modal state', () => {
    const target = { id: 'kushal-palli', name: 'Kushal Palli Resort', pricePerNight: 4200, district: 'Purulia' };
    useTravelStore.getState().openBookingModal(target);

    expect(useTravelStore.getState().isBookingModalOpen).toBe(true);
    expect(useTravelStore.getState().bookingTarget).toEqual(target);

    useTravelStore.getState().closeBookingModal();
    expect(useTravelStore.getState().isBookingModalOpen).toBe(false);
    expect(useTravelStore.getState().bookingTarget).toBeNull();
  });
});
