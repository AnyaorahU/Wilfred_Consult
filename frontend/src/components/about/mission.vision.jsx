export function MissionVision({ icon, heading, context }) {
  return (
    <div className="p-8 border border-neutral-300 flex flex-col items-start space-y-6 bg-[#e9a227]/5 rounded-2xl hover:shadow-lg">
      <div className="p-4 bg-[#e9a227]/10 rounded-2xl">{icon}</div>
      <h3 className="text-3xl font-bold text-[#e9a227]">{heading}</h3>
      <p className="text-neutral-500 text-lg">{context}</p>
    </div>
  );
}
