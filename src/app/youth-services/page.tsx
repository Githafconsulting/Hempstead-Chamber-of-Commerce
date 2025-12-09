"use client";

import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function YouthServicesPage() {
  const [photoReleaseForm, setPhotoReleaseForm] = useState({
    firstName: "",
    lastName: "",
    agreedToTerms: false,
    isOver21: false,
    signature: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setPhotoReleaseForm({
      ...photoReleaseForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePhotoReleaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(photoReleaseForm);
    alert("Thank you! Your photo release form has been submitted.");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            Youth Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering the next generation of business leaders in Hempstead
          </p>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-primary-600 mb-12">
            <h2 className="text-3xl font-bold text-primary-900 font-heading mb-4">
              Scholarship
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Hempstead Chamber of Commerce is proud to offer scholarships to deserving young people in our community. Our scholarship program supports students who demonstrate academic excellence, community involvement, and entrepreneurial spirit.
            </p>
            <h3 className="text-xl font-bold text-primary-900 font-heading mb-4">
              Hempstead Chamber of Commerce Scholarship Application
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Submit Application
              <ArrowOutwardIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Photo Release Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 font-heading mb-4">
            Photo Release
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Please sign this release form so we can share your photos. If you are a parent/guardian, please sign this release on behalf of your children.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <form onSubmit={handlePhotoReleaseSubmit} className="space-y-8">
              {/* Name Fields */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={photoReleaseForm.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="First Name"
                    />
                    <span className="text-sm text-gray-500 mt-1">First</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={photoReleaseForm.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Last Name"
                    />
                    <span className="text-sm text-gray-500 mt-1">Last</span>
                  </div>
                </div>
              </div>

              {/* Release Terms */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  I, give Hempstead Chamber of Commerce permission to use my and my children's (if applicable) name, likeness, image, voice, and/or appearance as such may be embodied in any pictures, photos, video recordings, audiotapes, digital images, and the like, taken or made on behalf of Hempstead Chamber of Commerce activities. I agree that Hempstead Chamber of Commerce have complete ownership of such pictures, etc., including the entire copyright, and may use them for any purpose consistent Hempstead Chamber of Commerce mission. These uses include, but are not limited to illustrations, bulletins, exhibitions, videotapes, reprints, reproductions, publications, advertisements, and any promotional or educational materials in any medium now known or later developed, including the Internet. I am not entitled to any compensation for the use of my image.
                </p>
                <p>
                  I release Hempstead Chamber of Commerce from any claims that may arise regarding the use of my image including any claims of defamation, invasion of privacy, or infringement of moral rights, rights of publicity, or copyright. I acknowledge that I have no ownership rights in the final images. I waive any right to inspect or approve the finished photographs or printed or electronic matter that may be used with them now or in the future.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
                <p className="font-semibold">Policy Statement:</p>
                <p>
                  It is the policy of Hempstead Chamber of Commerce that the use of photographs and videotapes of persons served, including on the Internet, with or without his/name attached requires informed voluntary written consent.
                </p>
                <p>
                  Written consent is the completed form "Permission to Use Photograph or Videotape for Public Relations or Fundraising." Due to the nature of client confidentiality, no past or current client will be required or coerced to provide public statements of gratitude to Hempstead Chamber of Commerce. All public statements are strictly voluntary. In all cases, client confidentiality supersedes any public relations or fundraising benefits.
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  I hereby grant this organization permission to use my likeness in a photograph in any and all of its publications, including website entries, without payment or any other consideration. I understand and agree that these materials will become the property of the organization and will not be returned.
                </p>
                <p>
                  I hereby irrevocably authorize this organization to edit, alter, copy, exhibit, publish or distribute this photo for purposes of publicizing this organization's programs or for any other lawful purpose. In addition, I waive the right to inspect or approve the finished product, including written or electronic copy, wherein my likeness appears. Additionally, I waive any right to royalties or other compensation arising or related to the use of the photograph.
                </p>
                <p>
                  I hereby hold harmless and release and forever discharge this organization from all claims, demands, and causes of action which I, my heirs, representatives, executors, administrators, or any other persons acting on my behalf or on behalf of my estate have or may have by reason of this authorization.
                </p>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    required
                    checked={photoReleaseForm.agreedToTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">
                    I have read and understood this consent and release. <span className="text-red-500">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isOver21"
                    required
                    checked={photoReleaseForm.isOver21}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">
                    I am 21 years of age or older (or have consent of parent/guardian) and am competent to contract in my own name. I have read this release before signing below and I fully understand the contents, meaning, and impact of this release. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Signature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="signature" className="block text-sm font-semibold text-gray-700 mb-2">
                    Signature (Type Full Name) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="signature"
                    name="signature"
                    required
                    value={photoReleaseForm.signature}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors italic"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={photoReleaseForm.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors"
              >
                Submit Photo Release
                <ArrowOutwardIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
