import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SponsorsSection from "@/components/SponsorsSection";
import { Heart, Award, Users, Download } from "lucide-react";

const SponsoringEN = () => {
  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-tennis-yellow" />,
      title: "Attractive Advertising Spaces",
      description:
        "Around the tennis court, on our homepage, or on flyers for various events",
    },
    {
      icon: <Users className="h-8 w-8 text-tennis-yellow" />,
      title: "Wide Reach",
      description:
        "Through our tournaments, you will reach tennis enthusiasts from all over the Heidelberg region",
    },
    {
      icon: <Heart className="h-8 w-8 text-tennis-yellow" />,
      title: "Youth Development",
      description:
        "Directly support talent development and youth work in our club",
    },
  ];

  const projects = [
    "Additional tennis hall",
    "Renovation of the clubhouse electrical system",
    "Wooden shelter with benches and tables behind court 4",
    "Storage house for work equipment and winter storage behind court 3",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Partnerships & Support
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Sponsorship and Donations
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of our tennis family and support Heidelberg’s most
              traditional tennis club
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-8">
                  Sponsorship is a fundamental and essential part of our solid
                  club financing model, alongside membership fees. The long-term
                  relationship we strive for should and must be beneficial for
                  both sides. Our sponsorship concept therefore offers
                  interested companies and tennis enthusiasts the opportunity to
                  use our beautifully located tennis facility as an attractive
                  setting for themselves or their business.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  It is also a wonderful opportunity to promote services or
                  products, make and maintain contacts, or simply present your
                  company positively in Heidelberg. Our advertising spaces offer
                  a wide variety of advertising platforms such as around the
                  tennis court, on our homepage, or on flyers for various
                  events, which are widely noticed and increase your visibility.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-tennis-black mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-4">
                  Big Tournaments – Big Reach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  As TC Schwarz-Gelb Heidelberg hosts some of the largest tennis
                  tournaments in the entire district of the Baden Tennis
                  Association, these advertising spaces offer a sought-after and
                  realistic opportunity to increase the visibility of your
                  business in the city of Heidelberg and the region.
                </p>
              </div>
            </div>
          </div>

          {/* Youth Support Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-6">
                Support Youth Development
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                You can also support us as a sponsor or donor by helping further
                develop the diverse youth and team activities of TC Schwarz-Gelb
                Heidelberg e.V. and secure our youth work financially in the
                long term. As a sponsor or donor, you not only contribute to
                excellent youth development but help young talents directly.
              </p>

              <div className="bg-tennis-black rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold text-tennis-yellow mb-4">
                  Major Projects That Need Your Support:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3"></div>
                      <span>{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-r from-tennis-yellow/20 to-tennis-yellow/10 rounded-2xl p-8 mb-16 text-center">
            <Download className="h-8 w-8 text-tennis-black mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tennis-black mb-4">
              Sponsorship Concept
            </h3>
            <p className="text-gray-700 mb-6">
              We will gladly send you our sponsorship concept upon request. It
              provides a detailed overview of all sponsorship opportunities and
              the associated engagement.
            </p>
            <a
              href="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2021/02/Foerderverein-TC-Schwarz-Gelb-Sponsoring-Optionen-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tennis-black text-tennis-yellow px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Sponsorship Options (PDF)
            </a>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-tennis-black mb-4">
                Interested in a Partnership?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For sponsorship inquiries, donation ideas, or further
                suggestions, our board members are always available.
              </p>
              <a
                href="mailto:vorstand@schwarzgelb-heidelberg.de"
                className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Thank You Section */}
          <div className="bg-tennis-black rounded-2xl p-8 mb-16 text-center">
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Thank You!
            </h3>
            <p className="text-white leading-relaxed">
              On behalf of TC Schwarz-Gelb Heidelberg e.V., we sincerely thank
              our sponsors and supporters below for their continuous support.
              Your commitment enhances and increases the attractiveness of our
              club, our tennis facilities, and the association as a whole.
            </p>
          </div>
        </div>

        {/* Sponsors Section */}
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default SponsoringEN;
