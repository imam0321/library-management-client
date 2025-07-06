import { cn } from "@/lib/utils";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-60 w-full">
      <div className="flex flex-col items-center gap-2">
        <div className={cn(
          "w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin"
        )} />
        <p className="text-sm text-muted-foreground">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loader;
