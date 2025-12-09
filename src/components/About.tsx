import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 font-heading mb-4">
            About Our Chamber
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building a stronger business community since 1931
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image1.png"
                alt="Hempstead Chamber of Commerce"
                width={600}
                height={400}
                className="w-full h-auto block"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-primary-900 font-heading mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Hempstead Chamber of Commerce is dedicated to promoting and supporting local businesses in the Incorporated Village of Hempstead. We serve as the voice of our business community, advocating for growth, prosperity, and economic development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to foster a thriving business environment through networking opportunities, resources, and community engagement. We bring together entrepreneurs, established businesses, and community leaders to build a stronger Hempstead.
            </p>
            <Link
              href="/about/mission"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Learn more about our mission
              <ArrowOutwardIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Reversed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-primary-900 font-heading mb-4">
              Our Community
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Chamber invites and encourages the involvement and participation of representatives from every aspect of our business, educational, and civic community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We also encourage residents to join and bring their expertise and abilities to the table to improve the quality of life in the Village. Together, we're building a community where everyone thrives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Get involved today
              <ArrowOutwardIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image2.png"
                alt="Hempstead Community"
                width={600}
                height={400}
                className="w-full h-auto block"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-200 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
