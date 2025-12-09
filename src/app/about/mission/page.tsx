import Image from "next/image";

export default function MissionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            Our Mission
          </h1>
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

      {/* President's Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* President Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/president.jpg"
                    alt="LaShawn Lukes - President"
                    width={400}
                    height={400}
                    className="w-full h-auto block"
                  />
                  <div className="p-6 text-center bg-primary-600">
                    <h3 className="text-xl font-bold text-white font-heading">LaShawn Lukes</h3>
                    <p className="text-primary-100 font-semibold uppercase tracking-wide text-sm mt-1">President</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary-900 font-heading mb-8">
                A Message from Your President
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="leading-relaxed">
                  "I'm humbled and excited to step in as your next Hempstead Chamber of Commerce President! This isn't just my journey; it's a collective effort with our Executive Board, Directors, and all members. Together, we'll deliver on our promise: to empower your businesses with educational workshops, development services, and invaluable networking opportunities.
                </p>

                <p className="leading-relaxed">
                  Beyond support, we'll be your voice. We'll advocate for the resources our business community needs to thrive, ensuring Hempstead flourishes as a whole.
                </p>

                <p className="leading-relaxed">
                  I bring decades of entrepreneurial experience to the table, having built myself as a "business maven" with a track record of success. As Co-founder and Executive Director of Cultivating Lives Inc., I've spearheaded programs empowering underserved communities and businesses. At Labranded Services Inc., I guide brands, celebrities, and businesses toward peak performance.
                </p>

                <p className="leading-relaxed">
                  Now, my focus is cultivating a stronger, more vibrant Hempstead. The Chamber's objective is clear: to champion the commercial, financial, and industrial needs of our Village. Joining us is an investment in your own success and in the future of Hempstead.
                </p>

                <p className="leading-relaxed">
                  We invite businesses, residents, and our vibrant youth to join forces. Together, let's build a community where everyone thrives.
                </p>

                <p className="leading-relaxed font-semibold text-primary-700">
                  And remember, supporting local businesses strengthens us all. Let's keep Hempstead dollars circulating within our own community!
                </p>

                <div className="pt-8">
                  <p className="text-gray-600">Thank you,</p>
                  <p className="text-xl font-bold text-primary-900 font-heading mt-4">LaShawn Lukes</p>
                  <p className="text-primary-600 font-semibold">President, Hempstead Chamber Of Commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
