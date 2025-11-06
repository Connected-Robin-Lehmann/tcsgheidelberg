import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, Users, Trophy, Heart, Settings, Newspaper } from 'lucide-react';

const AnsprechpartnerEN = () => {
  const contacts = [
    {
      name: "Aleksandar",
      role: "Sports / Training / Tournaments",
      icon: Trophy,
      description: "Alex is the right contact person for membership inquiries, playing in teams, training, etc. He also organizes overarching organizational matters of the club, such as cooperation with schools and associations as well as equipment suppliers.",
      image: "/placeholder-person.jpg"
    },
    {
      name: "Frank",
      role: "Sponsors, Donations, Finance",
      icon: Users,
      description: "If you have questions about your current membership or the fee schedule, or questions about club administration, Frank is your best contact. This also applies to current and prospective sponsors of our club or members who want to participate in our crowdfunding initiative.",
      image: "/placeholder-person.jpg"
    },
    {
      name: "Karo",
      role: "Youth",
      icon: Heart,
      description: "Anyone with questions about our youth work and who wants to know which teams are suitable for their children, whether beginners or advanced players, should simply contact Karo. The same applies to team registrations or our youth tournaments.",
      image: "/placeholder-person.jpg"
    },
    {
      name: "Janusch",
      role: "Court Maintenance",
      icon: Settings,
      description: "Sharif is the right contact person if problems arise at our tennis facility. This particularly concerns questions about irrigation and cleaning or maintenance of the tennis courts. Sharif also keeps an eye on the facilities in our clubhouse and changing rooms.",
      image: "/placeholder-person.jpg"
    },
    {
      name: "Sonja",
      role: "Press",
      icon: Newspaper,
      description: "Of course, our traditional club has a media presence on all channels. Sonja takes care of press releases. This way, all members, fans and other interested parties always stay up to date on the latest developments in our club.",
      image: "/placeholder-person.jpg"
    }
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
                Your Direct Line
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Contact Persons
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competent support for all your questions about our club
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  In an attractive location yet very central, our well-maintained tennis courts 
                  are located in the heart of Heidelberg and are available exclusively to our members.
                </p>

                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Interested in Tennis?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Anyone who doesn't play tennis yet but is interested in learning can get a 
                    free trial training session. This makes it easier to decide on membership 
                    in TC Schwarz-Gelb-Heidelberg.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All members have the opportunity to participate in team matches. 
                    But beginners need not worry, there's something for every skill level!
                  </p>
                </div>

                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                    For Our Members
                  </h3>
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-tennis-yellow mr-3" />
                    <span className="font-semibold">mitgliederservice@schwarzgelb-heidelberg.de</span>
                  </div>
                  <p className="leading-relaxed">
                    Please contact us exclusively at this email address for questions about 
                    membership changes, fee invoices, and changes to personal data 
                    (such as address, email, bank details, phone number, etc.).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Persons */}
          <div className="grid gap-8">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-tennis-yellow to-tennis-yellow/80 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-tennis-black rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-10 w-10 text-tennis-yellow" />
                      </div>
                      <h3 className="text-2xl font-bold text-tennis-black mb-2">
                        {contact.name}
                      </h3>
                      <p className="text-tennis-black font-semibold text-sm">
                        {contact.role}
                      </p>
                    </div>
                    <div className="md:w-3/4 p-8">
                      <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-tennis-black mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              So, what's stopping you from becoming a member and getting started? Just convince 
              a friend or even your whole family to join - that might make settling in even easier.
            </p>
            <p className="text-gray-700 font-medium">
              Make an appointment with one of the contact persons, just drop by without obligation 
              and have a look around. The contact persons are of course also available during 
              your membership for any questions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnsprechpartnerEN;
