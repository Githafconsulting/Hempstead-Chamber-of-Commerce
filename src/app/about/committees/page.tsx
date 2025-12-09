export default function CommitteesPage() {
  const committees = [
    {
      name: "Executive Committee",
      description:
        "The Executive Committee shall consist of the President as Chairperson, Vice President, Secretary, Assistant Secretary, Treasurer, Assistant Treasurer, and Executive Director. The Executive Committee shall act for the Board of Directors between regular meetings of the Board or in the absence of a quorum thereof. A quorum of any three of the following: President, Vice President, Secretary, Assistant Secretary, Treasurer or Assistant Treasurer shall be required in addition to the Executive Director, if any, before such officers go into Executive session.",
      responsibilities: [],
    },
    {
      name: "Budget & Finance Committee",
      description:
        "This committee shall be composed of three members of the Board of Directors, of which one shall be the Treasurer, who shall serve as Chairperson.",
      responsibilities: [
        "Receive and consider, at the beginning of the fiscal year, estimates of expenditures and income for the ensuing year, as prepared and filed with it by the officers and committees of the Chamber",
        "Submit to the Board of Directors their recommendations for a budget, and these may be approved, amended, or rejected by the Board",
        "Cause the books and accounts of the Chamber to be made available for the annual audit as required by Article VII Section 7",
      ],
    },
    {
      name: "Membership Committee",
      description:
        "This committee shall consist of a Chair appointed by the President and approved by the Board, and members of the organization to:",
      responsibilities: [
        "Record accurate membership contact information",
        "Develop and revise the annual membership recruitment and retention plan",
        "Respond to members' needs",
        "Implement protocols to engage members in chamber committees, programs, and activities",
      ],
    },
    {
      name: "Visibility Committee",
      description:
        "This committee shall consist of a Chair appointed by the President and approved by the Board, with members of the organization to assist the Chamber board in their responsibility to maintain a positive image of the organization in the community by:",
      responsibilities: [
        "Planning a public relations program",
        "Monitoring public relations and planning publicity activities",
        "Planning all publicity and promotions",
        "Developing marketing efforts that support the organization's services and programs",
      ],
    },
    {
      name: "Legislative, Advocacy & Business Development Committee",
      description:
        "This committee shall consist of a Chair appointed by the President and approved by the Board, with members of the organization to support growth, economic development, and infrastructure investments in Hempstead. This committee shall:",
      responsibilities: [
        "Research measures to improve the local economy",
        "Gather information regarding available commercial property in the Village of Hempstead",
        "Meet with key stakeholders to strengthen our business community",
      ],
    },
    {
      name: "Fundraising/Program Committee",
      description:
        "This committee shall consist of a Chair appointed by the President and approved by the Board, with members of the organization to lead the board in efforts that attract money and in-kind services needed to carry out the mission of the organization.",
      responsibilities: [
        "Monitor fundraising efforts to ensure ethical practices are in place",
        "Ensure donors are acknowledged appropriately",
        "Ensure fundraising efforts are cost-effective",
        "Define the short-term and long-term funding needs of the Chamber",
        "Plan funding activities for the board",
        "Educate the board on the techniques of fundraising",
      ],
    },
    {
      name: "Youth Entrepreneurship Committee",
      description:
        "This committee shall consist of a Chair appointed by the President and approved by the Board, with members of the organization to lead the board in efforts that create career ready, next-generation business builders. The Youth Entrepreneurship Committee shall positively impact the lives of young people by providing students with:",
      responsibilities: [
        "Sound financial literacy skills that encourage financial dignity and inclusion",
        "Support and business role models for success",
        "Techniques to present themselves professionally to gain business confidence and skills",
        "Networking opportunities with like-minded youth, entrepreneurs, policymakers, public officials, and possible mentors",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            Membership Committees
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our committees work together to advance the mission of the Hempstead Chamber of Commerce
          </p>
        </div>
      </section>

      {/* Committees List */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border-l-4 border-primary-600"
              >
                <h2 className="text-2xl font-bold text-primary-900 font-heading mb-4">
                  {committee.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {committee.description}
                </p>
                {committee.responsibilities.length > 0 && (
                  <ul className="space-y-2">
                    {committee.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-heading mb-4">
            Interested in Joining a Committee?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get involved and help shape the future of business in Hempstead
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
