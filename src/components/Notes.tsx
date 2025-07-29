import type { Birthday } from "@/lib/types";
import { ScrollText } from "lucide-react";

export default function Notes({ birthday }: { birthday: Birthday }) {
  return (
    <div>
      <h3 className="font-headline text-lg flex items-center gap-2 mb-2">
        <ScrollText className="w-5 h-5 text-primary/70" />
        Celebratory Notes
      </h3>
      {birthday.notes ? (
        <p className="text-sm text-muted-foreground font-body bg-secondary/50 p-3 rounded-md border border-primary/10">{birthday.notes}</p>
      ) : (
        <p className="text-sm text-muted-foreground font-body italic">No notes added yet.</p>
      )}
    </div>
  );
}
