import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function OurCommunity() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left column: Text - order changes on mobile */}
      <div className="w-full bg-primary-600 px-5 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-0 flex items-center justify-center lg:justify-start order-2 lg:order-1">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading mb-4 sm:mb-6">
            Our Community
          </h2>
          <p className="text-base sm:text-lg text-gray-100 leading-relaxed mb-6 sm:mb-8">
            The Chamber invites and encourages the involvement and participation of representatives from every aspect our business, educational, and civic community. We also encourage residents to join and bring their expertise and abilities to the table to improve the quality of life in the Village.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Contact Us
            <ArrowOutwardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      {/* Right column: Image */}
      <div className="w-full order-1 lg:order-2">
        <Image
          src="/image2.png"
          alt="Hempstead Community"
          width={960}
          height={600}
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
