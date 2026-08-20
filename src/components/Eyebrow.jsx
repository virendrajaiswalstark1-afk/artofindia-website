const COLORS = {
  gold: '#C9971F', orange: '#E8672B', terracotta: '#BE5A3B',
  royal: '#2C3E8C', emerald: '#0F8A6C', pink: '#E39CB4', maroon: '#7E2A3B',
};
const TEXT = {
  gold: 'text-gold-deep', orange: 'text-orange-deep', terracotta: 'text-terracotta',
  royal: 'text-royal', emerald: 'text-emerald', pink: 'text-[#B8617F]', maroon: 'text-maroon',
};

export default function Eyebrow({ color = 'orange', className = '', dotColor, children }) {
  const dot = dotColor || COLORS[color] || COLORS.orange;
  const textClass = TEXT[color] || TEXT.orange;
  return (
    <span className={`eyebrow ${textClass} ${className}`} style={{ '--dot': dot }}>
      {children}
    </span>
  );
}
