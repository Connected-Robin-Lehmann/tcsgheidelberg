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
  TreePine,
  Trophy,
  Shirt,
  Eye,
  Sun,
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

          {/* Latest News - No. 2/2026 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-tennis-black">
                  Schwarz-Gelb(e) TieBreaking No. 2/2026
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

                {/* Putzete postponed */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Clean-Up Day Postponed to March 8 💪
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We will need to postpone the clean-up day from this Sunday due to tree pruning work to <strong>March 8 (again at 10:00 AM)</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Please register at{" "}
                    <a
                      href="mailto:tennis@schwarzgelb-heidelberg.de"
                      className="text-tennis-yellow hover:underline font-semibold"
                    >
                      tennis@schwarzgelb-heidelberg.de
                    </a>{" "}
                    so we can plan with the number of members. There are plenty of tasks ahead, so we look forward to strong participation.
                  </p>
                </div>

                {/* Firewood */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Sun className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Firewood Available for Pick-Up 🙂
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Firewood is still available for pick-up – first come, first served!
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-lg max-w-md">
                    <img
                      src="/images/aktuelles/brennholz-abholung.png"
                      alt="Firewood available for pick-up at the club"
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                {/* Tennis shoes */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <Shirt className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Tennis Shoes from the Men's Locker Room
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    There were many (mostly very old) tennis shoes in the men's locker room, which the team moved to the garage last week. Please pick them up before the start of the summer season if you still need them.
                  </p>
                </div>

                {/* Tennis assessment */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Tennis Assessment on March 15 🎾
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    On <strong>March 15 at 12:00 PM</strong>, a tennis assessment will take place for members who would like to start training in the summer season (children and adults).
                  </p>
                </div>

                {/* Easter camp */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Easter Tennis Camp for Kids
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The Easter tennis camp for children will take place from <strong>April 7 – 10</strong>, daily from <strong>9:30 AM – 3:30 PM</strong>.
                  </p>
                </div>

                {/* Achievements */}
                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-yellow">
                      Our Achievements 🏆
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="rounded-xl overflow-hidden shadow-lg w-48 flex-shrink-0">
                        <img
                          src="/images/aktuelles/olivia-georg-stuttgart.png"
                          alt="Olivia Georg – 3rd place Stuttgart U12"
                          className="w-full object-cover"
                        />
                      </div>
                      <p className="leading-relaxed">
                        <strong className="text-tennis-yellow">Olivia Georg</strong> started the year strong: in February she beat the number one in Germany and took 3rd place twice at the best national tournaments!
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="rounded-xl overflow-hidden shadow-lg w-48 flex-shrink-0">
                        <img
                          src="/images/aktuelles/emmy-zhu-badische-meisterin.png"
                          alt="Emmy Zhu – Baden Champion"
                          className="w-full object-cover"
                        />
                      </div>
                      <p className="leading-relaxed">
                        Congratulations also to <strong className="text-tennis-yellow">Emmy Zhu</strong>! She became Baden champion again in January 👏🏻!
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp reminder */}
                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-yellow">
                      Join our WhatsApp Group 🙂
                    </h3>
                  </div>
                  <p className="leading-relaxed mb-4">
                    A reminder about our new WhatsApp group, which we want to use more actively for communication with all members.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/GPjdj6ZfcAzGRLeijq7OK1?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-tennis-yellow text-tennis-black font-bold px-6 py-3 rounded-xl hover:bg-tennis-yellow/90 transition-colors"
                  >
                    Join WhatsApp Group
                  </a>
                </div>

                <div className="text-center bg-tennis-yellow/10 rounded-xl p-6">
                  <p className="text-gray-700 font-medium">
                    Sunny regards, ☀️
                    <br />
                    <strong>Your Board</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Archive - No. 1/2026 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-gray-200">
            <div className="bg-gray-200 p-6 cursor-pointer" onClick={() => {
              const el = document.getElementById('archive-1-2026');
              if (el) el.classList.toggle('hidden');
            }}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-tennis-black">
                  Archive: Schwarz-Gelb(e) TieBreaking No. 1/2026
                </h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">January 2026</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Click to expand/collapse</p>
            </div>

            <div id="archive-1-2026" className="hidden p-8 md:p-12">
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

                {/* Dates */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Dates 2026
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        Apr 7 – Apr 10 – Easter Tennis Camp
                      </h5>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        Apr 26 – Open Day & Season Opening
                      </h5>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        May 30 – Jun 6 – Whitsun Tennis Camp
                      </h5>
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
