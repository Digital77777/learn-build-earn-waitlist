import { useEffect, useMemo, useState } from "react";

function getTimeRemaining(target: Date) {
  const total = +target - +new Date();
  const clamped = Math.max(total, 0);
  const seconds = Math.floor((clamped / 1000) % 60);
  const minutes = Math.floor((clamped / 1000 / 60) % 60);
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  return { total: clamped, days, hours, minutes, seconds };
}

const Countdown = ({ date }: { date: string }) => {
  const target = useMemo(() => new Date(date), [date]);
  const [t, setT] = useState(() => getTimeRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setT(getTimeRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      {[{ label: "Days", value: t.days }, { label: "Hours", value: t.hours }, { label: "Minutes", value: t.minutes }, { label: "Seconds", value: t.seconds }].map(
        (p) => (
          <div key={p.label} className="rounded-lg border bg-card p-3">
            <div className="text-2xl font-bold tabular-nums">{p.value.toString().padStart(2, "0")}</div>
            <div className="text-xs text-muted-foreground">{p.label}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Countdown;
