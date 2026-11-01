import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle, Shield, Building2, Truck, AlertCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CtaSection } from '../components/common/CtaSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Residential Moving',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappInquiryUrl = `https://wa.me/96898386824?text=${encodeURIComponent(
    `Hello OAN Moving / Ali Raza International Trade, I have an inquiry regarding ${formData.service || 'Moving Services'}. My name is ${formData.name || 'a customer'}.`
  )}`;

  return (
    <>
      <SEO
        title="Contact Us | OAN Moving & Logistics Services | Muscat, Oman"
        description="Get in touch with Ali Raza International Trade SPC (OAN Moving). Visit our office in Ruwi/Muttrah, Muscat or call +968 9838 6824 for quick moving assistance."
        canonicalUrl="/contact"
        keywords="contact moving company Oman, OAN movers contact, Muscat moving company phone, Ruwi movers, Muttrah logistics office"
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#070D1E] via-[#0B132B] to-[#0F172A] text-white pt-10 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Muscat Headquarters & Customer Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Let&apos;s Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Upcoming Move</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions or need an on-site survey anywhere in Muscat or across the Sultanate? 
              Our relocation specialists are ready 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  Official Corporate Details
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Head Office</h3>
                      <p className="font-semibold text-slate-800 text-sm mt-0.5">Ali Raza International Trade SPC</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Ruwi / Muttrah Commercial Business Hub, Muscat, Sultanate of Oman
                      </p>
                      <p className="text-xs text-slate-500 mt-1 font-mono">
                        CR: 1481820 | Tax ID: 1896320
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone / WhatsApp</h3>
                      <a
                        href="tel:+96898386824"
                        className="text-slate-900 font-bold hover:text-orange-600 transition-colors block text-base mt-0.5"
                      >
                        +968 9838 6824
                      </a>
                      <a
                        href="https://wa.me/96898386824"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 mt-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Chat on WhatsApp (Instant Response)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Inquiries</h3>
                      <a
                        href="mailto:Iqumantransport@gmail.com"
                        className="text-slate-900 font-medium hover:text-orange-600 transition-colors block text-sm mt-0.5 break-all"
                      >
                        Iqumantransport@gmail.com
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Quotes, contracts & corporate tenders</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Operating Hours</h3>
                      <p className="text-slate-800 text-sm font-medium mt-0.5">Saturday – Thursday: 07:30 AM – 09:00 PM</p>
                      <p className="text-slate-600 text-sm">Friday: 02:00 PM – 08:00 PM</p>
                      <p className="text-xs font-semibold text-orange-600 mt-1 flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5" /> 24/7 Scheduled Moving Dispatch Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Card */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Urgent or Same-Day Move?</h3>
                    <p className="text-emerald-100 text-xs">Reach out via WhatsApp directly</p>
                  </div>
                </div>
                <p className="text-xs text-emerald-50 mb-4 leading-relaxed">
                  Send photos of your inventory for an instant photo-quote from our senior supervisor.
                </p>
                <a
                  href="https://wa.me/96898386824?text=Hello%20OAN%20Movers,%20I%20need%20an%20urgent%20moving%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-emerald-800 font-bold rounded-xl text-sm shadow hover:bg-emerald-50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Message on WhatsApp Now
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm mb-6 leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. 
                      Our moving logistics coordinator will review your request and contact you at{' '}
                      <span className="font-semibold text-slate-800">{formData.phone}</span> within 30 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={whatsappInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl text-sm hover:bg-emerald-700 transition"
                      >
                        <MessageSquare className="w-4 h-4" /> Continue on WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', service: 'Residential Moving', message: '' });
                        }}
                        className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-300 text-slate-700 font-semibold rounded-xl text-sm hover:bg-slate-50 transition"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-[#0F172A] tracking-tight mb-2">Send Us an Inquiry</h2>
                    <p className="text-slate-600 text-sm mb-6">
                      Fill out this quick form and our Muscat moving coordinator will respond with scheduling options.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Salim Al-Harthy"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Phone / WhatsApp Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+968 9XXXXXXX"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="salim@example.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Service Interested In
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white"
                          >
                            <option>Residential Moving</option>
                            <option>Commercial Moving</option>
                            <option>International Moving</option>
                            <option>Office Relocation</option>
                            <option>Furniture Moving</option>
                            <option>Packing & Unpacking</option>
                            <option>Loading & Unloading</option>
                            <option>Transportation & Logistics</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Message / Moving Details *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your move: origin, destination, preferred date, building floors, or any fragile items..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
                        ></textarea>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                        <span>
                          Need a calculated breakdown? Use our interactive{' '}
                          <a href="/moving-cost-calculator" className="font-bold underline text-amber-900">
                            Moving Cost Calculator
                          </a>{' '}
                          for estimated OMR rates.
                        </span>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Send Inquiry to Moving Team
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
