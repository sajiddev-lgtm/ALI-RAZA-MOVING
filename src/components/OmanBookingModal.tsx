import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  MapPin,
  Phone,
  MessageCircle,
  Truck,
  ShieldCheck,
  ArrowRight,
  User,
} from 'lucide-react';
import { COMPANY_PROFILE, calculateOmanQuote, OmanQuoteParams } from '../data/omanData';

interface OmanBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: Partial<OmanQuoteParams>;
}

export const OmanBookingModal: React.FC<OmanBookingModalProps> = ({
  isOpen,
  onClose,
  prefill,
}) => {
  const [serviceType, setServiceType] = useState<OmanQuoteParams['serviceType']>(
    prefill?.serviceType || 'house_moving'
  );
  const [moveSize, setMoveSize] = useState<OmanQuoteParams['moveSize']>(
    prefill?.moveSize || '2bhk'
  );
  const [distanceCategory, setDistanceCategory] = useState<OmanQuoteParams['distanceCategory']>(
    prefill?.distanceCategory || 'local_muscat'
  );

  const [pickupArea, setPickupArea] = useState(
    (prefill as any)?.pickupArea || 'Ruwi High Street, Muscat'
  );
  const [destinationArea, setDestinationArea] = useState(
    (prefill as any)?.destinationArea || 'Al Mouj Sector 4, Seeb'
  );
  const [moveDate, setMoveDate] = useState(() => {
    const d = new Date(Date.now() + 3 * 86400000);
    return d.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('Morning (8:00 AM – 12:00 PM)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState((prefill as any)?.phone || '+968 ');
  const [notes, setNotes] = useState('');

  const [submittedBookingId, setSubmittedBookingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const quoteEstimate = calculateOmanQuote({
    serviceType,
    moveSize,
    distanceCategory,
    helpersCount: 3,
    packingNeeded: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `OAN-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedBookingId(id);
  };

  const formattedWhatsApp = `Salam Ali Raza International Trade SPC / OAN Relocations!%0A%0A*New Booking Request (%23${submittedBookingId})*%0A- Customer: ${fullName}%0A- Phone: ${phone}%0A- Service: ${serviceType}%0A- Size: ${moveSize}%0A- Pickup: ${pickupArea}%0A- Destination: ${destinationArea}%0A- Date: ${moveDate} (${timeSlot})%0A- Notes: ${notes || 'Standard move'}%0A- Estimated: ${quoteEstimate.estimatedTotalLowOMR} - ${quoteEstimate.estimatedTotalHighOMR} OMR%0A%0APlease confirm my booking.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="bg-[#0B132B] border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 text-left text-slate-100 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
              Ali Raza International Trade SPC · CR: {COMPANY_PROFILE.crNumber}
            </div>
            <h3 className="text-xl font-black text-white mt-1">
              Book Moving, Logistics or Materials Transport
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedBookingId ? (
          /* Confirmation Screen */
          <div className="py-6 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Booking Reference
              </div>
              <div className="text-3xl font-mono font-black text-orange-400 my-1">
                {submittedBookingId}
              </div>
              <h4 className="text-lg font-bold text-white">
                Shukran! Your Move Request Has Been Logged.
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-2">
                Our Muscat dispatch coordinator will contact you at <strong className="text-white">{phone}</strong> within 30 minutes to confirm vehicle assignment and packing timing.
              </p>
            </div>

            {/* Move Snapshot */}
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-xs text-left space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Customer:</span>
                <span className="font-semibold text-white">{fullName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Route:</span>
                <span className="font-semibold text-white">{pickupArea} → {destinationArea}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Date & Window:</span>
                <span className="font-semibold text-white">{moveDate} ({timeSlot})</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span>Estimated Price:</span>
                <span className="font-mono font-bold text-orange-400">
                  {quoteEstimate.estimatedTotalLowOMR} – {quoteEstimate.estimatedTotalHighOMR} OMR
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Confirmation Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_PROFILE.whatsapp}?text=${formattedWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify Dispatch on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Active Form */
          <form onSubmit={handleSubmit} className="py-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Service Category
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as any)}
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white"
                >
                  <option value="house_moving">OAN House & Villa Moving</option>
                  <option value="office_moving">Corporate Office Relocation</option>
                  <option value="building_materials">Building Materials Delivery</option>
                  <option value="waste_collection">Commercial Site Waste Clearance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Property or Load Size
                </label>
                <select
                  value={moveSize}
                  onChange={(e) => setMoveSize(e.target.value as any)}
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white"
                >
                  <option value="studio_small">Studio / Single Room / Small Van</option>
                  <option value="1bhk">1 BHK Apartment</option>
                  <option value="2bhk">2 BHK Flat / Small Villa</option>
                  <option value="3bhk_villa">3-4 BHK Large Villa</option>
                  <option value="large_villa_office">Commercial Office / Multiple Loads</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Pickup Location / Area in Oman
                </label>
                <input
                  type="text"
                  required
                  value={pickupArea}
                  onChange={(e) => setPickupArea(e.target.value)}
                  placeholder="e.g. Ruwi, Qurum, Al Khuwair, Seeb..."
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Drop-off Location / Destination
                </label>
                <input
                  type="text"
                  required
                  value={destinationArea}
                  onChange={(e) => setDestinationArea(e.target.value)}
                  placeholder="e.g. Al Mouj, Bowsher, Nizwa, Barka..."
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Preferred Move Date
                </label>
                <input
                  type="date"
                  required
                  value={moveDate}
                  onChange={(e) => setMoveDate(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Arrival Time Window
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white"
                >
                  <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                  <option value="Evening (6:00 PM – 10:00 PM)">Evening (6:00 PM – 10:00 PM)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name / Company Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Salim Al Balushi"
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Oman Mobile Phone (WhatsApp)
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+968 98386824"
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Special Notes / Furniture Dismantling Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Number of bedrooms, elevator availability, heavy safe or TV wall mounts..."
                className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white"
              />
            </div>

            {/* Price Preview Banner */}
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Guaranteed Estimate:</span>
              <span className="font-mono font-bold text-orange-400 text-sm">
                {quoteEstimate.estimatedTotalLowOMR} – {quoteEstimate.estimatedTotalHighOMR} OMR
              </span>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 rounded-xl transition-all shadow-md shadow-orange-500/20 cursor-pointer"
              >
                Submit & Reserve Move Slot
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
