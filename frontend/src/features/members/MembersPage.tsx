import React from 'react';
import { Users, Plus, Upload, Building } from 'lucide-react';

export const MembersPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Members & Dependents</h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage corporate members, family hierarchies, employee tiers, and policy linkages.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            disabled
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 text-slate-400 text-sm font-medium opacity-60 cursor-not-allowed"
          >
            <Upload className="w-4 h-4" />
            <span>Excel Import (Upcoming)</span>
          </button>
          <button
            disabled
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium opacity-60 cursor-not-allowed"
          >
            <Plus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 text-center space-y-4 shadow-sm">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <Users className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto">
          <h3 className="text-base font-semibold text-slate-800">
            Member & Dependent Model Configured
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            The schema supports unified tracking of employees and dependents (spouse, child, parent),
            benefit tier mapping, and future batch ingestion from corporate Excel rosters.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 max-w-lg mx-auto text-left text-xs space-y-2">
          <div className="flex items-center gap-2 font-medium text-slate-700">
            <Building className="w-4 h-4 text-emerald-600" />
            <span>Supported Model Attributes:</span>
          </div>
          <ul className="list-disc pl-5 text-slate-500 space-y-1">
            <li>Company & Policy associations (foreign keys)</li>
            <li>Employee ID & Unique Member ID pairing</li>
            <li>Relationship hierarchy (employee, spouse, child, etc.)</li>
            <li>Benefit tiers, effective dates, and status tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
