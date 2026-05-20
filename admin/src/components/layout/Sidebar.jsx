import { NavLink } from "react-router-dom";
import { navItems } from "../../config/navigation";
import { IconLogout } from "../icons";

export function Sidebar({ onClose }) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-slate-900 text-slate-300">
      <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
          V
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">
          VNDN Admin
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-800 p-3">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <IconLogout />
          Logout
        </button>

        <div className="mt-3 flex items-center gap-3 rounded-lg px-3 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold text-white">
            VA
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">VNDN Admin</p>
            <p className="truncate text-xs text-slate-500">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
