const CAT_COLORS = {
  ganesh: '#BE5A3B', krishna: '#2C3E8C', decorative: '#C9971F',
  jewelry: '#E39CB4', others: '#0F8A6C',
};

export default function CategoryTag({ cat, label, className = '' }) {
  const color = CAT_COLORS[cat] || '#9C8F7C';
  return (
    <span
      className={`cat-tag font-mono text-[11px] font-bold uppercase tracking-wide inline-flex items-center gap-1.5 ${className}`}
      style={{ '--cat': color, color }}
    >
      {label}
    </span>
  );
}
