import { ReactNode } from "react";

export const SectionTitle = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-display text-3xl md:text-5xl font-bold text-gold leading-tight ${className}`}>
    {children}
  </h2>
);
