const stats = [
  {
    number: "90+",
    label: "Years Serving Hempstead",
    description: "Established 1931",
  },
  {
    number: "200+",
    label: "Member Businesses",
    description: "And growing",
  },
  {
    number: "50+",
    label: "Events Per Year",
    description: "Networking & workshops",
  },
  {
    number: "1",
    label: "Community",
    description: "United for success",
  },
];

export default function Stats() {
  return (
    <section className="py-10 sm:py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-lg font-semibold text-white mb-0.5 sm:mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-white/70 hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
