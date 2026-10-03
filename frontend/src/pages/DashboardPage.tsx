import React from 'react';
import { Shield, FileText, Users, Layers, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">System Dashboard</h2>
        <p className="text-sm text-slate-500 mt-1">
          Insurance Claims & Benefits Auditing Platform — Foundation Shell
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/policies"
          className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-500 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              Module
            </span>
          </div>
          <h3 className="text-base font-semibold text-slate-800 mt-4">Policies Master</h3>
          <p className="text-xs text-slate-500 mt-1">
            Policy metadata, document management, and structured policy knowledge chunks.
          </p>
        </Link>

        <Link
          to="/members"
          className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              Module
            </span>
          </div>
          <h3 className="text-base font-semibold text-slate-800 mt-4">Members & Dependents</h3>
          <p className="text-xs text-slate-500 mt-1">
            Company employees, family relationships, tiers, and policy association.
          </p>
        </Link>

        <Link
          to="/audits"
          className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-purple-500 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
              Upcoming
            </span>
          </div>
          <h3 className="text-base font-semibold text-slate-800 mt-4">Claims Auditing</h3>
          <p className="text-xs text-slate-500 mt-1">
            Automated claim audits against extracted policy rules and member tiers.
          </p>
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-5 h-5 text-blue-600" />
          <h3 className="text-base font-semibold text-slate-900">Architecture Foundation Status</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="flex items-center gap-2 text-emerald-600 font-medium text-xs mb-1">
              <CheckCircle className="w-4 h-4" /> Database Schema
            </div>
            <p className="text-xs text-slate-600">5 tables configured with UUIDs, RLS, and indexes</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="flex items-center gap-2 text-emerald-600 font-medium text-xs mb-1">
              <CheckCircle className="w-4 h-4" /> Supabase Storage
            </div>
            <p className="text-xs text-slate-600">policy-documents bucket provisioned</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="flex items-center gap-2 text-emerald-600 font-medium text-xs mb-1">
              <CheckCircle className="w-4 h-4" /> Express REST API
            </div>
            <p className="text-xs text-slate-600">Clean layered architecture with validation</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="flex items-center gap-2 text-emerald-600 font-medium text-xs mb-1">
              <CheckCircle className="w-4 h-4" /> Swappable AI Interface
            </div>
            <p className="text-xs text-slate-600">Agent abstraction ready for LLM integration</p>
          </div>
        </div>
      </div>
    </div>
  );
};
