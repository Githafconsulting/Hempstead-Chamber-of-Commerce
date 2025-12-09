import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function AboutUs() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left column: Image */}
      <div className="w-full">
        <Image
          src="/image1.png"
          alt="Hempstead Chamber of Commerce"
          width={960}
          height={600}
          className="w-full h-auto block"
        />
      </div>

      {/* Right column: Text */}
      <div className="w-full bg-primary-600 px-5 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-0 flex items-center justify-center lg:justify-start">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading mb-4 sm:mb-6">
            About Us
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-3 sm:mb-4">
            The Hempstead Chamber of Commerce is dedicated to promoting and supporting local businesses in the Incorporated Village of Hempstead. We serve as the voice of our business community, advocating for growth, prosperity, and economic development.
          </p>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6 sm:mb-8">
            Our mission is to foster a thriving business environment through networking opportunities, resources, and community engagement. We bring together entrepreneurs, established businesses, and community leaders to build a stronger Hempstead.
          </p>
          <a
            href="/about"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Learn More
            <ArrowOutwardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
