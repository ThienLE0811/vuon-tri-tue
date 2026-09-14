"use client";

import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/actions/auth";

export function UserMenu({ name }: { name: string }) {
  const initial = name.trim()[0]?.toUpperCase() ?? "?";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2.5 rounded-2xl bg-white border-2 border-slate-200 border-b-4 px-3 py-1.5 shadow-sm outline-none transition-all hover:bg-slate-50 hover:border-slate-300 active:translate-y-0.5 active:border-b-2">
        <div className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-amber-950 text-xs font-black shadow-inner">
          {initial}
        </div>
        <span className="text-sm font-bold text-slate-700">{name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-2xl border-2 border-slate-200 shadow-lg p-1.5">
        <DropdownMenuItem
          variant="destructive"
          className="rounded-xl font-bold cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut className="size-4" />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
