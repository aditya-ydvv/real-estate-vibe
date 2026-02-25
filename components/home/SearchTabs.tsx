"use client";

import { useId, useMemo, useState, type KeyboardEvent } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MODES = ["buy", "rent", "sell"] as const;
type SearchMode = (typeof MODES)[number];

export function SearchTabs() {
  const [mode, setMode] = useState<SearchMode>("buy");
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputId = useId();
  const tabsId = useMemo(() => MODES.map((item) => `search-tab-${item}`), []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?mode=${mode}&q=${encodeURIComponent(query.trim())}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = MODES.indexOf(mode);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setMode(MODES[(currentIndex + 1) % MODES.length]);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setMode(MODES[(currentIndex - 1 + MODES.length) % MODES.length]);
    }
  };

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-white/40 bg-white/92 p-2 shadow-2xl shadow-black/20 backdrop-blur-md">
      <div role="tablist" aria-label="Search mode" className="mb-2 flex items-center gap-1.5" onKeyDown={handleKeyDown}>
        {MODES.map((item, idx) => (
          <button
            key={item}
            id={tabsId[idx]}
            role="tab"
            type="button"
            tabIndex={mode === item ? 0 : -1}
            aria-selected={mode === item}
            aria-controls={`search-panel-${item}`}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              mode === item ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100",
            )}
            onClick={() => setMode(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <form id={`search-panel-${mode}`} role="tabpanel" aria-labelledby={`search-tab-${mode}`} onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          Search for city, locality, society, landmark, pincode, agent, or listing ID
        </label>
        <input
          id={inputId}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="City, locality, society, landmark, pincode, agent, listing ID"
          className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
        />
        <Button type="submit" className="h-11 rounded-lg px-5">
          <Search className="mr-2 size-4" />
          Search
        </Button>
      </form>
    </div>
  );
}
