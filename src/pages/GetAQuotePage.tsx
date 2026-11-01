import React, { useState, useEffect } from 'react';
import { Shield, Clock, CheckCircle2, MessageSquare, ArrowRight, Truck, FileText, Sparkles, Building2, AlertCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface PrefillData {
  from?: string;
  to?: string;
  date?: string;
  moveType?: string;
  propertyType?: string;
  additionalServices?: string[];
  estimatedCostMin?: number;
  estimatedCostMax?: number;
  totalOMR?: number;
}

export default function GetAQuotePage() {
  const [prefill, setPrefill] = useState<PrefillData | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    originCity: 'Muscat (Muttrah / Ruwi)',
    originFloor: 'Ground Floor',
    originElevator: 'yes',
    destCity: 'Muscat (Al Khuwair / Bausher)',
    destFloor: '1st - 2nd Floor',
    destElevator: 'yes',
    moveDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    timePreference: 'Morning (08:00 AM - 12:00 PM)',
    propertyType: '2-Bedroom Apartment',
    moveType: 'Residential Moving',
    services: ['Furniture packing', 'Loading and unloading'],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('oan_quote_prefill');
      if (stored) {
        const parsed = JSON.parse(stored);
        setPrefill(parsed);
        setFormData((prev) => ({
          ...prev,
          originCity: parsed.from || prev.originCity,
          destCity: parsed.to || prev.destCity,
          moveDate: parsed.date || prev.moveDate,
          moveType: parsed.moveType ? `${parsed.moveType} Moving` : prev.moveType,
          propertyType: parsed.propertyType || prev.propertyType,
          services: parsed.additionalServices && parsed.additionalServices.length > 0 ? parsed.additionalServices : prev.services,
        }));
      }
    } catch {
      // ignore JSON parse issue
    }
  }, []);

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== srv) : [...prev.services, srv],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const generatedRef = `OAN-${Math.floor(100000 + Math.random() * 900000)}`;
      setQuoteRef(generatedRef);
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 700);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `*New Moving Quote Request (${quoteRef || 'OAN Inquiry'})*
----------------------------------------
*Customer:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Move Type:* ${formData.moveType}
*Property:* ${formData.propertyType}
*From:* ${formData.originCity} (Floor: ${formData.originFloor}, Elevator: ${formData.originElevator})
*To:* ${formData.destCity} (Floor: ${formData.destFloor}, Elevator: ${formData.destElevator})
*Preferred Date:* ${formData.moveDate} (${formData.timePreference})
*Requested Services:* ${formData.services.join(', ')}
${prefill?.totalOMR ? `*Calculator Estimate:* OMR ${prefill.totalOMR}\n` : ''}*Special Notes:* ${formData.notes || 'None'}
----------------------------------------
_Inquiry via Ali Raza International Trade SPC (OAN Moving)_`;

    return `https://wa.me/96898386824?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <SEO
        title="Request a Free Moving Quote | Ali Raza International Trade SPC"
        description="Book your free, transparent moving quote with OAN Moving & Logistics in Oman. Guaranteed rates, licensed & insured movers, prompt dispatch."
        canonicalUrl="/get-a-quote"
        keywords="free moving quote Oman, moving estimate Muscat, hire movers Oman, OAN moving booking"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#070D1E] via-[#0B132B] to-[#0F172A] text-white pt-10 pb-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Request a Free Quote' }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              100% Free · No Obligation · Fast Dispatch
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Request Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Free Moving Quote</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Complete the details below and our logistics coordinator will prepare a tailored proposal with clear, flat-rate pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quote Area */}
      <section className="py-14 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Prefill Banner from Calculator if detected */}
          {prefill && !submitted && (
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border border-orange-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm sm:text-base">
                    Transferred from Moving Cost Calculator
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Calculated Estimate:{' '}
                    <span className="font-bold text-orange-600 text-base">
                      {prefill.totalOMR ? `OMR ${prefill.totalOMR}` : `OMR ${prefill.estimatedCostMin || 45} - ${prefill.estimatedCostMax || 95}`}
                    </span>{' '}
                    · Route: {prefill.from || 'Origin'} → {prefill.to || 'Destination'}
                  </p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 bg-white border border-orange-200 text-orange-800 font-semibold rounded-full shrink-0 shadow-sm">
                Estimate Attached to Inquiry
              </span>
            </div>
          )}

          {submitted ? (
            /* Confirmation Screen */
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-200 mb-3">
                Quote Request Registered
              </span>

              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                Thank You, {formData.name}!
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
                Your moving quotation request has been officially received. Our Muscat dispatch supervisor will verify inventory and get back to you shortly.
              </p>

              {/* Reference Box */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-md mx-auto mb-8 text-left">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs uppercase font-bold text-slate-400">Reference Number</span>
                  <span className="font-mono font-bold text-orange-600 text-sm">{quoteRef}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs text-slate-600">
                  <span>Phone Number:</span>
                  <span className="font-medium text-slate-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs text-slate-600">
                  <span>Target Moving Date:</span>
                  <span className="font-medium text-slate-800">{formData.moveDate}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs text-slate-600">
                  <span>Route:</span>
                  <span className="font-medium text-slate-800">{formData.originCity} → {formData.destCity}</span>
                </div>
                {prefill?.totalOMR && (
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200 text-xs font-bold text-slate-800">
                    <span>Calculator Estimate:</span>
                    <span className="text-orange-600">OMR {prefill.totalOMR}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Send Request to WhatsApp (Fastest)
                </a>

                <a
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-all"
                >
                  Return to Home
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-emerald-600" /> CR: 1481820</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-blue-600" /> 30-Min Response Time</span>
                <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-orange-600" /> Muscat HQ</span>
              </div>
            </div>
          ) : (
            /* Quote Submission Form */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main Form (8 cols) */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Customer Contact Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">
                        1
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">Your Contact Details</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ahmed Al-Balushi"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+968 9838 6824"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@domain.om"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Locations & Property */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">
                        2
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">Moving Locations & Access</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Origin */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                          Pickup Location (Moving From)
                        </span>
                        <div>
                          <label className="block text-xs text-slate-600 mb-1">City / District / Area</label>
                          <input
                            type="text"
                            required
                            value={formData.originCity}
                            onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                            placeholder="e.g. Al Mouj, Muscat"
                            className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-600 mb-1">Floor Level</label>
                            <select
                              value={formData.originFloor}
                              onChange={(e) => setFormData({ ...formData, originFloor: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs"
                            >
                              <option>Ground Floor / Villa</option>
                              <option>1st - 2nd Floor</option>
                              <option>3rd - 5th Floor</option>
                              <option>6th Floor or Higher</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-slate-600 mb-1">Elevator Access?</label>
                            <select
                              value={formData.originElevator}
                              onChange={(e) => setFormData({ ...formData, originElevator: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs"
                            >
                              <option value="yes">Yes, Service / Lift</option>
                              <option value="no">No (Stairs only)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Destination */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          Drop-Off Location (Moving To)
                        </span>
                        <div>
                          <label className="block text-xs text-slate-600 mb-1">City / District / Area</label>
                          <input
                            type="text"
                            required
                            value={formData.destCity}
                            onChange={(e) => setFormData({ ...formData, destCity: e.target.value })}
                            placeholder="e.g. Sohar, Al Batinah"
                            className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-600 mb-1">Floor Level</label>
                            <select
                              value={formData.destFloor}
                              onChange={(e) => setFormData({ ...formData, destFloor: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs"
                            >
                              <option>Ground Floor / Villa</option>
                              <option>1st - 2nd Floor</option>
                              <option>3rd - 5th Floor</option>
                              <option>6th Floor or Higher</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-slate-600 mb-1">Elevator Access?</label>
                            <select
                              value={formData.destElevator}
                              onChange={(e) => setFormData({ ...formData, destElevator: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs"
                            >
                              <option value="yes">Yes, Service / Lift</option>
                              <option value="no">No (Stairs only)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Date, Time & Property Size */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">
                        3
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">Moving Schedule & Scale</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Preferred Moving Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.moveDate}
                          onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Time Slot
                        </label>
                        <select
                          value={formData.timePreference}
                          onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                        >
                          <option>Morning (08:00 AM - 12:00 PM)</option>
                          <option>Afternoon (12:00 PM - 04:00 PM)</option>
                          <option>Evening (04:00 PM - 08:00 PM)</option>
                          <option>Night / Flexible</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Property Type / Size
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                        >
                          <option>Studio Apartment</option>
                          <option>1-Bedroom Apartment</option>
                          <option>2-Bedroom Apartment</option>
                          <option>3-Bedroom Apartment</option>
                          <option>4+ Bedroom House</option>
                          <option>Villa (Multi-Story)</option>
                          <option>Commercial Office</option>
                          <option>Industrial / Warehouse Items</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Additional Moving Services */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">
                        4
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">Optional Extra Services</h2>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">
                      Select any specialized services you would like included in your quotation:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'Furniture packing', title: 'Full Furniture Wrapping', desc: 'Bubble wrap, stretch film, edge guards' },
                        { id: 'Unpacking services', title: 'Unpacking at Destination', desc: 'Unpack, arrange and remove discarded debris' },
                        { id: 'Furniture dismantling', title: 'Furniture Carpentry', desc: 'Dismantling beds, wardrobes, dining sets' },
                        { id: 'Furniture assembly', title: 'Re-Assembly Service', desc: 'Precise reconstruction and wall-anchoring' },
                        { id: 'Fragile item handling', title: 'Crockery & Glassware Crating', desc: 'Cell-pack boxes for delicate china' },
                        { id: 'Storage requirements', title: 'Short/Long-Term Storage', desc: 'Secure air-cooled Muscat warehousing' },
                      ].map((item) => {
                        const checked = formData.services.includes(item.id);
                        return (
                          <label
                            key={item.id}
                            className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              checked
                                ? 'bg-orange-50/60 border-orange-400'
                                : 'bg-white border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleService(item.id)}
                              className="w-4 h-4 mt-0.5 rounded text-orange-600 focus:ring-orange-500 border-slate-300"
                            />
                            <div>
                              <p className="text-xs font-bold text-slate-900">{item.title}</p>
                              <p className="text-[11px] text-slate-500">{item.desc}</p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 5: Notes & Submit */}
                  <div className="pt-6 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Inventory Details or Special Instructions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="List major items (e.g. 1 king bed, 6-seater sofa, American fridge, 20 carton boxes, safe or piano)..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                    ></textarea>

                    <div className="mt-4 flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                      <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>
                        All estimates are prepared in strict adherence to Omani commercial regulations. No hidden charges or last-minute fuel surcharges.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-6 w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold rounded-2xl shadow-lg shadow-orange-500/25 text-base flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Processing your request...</span>
                      ) : (
                        <>
                          <FileText className="w-5 h-5" /> Request Official Moving Quote
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Sidebar Trust & Information (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Guarantee Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-600" />
                    The OAN Moving Commitment
                  </h3>
                  <ul className="space-y-3.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>No Deposit Required</strong> for standard in-town Muscat residential moves.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>All-Inclusive Proposals</strong> detailing packing boxes, labor, and transport.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Clean, Covered Fleet</strong> equipped with hydraulic liftgates and heavy ties.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Trained Carpenters</strong> on board for safe dismantling and re-erection.</span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <p className="text-xs text-slate-500 mb-2">Want to calculate instant ballpark rates first?</p>
                    <a
                      href="/moving-cost-calculator"
                      className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                    >
                      Open 5-Step Moving Calculator &rarr;
                    </a>
                  </div>
                </div>

                {/* Direct Phone Support Card */}
                <div className="bg-[#0F172A] text-white rounded-3xl p-6 shadow-md border border-slate-800">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                    Need an immediate quote?
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">Call Our Dispatch Desk</h3>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Speak directly with an operations supervisor for same-day bookings or immediate emergency moves.
                  </p>
                  <a
                    href="tel:+96898386824"
                    className="block w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl text-center text-sm shadow transition-colors"
                  >
                    +968 9838 6824
                  </a>
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    Available Sat - Thu 07:30 to 21:00 · Fri 14:00 to 20:00
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
