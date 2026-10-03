const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const api = {
  getHealth: () => apiClient<{ status: string }>('/api/health'),
  getCompanies: () => apiClient<{ success: boolean; data: unknown[] }>('/api/companies'),
  getPolicies: () => apiClient<{ success: boolean; data: unknown[] }>('/api/policies'),
  getMembers: () => apiClient<{ success: boolean; data: unknown[] }>('/api/members'),
  getAudits: () => apiClient<{ success: boolean; data: unknown }>('/api/audits'),
};
