import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Truck, MapPin, Phone, AlertCircle, Calendar } from 'lucide-react';
import { BookingRecord } from '../types';

interface BookingTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingRecord[];
}

export const BookingTrackerModal: React.FC<BookingTrackerModalProps> = ({
  isOpen,
  onClose,
  bookings,
}) => {
  const [searchId, setSearchId] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<BookingRecord | null>(
    bookings.length > 0 ? bookings[0] : null
  );

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchId.trim().toUpperCase();
    const found = bookings.find((b) => b.id.toUpperCase() === query);
    if (found) {
      setSelectedBooking(found);
    } else {
      alert(`Booking reference "${query}" was not found in active records.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white border border-neutral-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Live Relocation Dispatch
            </div>
            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              Track Move & Reservation Status
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lookup Bar */}
        <form onSubmit={handleSearch} className="my-5 flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Booking ID (e.g. VR-84920)..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono uppercase"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap"
          >
            Look Up
          </button>
        </form>

        {/* Saved Bookings Selector if multiple exist */}
        {bookings.length > 1 && (
          <div className="mb-5 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-neutral-500 shrink-0 font-medium">Your Bookings:</span>
            {bookings.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBooking(b)}
                className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors whitespace-nowrap ${
                  selectedBooking?.id === b.id
                    ? 'bg-neutral-900 text-white font-bold'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {b.id} ({b.customer.fullName.split(' ')[0]})
              </button>
            ))}
          </div>
        )}

        {/* Selected Booking Card */}
        {selectedBooking ? (
          <div className="space-y-5">
            {/* Status Timeline */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-bold text-neutral-900 font-mono">
                  Reservation {selectedBooking.id}
                </span>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5 font-medium">
                  Status: {selectedBooking.status}
                </span>
              </div>

              {/* Progress Milestones */}
              <div className="grid grid-cols-4 gap-1 text-[11px] text-center pt-2">
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full" />
                  <span className="font-bold text-neutral-900">Booked</span>
                </div>
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full" />
                  <span className="font-bold text-neutral-900">Crew Assigned</span>
                </div>
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-neutral-300 rounded-full" />
                  <span className="text-neutral-400">Truck Staged</span>
                </div>
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-neutral-300 rounded-full" />
                  <span className="text-neutral-400">In Transit</span>
                </div>
              </div>
            </div>

            {/* Move Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white border border-neutral-200 p-3.5 rounded-xl space-y-2">
                <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Scheduled Timing</span>
                </div>
                <div className="text-neutral-600">
                  Date: <strong className="text-neutral-900 font-mono">{selectedBooking.schedule.moveDate}</strong>
                </div>
                <div className="text-neutral-600">
                  Window:{' '}
                  <strong className="text-neutral-900">
                    {selectedBooking.schedule.arrivalWindow === 'morning_8_10'
                      ? '8:00 AM – 10:00 AM'
                      : '1:00 PM – 3:00 PM'}
                  </strong>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-3.5 rounded-xl space-y-2">
                <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Assigned Fleet</span>
                </div>
                <div className="text-neutral-600">
                  Crew: <strong className="text-neutral-900">{selectedBooking.quote.recommendedCrew} Movers</strong>
                </div>
                <div className="text-neutral-600">
                  Truck: <strong className="text-neutral-900">{selectedBooking.quote.recommendedTruck}</strong>
                </div>
              </div>
            </div>

            {/* Route */}
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-xs space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-neutral-500 font-medium">Pickup (Origin):</div>
                  <div className="font-semibold text-neutral-900">
                    {selectedBooking.pickup.address}, {selectedBooking.pickup.city}, {selectedBooking.pickup.state} {selectedBooking.pickup.zip}
                  </div>
                  {selectedBooking.pickup.parkingInstructions && (
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      Note: {selectedBooking.pickup.parkingInstructions}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-neutral-100">
                <MapPin className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-neutral-500 font-medium">Drop-off (Destination):</div>
                  <div className="font-semibold text-neutral-900">
                    {selectedBooking.dropoff.address}, {selectedBooking.dropoff.city}, {selectedBooking.dropoff.state} {selectedBooking.dropoff.zip}
                  </div>
                </div>
              </div>
            </div>

            {/* Dispatch contact */}
            <div className="flex items-center justify-between p-3.5 bg-neutral-900 text-white rounded-xl text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-300" />
                <div>
                  <div className="font-bold">Need to adjust timing or add items?</div>
                  <div className="text-[11px] text-neutral-300">Call live dispatch at (800) 555-0199</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors text-[11px]"
              >
                Print Receipt
              </button>
            </div>
          </div>
        ) : (
          <div className="py-10 text-center text-xs text-neutral-500">
            No active reservation loaded. Enter your booking ID above.
          </div>
        )}
      </div>
    </div>
  );
};
