import { PRICING_CONFIG } from '../data/pricingConfig';

export interface AdminLoginResponse {
  success: boolean;
  token?: string;
  error?: string;
}

export interface PricingStoreState {
  published: any;
  draft: any;
  history?: Array<{ timestamp: string; author: string; action: string }>;
}

const ADMIN_TOKEN_KEY = 'oan_admin_auth_token';

export const pricingService = {
  // Get active pricing (used by calculator)
  async getActivePricing(): Promise<any> {
    try {
      const res = await fetch('/api/pricing');
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // fallback
    }
    // Return baseline if API is unavailable
    return PRICING_CONFIG;
  },

  // Admin authentication
  async login(password: string): Promise<AdminLoginResponse> {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem(ADMIN_TOKEN_KEY, data.token);
        return { success: true, token: data.token };
      }
      return { success: false, error: data.error || 'Authentication failed' };
    } catch (err: any) {
      return { success: false, error: err.message || 'Network error' };
    }
  },

  getToken(): string | null {
    return localStorage.getItem(ADMIN_TOKEN_KEY);
  },

  logout(): void {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    fetch('/api/admin/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.getToken()}` },
    }).catch(() => {});
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },

  // Admin: Get draft + published
  async getAdminPricingStore(): Promise<PricingStoreState | null> {
    const token = this.getToken();
    if (!token) return null;
    try {
      const res = await fetch('/api/admin/pricing', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // ignore
    }
    return null;
  },

  // Admin: Save draft
  async saveDraft(draft: any): Promise<boolean> {
    const token = this.getToken();
    if (!token) return false;
    try {
      const res = await fetch('/api/admin/pricing/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ draft }),
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  // Admin: Publish
  async publishDraft(): Promise<boolean> {
    const token = this.getToken();
    if (!token) return false;
    try {
      const res = await fetch('/api/admin/pricing/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  // Admin: Reset to published
  async resetDraft(): Promise<boolean> {
    const token = this.getToken();
    if (!token) return false;
    try {
      const res = await fetch('/api/admin/pricing/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return res.ok;
    } catch {
      return false;
    }
  },
};
