import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Olá",
  "Namaste",
  "こんにちは",
  "你好",
  "안녕",
  "سلام",
];

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.body.style.overflow = "hidden";

    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i >= greetings.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 280);
      } else {
        setIndex(i);
      }
    }, 180);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`fixed inset-0 z-[100] bg-foreground text-background flex items-center justify-center transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        done ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <div className="flex items-baseline gap-4">
        <span className="h-2 w-2 rounded-full bg-background inline-block" aria-hidden="true" />
        <span
          key={index}
          className="text-5xl md:text-7xl font-medium tracking-tight animate-in fade-in duration-150"
        >
          {greetings[index]}
        </span>
      </div>
    </div>
  );
}
