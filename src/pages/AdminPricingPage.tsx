import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Save,
  UploadCloud,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  Truck,
  Layers,
  Percent,
  Coins,
  History,
  LogOut,
  Building2,
  Eye,
  EyeOff,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { pricingService, PricingStoreState } from '../services/pricingService';
import { useLanguage } from '../context/LanguageContext';

export const AdminPricingPage: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Store state
  const [pricingStore, setPricingStore] = useState<PricingStoreState | null>(null);
  const [activeTab, setActiveTab] = useState<'base' | 'distance' | 'services' | 'taxes' | 'currency' | 'history'>('base');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  // Check existing session
  useEffect(() => {
    if (pricingService.isAuthenticated()) {
      setIsAuthenticated(true);
      loadStore();
    }
  }, []);

  const loadStore = async () => {
    const store = await pricingService.getAdminPricingStore();
    if (store) {
      setPricingStore(store);
    } else {
      // Session expired or invalid
      setIsAuthenticated(false);
      pricingService.logout();
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    const res = await pricingService.login(passwordInput);
    setIsLoggingIn(false);
    if (res.success) {
      setIsAuthenticated(true);
      setPasswordInput('');
      await loadStore();
    } else {
      setLoginError(res.error || 'Invalid administrator password.');
    }
  };

  const handleLogout = () => {
    pricingService.logout();
    setIsAuthenticated(false);
    setPricingStore(null);
  };

  const updateDraft = (updater: (draft: any) => any) => {
    if (!pricingStore) return;
    const updatedDraft = updater({ ...pricingStore.draft });
    setPricingStore({
      ...pricingStore,
      draft: updatedDraft,
    });
  };

  const handleSaveDraft = async () => {
    if (!pricingStore) return;
    setIsSaving(true);
    const success = await pricingService.saveDraft(pricingStore.draft);
    setIsSaving(false);
    if (success) {
      setNotification({ type: 'success', message: 'Draft pricing configuration saved to secure storage.' });
      setTimeout(() => setNotification(null), 4000);
    } else {
      setNotification({ type: 'error', message: 'Failed to save draft. Check administrative credentials.' });
    }
  };

  const handlePublish = async () => {
    if (!pricingStore) return;
    setIsPublishing(true);
    const success = await pricingService.publishDraft();
    setIsPublishing(false);
    if (success) {
      await loadStore();
      setNotification({
        type: 'success',
        message: 'Published successfully! All changes are now active on customer-facing calculators.',
      });
      setTimeout(() => setNotification(null), 5000);
    } else {
      setNotification({ type: 'error', message: 'Failed to publish configuration.' });
    }
  };

  const handleResetToPublished = async () => {
    if (!confirm('Revert all current unsaved/draft changes back to the active published configuration?')) {
      return;
    }
    const success = await pricingService.resetDraft();
    if (success) {
      await loadStore();
      setNotification({ type: 'success', message: 'Draft successfully reverted to current published rates.' });
      setTimeout(() => setNotification(null), 4000);
    }
  };

  return (
    <>
      <SEO
        title="Admin Pricing Dashboard | ALI RAZA INTERNATIONAL TRADE SPS"
        description="Secure administrator management panel for moving tariff rates, vehicle logistics, and cargo services."
        canonicalPath="/admin/pricing"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-[#070D1E] dark:via-[#0B132B] dark:to-[#0F172A] pt-8 pb-12 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Admin Portal' }, { label: 'Pricing Configuration' }]} />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Authorized Operations Panel · CR: 1481820
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {language === 'ar' ? 'لوحة إدارة تعرفة وأسعار النقل' : 'Moving Tariff & Pricing Dashboard'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'ar'
                  ? 'إدارة أسعار الشحن والنقل المنزلي والمكتبي بدون تعديل الكود المصدري'
                  : 'Manage real pricing rules, minimums, and distance surcharges across Oman'}
              </p>
            </div>

            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 shadow-sm hover:bg-red-50 dark:hover:bg-red-950/30 transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                {language === 'ar' ? 'تسجيل الخروج' : 'Log Out'}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-slate-50 dark:bg-[#070D1E] min-h-[70vh] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isAuthenticated ? (
            /* Secure Login Gate */
            <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                <Lock className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-2">
                {language === 'ar' ? 'تسجيل دخول الإدارة' : 'Administrator Authentication'}
              </h2>
              <p className="text-xs text-center text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                {language === 'ar'
                  ? 'هذه المنطقة مخصصة لإدارة أسعار شركة علي رضا للتجارة الدولية. يرجى إدخال كلمة المرور المعتمدة.'
                  : 'Access restricted to authorized management of Ali Raza International Trade SPS.'}
              </p>

              {loginError && (
                <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 text-xs rounded-xl border border-red-200 dark:border-red-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    {language === 'ar' ? 'كلمة مرور المشرف' : 'Admin Passphrase'}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-2.5 right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Default access initialized: <code className="font-mono text-orange-600 dark:text-amber-400 font-bold">OanAdmin2026!</code>
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isLoggingIn ? (language === 'ar' ? 'جاري التحقق...' : 'Authenticating...') : (language === 'ar' ? 'دخول لوحة التحكم' : 'Unlock Dashboard')}
                </button>
              </form>
            </div>
          ) : pricingStore ? (
            /* Authenticated Admin Dashboard */
            <div className="space-y-8">
              {/* Notification Banner */}
              {notification && (
                <div
                  className={`p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                    notification.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800'
                      : 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800'
                  }`}
                >
                  {notification.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                  <span>{notification.message}</span>
                </div>
              )}

              {/* Top Overview Cards & Action Bar */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Services</span>
                      <span className="text-xl font-black text-slate-900 dark:text-white font-mono">
                        {Object.keys(pricingStore.draft.basePropertyPricing || {}).length +
                          Object.keys(pricingStore.draft.additionalServices || {}).length}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Active Currency</span>
                      <span className="text-xl font-black text-orange-600 dark:text-amber-400 font-mono">
                        {pricingStore.draft.currency?.code || 'OMR'}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Last Published</span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-mono">
                        {new Date(pricingStore.published?.lastUpdated || Date.now()).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Status</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Published
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-end">
                    <button
                      type="button"
                      onClick={handleResetToPublished}
                      className="px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'إعادة ضبط' : 'Revert Draft'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSaveDraft}
                      disabled={isSaving}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-bold flex items-center gap-1.5 shadow transition cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{isSaving ? 'Saving...' : language === 'ar' ? 'حفظ المسودة' : 'Save Draft'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handlePublish}
                      disabled={isPublishing}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-orange-500/20 transition cursor-pointer disabled:opacity-50"
                    >
                      <UploadCloud className="w-4 h-4" />
                      <span>{isPublishing ? 'Publishing...' : language === 'ar' ? 'نشر الأسعار للعملاء' : 'Publish Changes'}</span>
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  {[
                    { id: 'base', label: language === 'ar' ? 'أسعار العقارات السكنية' : 'Base Property Rates', icon: Building2 },
                    { id: 'distance', label: language === 'ar' ? 'تعرفة المسافة والمحافظات' : 'Distance & Surcharges', icon: Truck },
                    { id: 'services', label: language === 'ar' ? 'الخدمات الإضافية والنجارة' : 'Additional Services', icon: Layers },
                    { id: 'taxes', label: language === 'ar' ? 'الضرائب والخصومات' : 'Taxes & Discounts', icon: Percent },
                    { id: 'currency', label: language === 'ar' ? 'العملة والتنسيق' : 'Currency Setting', icon: Coins },
                    { id: 'history', label: language === 'ar' ? 'سجل التعديلات' : 'Audit Log', icon: History },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab 1: Base Property Rates */}
                {activeTab === 'base' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Configure baseline moving charges, minimum fees, and labor allocation for residential and commercial scales in Oman.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(pricingStore.draft.basePropertyPricing || {}).map(([key, prop]: [string, any]) => (
                        <div
                          key={key}
                          className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 dark:text-white text-xs">{prop.name}</span>
                            <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                              <input
                                type="checkbox"
                                checked={prop.active}
                                onChange={(e) => {
                                  updateDraft((d) => {
                                    d.basePropertyPricing[key].active = e.target.checked;
                                    return d;
                                  });
                                }}
                                className="w-3.5 h-3.5 text-orange-600 rounded"
                              />
                              <span className="text-[11px] text-slate-500 dark:text-slate-400">Active</span>
                            </label>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            <div>
                              <label className="block text-[10px] text-slate-500 uppercase font-semibold">Base (OMR)</label>
                              <input
                                type="number"
                                value={prop.basePrice}
                                onChange={(e) => {
                                  updateDraft((d) => {
                                    d.basePropertyPricing[key].basePrice = Number(e.target.value);
                                    return d;
                                  });
                                }}
                                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-xs text-slate-900 dark:text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] text-slate-500 uppercase font-semibold">Min (OMR)</label>
                              <input
                                type="number"
                                value={prop.minCharge}
                                onChange={(e) => {
                                  updateDraft((d) => {
                                    d.basePropertyPricing[key].minCharge = Number(e.target.value);
                                    return d;
                                  });
                                }}
                                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-xs text-slate-900 dark:text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] text-slate-500 uppercase font-semibold">Labor (OMR)</label>
                              <input
                                type="number"
                                value={prop.laborRate}
                                onChange={(e) => {
                                  updateDraft((d) => {
                                    d.basePropertyPricing[key].laborRate = Number(e.target.value);
                                    return d;
                                  });
                                }}
                                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-xs text-slate-900 dark:text-white"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 2: Distance & Governorates */}
                {activeTab === 'distance' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Base Transport Fee (OMR)
                        </label>
                        <input
                          type="number"
                          value={pricingStore.draft.distancePricing?.baseTransportationFee || 20}
                          onChange={(e) => {
                            updateDraft((d) => {
                              d.distancePricing.baseTransportationFee = Number(e.target.value);
                              return d;
                            });
                          }}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Price Per Kilometer (OMR/km)
                        </label>
                        <input
                          type="number"
                          step="0.05"
                          value={pricingStore.draft.distancePricing?.pricePerKm || 0.35}
                          onChange={(e) => {
                            updateDraft((d) => {
                              d.distancePricing.pricePerKm = Number(e.target.value);
                              return d;
                            });
                          }}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Muscat Local Flat Rate (OMR)
                        </label>
                        <input
                          type="number"
                          value={pricingStore.draft.distancePricing?.muscatLocalFlatRate || 25}
                          onChange={(e) => {
                            updateDraft((d) => {
                              d.distancePricing.muscatLocalFlatRate = Number(e.target.value);
                              return d;
                            });
                          }}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-3">
                        Regional Governorate Distance Surcharges (from Muscat Hub)
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {Object.entries(pricingStore.draft.distancePricing?.governorateSurcharges || {}).map(([gov, surcharge]: [string, any]) => (
                          <div key={gov} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                            <span className="text-xs text-slate-700 dark:text-slate-300 capitalize">{gov.replace('_', ' ')}</span>
                            <div className="flex items-center gap-1 w-20">
                              <input
                                type="number"
                                value={surcharge}
                                onChange={(e) => {
                                  updateDraft((d) => {
                                    d.distancePricing.governorateSurcharges[gov] = Number(e.target.value);
                                    return d;
                                  });
                                }}
                                className="w-full px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-right"
                              />
                              <span className="text-[10px] text-slate-400">OMR</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Additional Services */}
                {activeTab === 'services' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Set tariffs for packing labor, specialized carpentry dismantling/assembly, cranes, and warehousing.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(pricingStore.draft.additionalServices || {}).map(([key, srv]: [string, any]) => (
                        <div
                          key={key}
                          className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 dark:text-white text-xs">{srv.name}</span>
                            <label className="flex items-center gap-1 cursor-pointer text-xs">
                              <input
                                type="checkbox"
                                checked={srv.active}
                                onChange={(e) => {
                                  updateDraft((d) => {
                                    d.additionalServices[key].active = e.target.checked;
                                    return d;
                                  });
                                }}
                                className="w-3.5 h-3.5 text-orange-600 rounded"
                              />
                              <span className="text-[11px] text-slate-500">Active</span>
                            </label>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{srv.desc}</p>
                          <div className="flex items-center gap-4 pt-2">
                            <div className="flex-1">
                              <label className="block text-[10px] text-slate-500 uppercase">Tariff (OMR)</label>
                              <input
                                type="number"
                                value={srv.price}
                                onChange={(e) => {
                                  updateDraft((d) => {
                                    d.additionalServices[key].price = Number(e.target.value);
                                    return d;
                                  });
                                }}
                                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-xs text-slate-900 dark:text-white"
                              />
                            </div>
                            <div className="flex-1">
                              <label className="block text-[10px] text-slate-500 uppercase">Method</label>
                              <span className="block px-2.5 py-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-600 text-[11px] font-mono text-slate-800 dark:text-slate-200">
                                {srv.pricingMethod}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 4: Taxes & Discounts */}
                {activeTab === 'taxes' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Tax / VAT Percentage (%)
                      </label>
                      <input
                        type="number"
                        value={pricingStore.draft.taxesAndDiscounts?.taxPercentage || 0}
                        onChange={(e) => {
                          updateDraft((d) => {
                            d.taxesAndDiscounts.taxPercentage = Number(e.target.value);
                            return d;
                          });
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Promotional Discount (%)
                      </label>
                      <input
                        type="number"
                        value={pricingStore.draft.taxesAndDiscounts?.promotionalDiscountPct || 15}
                        onChange={(e) => {
                          updateDraft((d) => {
                            d.taxesAndDiscounts.promotionalDiscountPct = Number(e.target.value);
                            return d;
                          });
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Active Promo Code
                      </label>
                      <input
                        type="text"
                        value={pricingStore.draft.taxesAndDiscounts?.promoCode || 'OANWEEKDAY'}
                        onChange={(e) => {
                          updateDraft((d) => {
                            d.taxesAndDiscounts.promoCode = e.target.value;
                            return d;
                          });
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white font-mono"
                      />
                    </div>
                  </div>
                )}

                {/* Tab 5: Currency */}
                {activeTab === 'currency' && (
                  <div className="max-w-md space-y-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Standard official currency for Ali Raza International Trade SPS in Oman is the Omani Rial (OMR).
                    </p>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Currency Code
                      </label>
                      <input
                        type="text"
                        disabled
                        value={pricingStore.draft.currency?.code || 'OMR'}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Decimal Precision
                      </label>
                      <input
                        type="number"
                        value={pricingStore.draft.currency?.decimalPlaces || 3}
                        onChange={(e) => {
                          updateDraft((d) => {
                            d.currency.decimalPlaces = Number(e.target.value);
                            return d;
                          });
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white font-mono"
                      />
                    </div>
                  </div>
                )}

                {/* Tab 6: History */}
                {activeTab === 'history' && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs">Administrative Change Audit Log</h4>
                    <div className="space-y-2">
                      {(pricingStore.history || []).map((h, i) => (
                        <div
                          key={i}
                          className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 text-xs flex justify-between items-center"
                        >
                          <div>
                            <span className="font-bold text-slate-800 dark:text-slate-200">{h.action}</span>
                            <span className="text-slate-400 block text-[11px]">Author: {h.author}</span>
                          </div>
                          <span className="text-slate-400 text-[11px] font-mono">
                            {new Date(h.timestamp).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};
