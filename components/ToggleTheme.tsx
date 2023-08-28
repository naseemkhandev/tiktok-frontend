import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-8">
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center gap-1 cursor-pointer"
      >
        {theme === "light" ? (
          <>
            <LuSun className="text-xl" />
            <span className="sm:block hidden">Light Mode</span>
          </>
        ) : (
          <>
            <LuMoon className="text-xl" />
            <span className="sm:block hidden">Dark Mode</span>
          </>
        )}
      </div>
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="sm:block hidden"
      >
        <Switch checked={theme === "dark"} />
      </div>
    </div>
  );
}
