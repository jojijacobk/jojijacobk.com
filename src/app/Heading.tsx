// src/app/components/Heading.tsx
export default function Heading({children}: {children: React.ReactNode}) {
  return (
    <h2
      className="
        inline-block
        text-[0.9rem] font-semibold uppercase tracking-[0.22em]
        text-accent
        transform-gpu transition-transform duration-200 ease-out
        origin-left hover:scale-110 hover:translate-x-1
        cursor-default
      "
    >
      {children}
    </h2>
  );
}
