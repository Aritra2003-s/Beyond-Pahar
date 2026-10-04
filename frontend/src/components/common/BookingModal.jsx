import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { X, Calendar, User, Mail, Phone, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { useTravelStore } from '@/store/useTravelStore';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { formatPrice } from '@/lib/utils';

const bookingSchema = z.object({
  fullName: z.string().min(3, 'Please enter your full name (minimum 3 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  startDate: z.string().min(1, 'Please select a travel start date'),
  guests: z.coerce.number().min(1, 'At least 1 guest required').max(12, 'Maximum 12 guests per group'),
  specialRequests: z.string().optional(),
});

export function BookingModal() {
  const { isBookingModalOpen, closeBookingModal, bookingTarget } = useTravelStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      startDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      guests: 2,
      specialRequests: '',
    },
  });

  if (!isBookingModalOpen || !bookingTarget) return null;

  const guests = watch('guests') || 2;
  const isStay = Boolean(bookingTarget.pricePerNight);
  const baseRate = isStay ? bookingTarget.pricePerNight : bookingTarget.price;
  const estimatedTotal = isStay ? baseRate * 2 * Math.ceil(guests / 2) : baseRate * guests;

  const onSubmit = async (data) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    const bookingId = `RT-${bookingTarget.district.substring(0, 3).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    setConfirmedBookingId(bookingId);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e24a24', '#c45d3e', '#234b35', '#d9a74a'],
      });
    } catch {
      // Fallback
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    reset();
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-card border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-border bg-gradient-to-r from-palash-500/10 via-terracotta-500/10 to-sal-500/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {isStay ? 'Eco-Stay Reservation' : 'Curated Trail Booking'}
            </span>
            <h3 className="font-display font-bold text-xl text-foreground mt-0.5">
              {bookingTarget.name || bookingTarget.title}
            </h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3 text-palash-500" />
              {bookingTarget.location || `${bookingTarget.district} District`}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="h-16 w-16 bg-sal-100 dark:bg-sal-900/40 text-sal-700 dark:text-sal-300 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-2xl text-foreground">
                  Reservation Confirmed!
                </h4>
                <p className="text-sm text-muted-foreground">
                  Booking Reference: <strong className="text-primary font-mono">{confirmedBookingId}</strong>
                </p>
              </div>
              <div className="p-4 bg-muted/40 rounded-2xl text-left text-xs space-y-2 border border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-semibold">{bookingTarget.name || bookingTarget.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total (Simulated):</span>
                  <span className="font-semibold text-primary">{formatPrice(estimatedTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Mode:</span>
                  <span className="font-medium text-sal-700 dark:text-sal-400">Pay on Arrival / Direct to Host</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                A booking confirmation SMS and travel voucher have been simulated for your trip to {bookingTarget.district}!
              </p>
              <Button variant="palash" onClick={handleClose} className="w-full mt-4">
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Target Quick Info */}
              <div className="p-3 bg-muted/40 rounded-xl flex items-center justify-between text-xs border border-border">
                <span className="text-muted-foreground">
                  {isStay ? 'Rate per night:' : 'Estimated per person:'}
                </span>
                <span className="font-bold text-sm text-foreground">
                  {formatPrice(baseRate)}
                </span>
              </div>

              {/* Input Fields */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-muted-foreground" /> Full Name
                </label>
                <Input placeholder="e.g. Sourav Mukherjee" {...register('fullName')} />
                {errors.fullName && (
                  <p className="text-xs text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-muted-foreground" /> Email
                  </label>
                  <Input type="email" placeholder="you@example.com" {...register('email')} />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-muted-foreground" /> Phone Number
                  </label>
                  <Input placeholder="10-digit mobile" {...register('phone')} />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" /> Start Date
                  </label>
                  <Input type="date" {...register('startDate')} />
                  {errors.startDate && (
                    <p className="text-xs text-destructive">{errors.startDate.message}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-foreground">
                    Number of Guests
                  </label>
                  <Input type="number" min="1" max="12" {...register('guests')} />
                  {errors.guests && (
                    <p className="text-xs text-destructive">{errors.guests.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-foreground">
                  Special Notes / Dietary Preferences (Optional)
                </label>
                <Input
                  placeholder="e.g. Vegetarian, need village guide, pick up at Purulia station"
                  {...register('specialRequests')}
                />
              </div>

              {/* Price Calculation Summary */}
              <div className="pt-2 border-t border-border flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Estimated Total Amount</div>
                  <div className="text-lg font-bold text-primary">
                    {formatPrice(estimatedTotal)}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-sal-700 dark:text-sal-400 font-medium">
                  <ShieldCheck className="h-4 w-4" />
                  <span>No prepayment needed</span>
                </div>
              </div>

              <Button
                type="submit"
                variant="palash"
                size="lg"
                disabled={isSubmitting}
                className="w-full mt-2"
              >
                {isSubmitting ? 'Securing Dates...' : 'Confirm Demo Reservation'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
