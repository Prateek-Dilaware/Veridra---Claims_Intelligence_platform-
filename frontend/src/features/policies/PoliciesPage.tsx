import React from 'react';
import { FileText, Plus, Database, FileUp, Sparkles } from 'lucide-react';

export const PoliciesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Policies</h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage insurance policies, source documents, and extracted knowledge rules.
          </p>
        </div>
        <button
          disabled
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium opacity-60 cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
          <span>New Policy</span>
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 text-center space-y-4 shadow-sm">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
          <FileText className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto">
          <h3 className="text-base font-semibold text-slate-800">
            Policy Master & Knowledge Architecture Ready
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            The schema supports source document preservation in Supabase Storage and flexible,
            un-rigid policy knowledge extraction (clauses, exclusions, definitions, schedules).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-4 text-left">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-700 font-medium text-xs mb-1">
              <Database className="w-4 h-4 text-blue-500" />
              <span>policies</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Clean routing master with policy numbers, periods, and statuses.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-700 font-medium text-xs mb-1">
              <FileUp className="w-4 h-4 text-emerald-500" />
              <span>policy_documents</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Storage-backed original document tracking with versions and hashes.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-700 font-medium text-xs mb-1">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>policy_knowledge</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Flexible text chunks preserving clauses, definitions, and page origins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
