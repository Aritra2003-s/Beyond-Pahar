import React from 'react';
import { X, Heart, Trash2, ArrowRight, MapPin, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTravelStore } from '@/store/useTravelStore';
import { Button } from '@/components/ui/Button';

export function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setWishlistOpen, toggleWishlist, clearWishlist, openBookingModal } = useTravelStore();
  const navigate = useNavigate();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-card border-l border-border shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-border flex items-center justify-between bg-muted/20">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-palash-500 fill-palash-500" />
              <h2 className="font-display font-semibold text-lg">Saved Trails & Stays ({wishlist.length})</h2>
            </div>
            <button
              onClick={() => setWishlistOpen(false)}
              className="p-1 rounded-lg text-muted-foreground hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* List items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlist.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <Heart className="h-10 w-10 text-muted-foreground/40 mx-auto" />
                <p className="font-medium text-foreground">Your Rarh wishlist is empty</p>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Click the heart icon on any destination, circuit, or eco-stay to save it here for quick planning.
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex gap-3 p-3 rounded-xl border border-border bg-card/50 hover:bg-muted/30 transition-all"
                >
                  <img
                    src={item.coverImage || item.image}
                    alt={item.name || item.title}
                    className="h-20 w-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-foreground truncate">
                        {item.name || item.title}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(item)}
                        className="text-muted-foreground hover:text-destructive p-1"
                        title="Remove"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-palash-500" />
                      {item.district} District
                    </p>
                    {item.pricePerNight && (
                      <p className="text-xs font-semibold text-primary mt-1">
                        ₹{item.pricePerNight}/night
                      </p>
                    )}
                    {item.price && (
                      <p className="text-xs font-semibold text-secondary mt-1">
                        From ₹{item.price}
                      </p>
                    )}

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => {
                          setWishlistOpen(false);
                          if (item.duration) navigate('/#packages');
                          else if (item.pricePerNight) navigate('/stays');
                          else navigate(`/destinations/${item.id}`);
                        }}
                        className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
                      >
                        View details <ArrowRight className="h-3 w-3" />
                      </button>
                      {(item.price || item.pricePerNight) && (
                        <button
                          onClick={() => {
                            setWishlistOpen(false);
                            openBookingModal(item);
                          }}
                          className="text-xs font-medium text-palash-600 hover:text-palash-700 bg-palash-50 px-2 py-0.5 rounded-md"
                        >
                          Book Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-4 border-t border-border bg-muted/10 space-y-2">
              <Button
                variant="palash"
                className="w-full"
                onClick={() => {
                  setWishlistOpen(false);
                  navigate('/planner');
                }}
              >
                Plan Itinerary With Saved Items
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs text-muted-foreground hover:text-destructive"
                onClick={clearWishlist}
              >
                Clear all saved items
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
