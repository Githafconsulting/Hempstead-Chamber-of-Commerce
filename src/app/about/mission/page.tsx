export default function MissionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-200 font-semibold uppercase tracking-wide text-sm">
            Our Purpose
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mt-2 mb-4">
            Our Mission
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Advancing the interests of Hempstead Village and its business community
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Hempstead Chamber of Commerce is organized for the purpose of advancing the commercial, industrial, educational, civic, and general interests of Hempstead Village and its environs. We connect and conduct business with our fellow members.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Any business (personal, corporation, partnership, or association), professional, or individual located or doing a substantial part of its business in Hempstead Village, or any resident of Hempstead Village is invited to become a member of our Chamber.
          </p>
        </div>
      </section>
    </main>
  );
}
