export default function Stat({ number, label }) {
  return (
    <div>
      <strong className="block text-3xl font-light">
        {number}
      </strong>

      <span className="mt-2 block text-[9px] uppercase tracking-[0.15em] text-white/30">
        {label}
      </span>
    </div>
  );
}