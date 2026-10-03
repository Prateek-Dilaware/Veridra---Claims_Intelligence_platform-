import React from 'react';
import { ShieldCheck, Sparkles, Clock, AlertTriangle } from 'lucide-react';

export const AuditsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Claim Audits</h2>
          <p className="text-sm text-slate-500 mt-1">
            Automated claim validation, policy compliance checking, and fraud detection.
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
          Planned for Next Phase
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 text-center space-y-4 shadow-sm">
        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto">
          <h3 className="text-base font-semibold text-slate-800">
            Audit Module Architecture Ready
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            The Claims and Audits engine will integrate with the backend AI agent service to verify
            claims against extracted policy knowledge rules and member coverage tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-4 text-left">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-700 font-medium text-xs mb-1">
              <Clock className="w-4 h-4 text-purple-500" />
              <span>Phase 1 (Current)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Database schema, storage, Express REST API, and application shell.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-700 font-medium text-xs mb-1">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Phase 2 (Upcoming)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Policy extraction agent and Excel member roster ingestion.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 text-slate-700 font-medium text-xs mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Phase 3 (Upcoming)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Multi-agent claim auditing engine with fraud & compliance rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
