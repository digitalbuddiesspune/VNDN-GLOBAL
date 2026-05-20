import { IconBell, IconMenu, IconSearch } from "../icons";

export function TopNavbar({ title, onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-slate-200 bg-white px-4 lg:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
        aria-label="Open menu"
      >
        <IconMenu />
      </button>

      <h1 className="text-lg font-semibold text-slate-900">{title}</h1>

      <div className="ml-auto flex items-center gap-3">
        <div className="relative hidden sm:block">
          <IconSearch className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search..."
            className="w-56 rounded-lg border border-slate-200 bg-slate-50 py-2 pr-3 pl-9 text-sm text-slate-700 outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 lg:w-72"
          />
        </div>

        <button
          type="button"
          className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <IconBell />
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-2 py-1.5 sm:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white">
            VA
          </div>
          <span className="text-sm font-medium text-slate-700">Admin</span>
        </div>
      </div>
    </header>
  );
}
