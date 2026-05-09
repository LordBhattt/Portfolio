export default function NoiseOverlay() {
  return (
    <svg className='noise-overlay' aria-hidden='true'>
      <defs>
        <filter id='noise'>
          <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch' />
          <feColorMatrix type='saturate' values='0' />
          <feComponentTransfer>
            <feFuncA type='table' tableValues='0 0.15 0.3 0.45 0.6 0.75 0.9 1' />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width='100%' height='100%' filter='url(#noise)' fill='#ffffff' opacity='0.1' />
    </svg>
  );
}
