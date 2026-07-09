type AmbientBackgroundProps = {
  /** TEMP: iPhone Safari crash test — keeps gradient/grid, drops blur orbs only */
  disableGpuLayers?: boolean;
};

export function AmbientBackground({
  disableGpuLayers = false,
}: AmbientBackgroundProps) {
  return (
    <div className="ambient-bg" aria-hidden>
      {!disableGpuLayers ? (
        <>
          <div className="ambient-orb ambient-orb-blue" />
          <div className="ambient-orb ambient-orb-purple" />
          <div className="ambient-orb ambient-orb-cyan" />
          <div className="ambient-orb ambient-orb-indigo" />
        </>
      ) : null}
      <div className="ambient-grid" />
    </div>
  );
}
