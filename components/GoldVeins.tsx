export default function GoldVeins() {
  const veios = [
    { d: "M -50 120 C 150 80, 300 220, 550 140 S 900 60, 1150 180", delay: "0s", width: 1.4 },
    { d: "M -80 380 C 200 340, 380 480, 620 400 S 980 320, 1200 420", delay: "1.2s", width: 1 },
    { d: "M -60 640 C 220 600, 420 700, 680 630 S 1020 560, 1180 660", delay: "2.4s", width: 1.2 },
    { d: "M -40 40 C 260 10, 340 140, 640 60", delay: "0.6s", width: 0.8 },
    { d: "M -70 820 C 240 780, 460 900, 760 830 S 1040 760, 1160 840", delay: "3s", width: 1 },
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1100 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="veio-ouro" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9a355" stopOpacity="0" />
          <stop offset="50%" stopColor="#e8c873" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c9a355" stopOpacity="0" />
        </linearGradient>
      </defs>
      {veios.map((v, i) => (
        <path
          key={i}
          d={v.d}
          fill="none"
          stroke="url(#veio-ouro)"
          strokeWidth={v.width}
          className="animate-shimmer"
          style={{ animationDelay: v.delay }}
        />
      ))}
    </svg>
  );
}
