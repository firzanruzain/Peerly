import { Input } from "@/components/ui/input";
import { Funnel } from "lucide-react";

type SearchBarProps = {
  placeholder: string;
  right?: React.ReactNode;
};

export function SearchBar({ placeholder, right }: SearchBarProps) {
  return (
    <div className="relative w-full max-h-10 items-center">
      <Input
        type="text"
        placeholder={"Search for topics, questions, or subjects..."}
        className="w-full pr-24 max-h-10 bg-white dark:bg-black rounded-full"
      />
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 max-h-8 bg-red">
        <button
          type="button"
          className="border-2 border-primary rounded-full px-2 flex items-center gap-1 text-primary"
        >
          <Funnel className="text-primary" fill="currentColor" size={16} />
          Filter
        </button>
      </div>
    </div>
  );
}
