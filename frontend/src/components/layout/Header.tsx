import React from 'react';
import { Menu, Server, Database, CheckCircle2, AlertCircle } from 'lucide-react';
import { useUIStore } from '@/lib/store';
import { useHealth } from '@/hooks/useHealth';

export const Header: React.FC = () => {
  const { toggleSidebar } = useUIStore();
  const { data: health, isLoading, isError } = useHealth();

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle navigation sidebar"
          className="p-2 rounded-md hover:bg-slate-100 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-slate-800">
          Insurance Claims & Benefits Auditing
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Backend Health Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-slate-50">
          <Server className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-600">Backend API:</span>
          {isLoading ? (
            <span className="text-amber-600">Connecting...</span>
          ) : isError || health?.status !== 'ok' ? (
            <span className="inline-flex items-center gap-1 text-red-600">
              <AlertCircle className="w-3.5 h-3.5" /> Offline
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-emerald-600">
              <CheckCircle2 className="w-3.5 h-3.5" /> Healthy
            </span>
          )}
        </div>

        {/* Supabase Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-200 bg-emerald-50 text-emerald-700">
          <Database className="w-3.5 h-3.5" />
          <span>Supabase Ready</span>
        </div>
      </div>
    </header>
  );
};
