import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const featuredBusinesses = [
  {
    name: "A-CARR AUTO REPAIR & TIRES",
    category: "Automotive",
    image: "/one.png",
  },
  {
    name: "AHRC Nassau",
    category: "Non-Profit",
    image: "/two.png",
  },
  {
    name: "StevenTechs",
    category: "Technology",
    image: "/3.png",
  },
  {
    name: "Beauti Fit You",
    category: "Wellness",
    image: "/4.png",
  },
  {
    name: "BOOM VIP EVENTS",
    category: "Events",
    image: "/5.png",
  },
  {
    name: "Cheapoweb LLC",
    category: "Web Services",
    image: "/6.png",
  },
  {
    name: "GSOH",
    category: "Community",
    image: "/GSOH-LOGO-JPG.jpg",
  },
  {
    name: "Local Business",
    category: "Services",
    image: "/D7CC42D3-CB99-44F6-8DBE-A528DAEF4160.png",
  },
];

export default function FeaturedBusinessesSimple() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary-900 font-heading mb-2">
            Featured Businesses
          </h2>
          <p className="text-gray-600">
            Discover local businesses that make our community thrive
          </p>
        </div>

        {/* Business Grid - 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {featuredBusinesses.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              {/* Business Image */}
              <div className="aspect-square bg-gray-100">
                <Image
                  src={business.image}
                  alt={business.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="inline-block px-2 py-0.5 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full mb-2">
                  {business.category}
                </span>
                <h3 className="font-bold text-primary-900 font-heading group-hover:text-primary-600 transition-colors">
                  {business.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/business-directory"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors"
          >
            View All Businesses
            <ArrowOutwardIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
