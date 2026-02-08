import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  CreditCard,
  MessageCircle,
  Globe,
  CalendarDays,
  Utensils,
} from "lucide-react";

const TiebreakingNewsEN = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Club News
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Tiebreaking News
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current news and important information from our club
            </p>
          </div>

          {/* Latest News - No. 1/2026 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-tennis-black">
                  Schwarz-Gelb(e) TieBreaking No. 1/2026
                </h2>
                <div className="flex items-center text-tennis-black">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">February 2026</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Dear Members,</strong>
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  We hope the new year has started well for you and that you are
                  managing to stay fit and healthy through the cold season. The
                  new board has already begun its work at the end of last year
                  and prepared a handover of all tasks and topics from Frank
                  Schöneborn, so that we were able to start the new year on a
                  positive note.
                </p>

                {/* Membership Fee */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Membership Fee Collection – February 2026
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    As planned, the due membership fees will be collected by
                    direct debit during February. For cost reasons and for the
                    sake of the environment, we will no longer send invoices in
                    paper form. The new membership fees, which were approved at
                    our general assembly in October 2025, can be found in our{" "}
                    <a
                      href="/der-club/beitragsordnung"
                      className="text-tennis-yellow hover:underline font-semibold"
                    >
                      fee schedule
                    </a>
                    .
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Members for whom we do not have a SEPA direct debit mandate
                    will continue to receive invoices in paper form, which
                    explains the processing fee of €25. If these members wish to
                    switch to direct debit, please send us an email with your
                    bank details to{" "}
                    <a
                      href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                      className="text-tennis-yellow hover:underline font-semibold"
                    >
                      mitgliederservice@schwarzgelb-heidelberg.de
                    </a>
                    . We will make the change the following year, as invoices for
                    2026 have already been created.
                  </p>
                </div>

                {/* WhatsApp News */}
                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-yellow">
                      WhatsApp News from the Board
                    </h3>
                  </div>
                  <p className="leading-relaxed mb-4">
                    We would like to keep you up to date, especially during the
                    summer months when club life becomes more active, and we are
                    offering a WhatsApp group for this purpose.
                  </p>
                  <p className="leading-relaxed">
                    If you want to stay regularly informed and don't want to miss
                    anything, please join the WhatsApp group. Important
                    information will of course continue to be sent via email
                    through our TieBreaking News at regular intervals.
                  </p>
                </div>

                {/* New Website */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Preview: New Website – March 2026
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We have been busy working on a new website so that our club
                    can appear in a "new look." We plan to provide you with an
                    always up-to-date and clear overview of everything members
                    need to find and know. We plan to launch the website from the
                    beginning of March – feel free to check it out and give us
                    your feedback.
                  </p>
                </div>

                {/* Dates 2026 */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Dates 2026
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Here's a first look at the upcoming dates:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        Feb 22 & Mar 1 – Clean-up Days
                      </h5>
                      <p className="text-gray-700 text-sm">
                        As a reminder: The last general assembly decided that all
                        members must contribute work hours or alternatively pay a
                        flat fee. Further projects with work sessions will follow
                        during the season.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        Apr 7 – Apr 10 – Easter Tennis Camp
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Tennis camp for children during Easter holidays.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        Apr 26 – Open Day & Season Opening
                      </h5>
                      <p className="text-gray-700 text-sm">
                        With flower tournament.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        May 30 – Jun 6 – Whitsun Tennis Camp
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Tennis camp in Veli Lošinj (registration deadline: Feb
                        15).
                      </p>
                    </div>
                  </div>
                </div>

                {/* La Trattoria */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Utensils className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Note: The New <em>"La Trattoria"</em>
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In April 2026, the new <em>"La Trattoria"</em> will open its
                    doors at Tennis Club Schwarz-Gelb. Look forward to authentic
                    Italian cuisine, fine wines, and a lovingly redesigned
                    restaurant with a cozy beer garden.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Events and celebrations can also be booked in a special
                    atmosphere in the future. Pasquale Dimauro and his team look
                    forward to welcoming you for enjoyable hours.
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/la-trattoria-coming-soon.png"
                      alt="La Trattoria – Coming Soon April 2026"
                      className="w-full object-contain"
                    />
                  </div>
                </div>

                <div className="text-center bg-tennis-yellow/10 rounded-xl p-6">
                  <p className="text-gray-700 font-medium">
                    Best regards,
                    <br />
                    <strong>Your Board Team</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TiebreakingNewsEN;
