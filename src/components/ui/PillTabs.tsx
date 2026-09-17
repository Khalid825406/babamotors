"use client";

interface PillTabsProps {
  options: string[];
  active: string;
  onChange: (option: string) => void;
  dark?: boolean;
}

export default function PillTabs({ options, active, onChange, dark = true }: PillTabsProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-6 flex-wrap">
      {options.map((opt) => {
        const isActive = opt === active;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={
              isActive
                ? "pill-tab bg-gold text-white"
                : `pill-tab bg-transparent ${
                    dark ? "text-white/50 hover:text-white" : "text-text-secondary hover:text-black"
                  }`
            }
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
