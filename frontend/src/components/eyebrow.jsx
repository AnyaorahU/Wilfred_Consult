// Small soft-orange "eyebrow" pill used above section headings for a
// consistent, pleasant look across the site.
export function Eyebrow({ icon, children, className = "" }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-[#F15A22]/10 text-[#F15A22] text-sm font-semibold ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}

export default Eyebrow;
