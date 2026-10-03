import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { useUIStore } from '@/lib/store';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Policies', to: '/policies', icon: FileText },
  { name: 'Members', to: '/members', icon: Users },
  { name: 'Audits', to: '/audits', icon: ShieldCheck },
];

export const Sidebar: React.FC = () => {
  const { sidebarOpen } = useUIStore();

  return (
    <aside
      className={cn(
        'bg-slate-900 text-slate-100 flex flex-col transition-all duration-200 border-r border-slate-800 shrink-0',
        sidebarOpen ? 'w-64' : 'w-16'
      )}
    >
      <div className="h-16 flex items-center px-4 border-b border-slate-800 gap-3">
        <Building2 className="w-6 h-6 text-blue-400 shrink-0" />
        {sidebarOpen && (
          <div className="font-semibold text-base tracking-tight truncate">
            Claim Audit SaaS
          </div>
        )}
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                )
              }
            >
              <Icon className="w-5 h-5 shrink-0" />
              {sidebarOpen && <span className="truncate">{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
        {sidebarOpen && (
          <div>
            <p className="font-medium text-slate-300">Foundation v1.0</p>
            <p className="text-slate-400 text-[11px]">Insurance Claim Auditing</p>
          </div>
        )}
      </div>
    </aside>
  );
};
