export function MissionVision({ icon, heading, context }) {
  return (
    <div className="lift group p-8 border border-neutral-300 dark:border-neutral-700 flex flex-col items-start space-y-6 bg-[#F15A22]/5 rounded-2xl hover:shadow-lg">
      <div className="p-4 bg-[#F15A22]/10 rounded-2xl transition-transform group-hover:scale-110 group-hover:bg-[#F15A22]/20">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-[#F15A22]">{heading}</h3>
      <p className="text-neutral-500 dark:text-neutral-400 text-lg">{context}</p>
    </div>
  );
}
