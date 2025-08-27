
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Mannschaften = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-serif">
              Unsere Mannschaften 2024
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Statistics Card */}
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-center md:text-left">
                  <div className="text-6xl font-bold text-primary mb-2">28</div>
                  <div className="text-lg text-muted-foreground">Mannschaften insgesamt</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-6xl font-bold text-accent mb-2">16</div>
                  <div className="text-lg text-muted-foreground">Jugend-Mannschaften</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Auch in 2024 schicken wir als TC Schwarz-Gelb Heidelberg e.V. insgesamt <span className="font-semibold text-primary">28 Mannschaften</span> in die Sommersaison, davon <span className="font-semibold text-accent">16 Jugend-Mannschaften</span>, um sich mit den anderen Teams zu messen. Wir bieten also auch in dieser Hinsicht unseren Mitgliedern attraktiven Mannschaftssport in zahlreichen Leistungs- und Altersklassen.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Somit findet bei uns jeder Tennisspieler schnell seine passende Mannschaft. Die regelmäßig stattfindenden internen Mannschaftstrainings sind für die gute Stimmung und Aufgeschlossenheit gegenüber Neuen überaus bekannt und im Anschluss finden sich unsere SpielerInnen gern auch in entspannter Runde am Clubhaus ein. Dort ist stets für ausreichend Getränke gesorgt, so dass viele Sommerabende auf der gemütlichen Terrasse unseres Restaurants ausklingen.
              </p>

              <div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-foreground mb-4">
                  Die Mitglieder und Ergebnisse unserer Mannschaften finden Sie auf der Seite des Badischen Tennisverbandes:
                </p>
                <a 
                  href="https://baden.liga.nu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Baden Tennis Verband
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Pages Info */}
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Eigene Mannschaftsseiten</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Alle Mannschaften haben ab sofort (Sommer 2024) eine eigene Unterseite, wo sie sich gern vorstellen und laufend News zum Team, den Ergebnissen und natürlich Fotos und Videos für alle Interessierten öffentlich posten können. Der Zugang wird – sofern gewünscht – rechtzeitig für einen zu benennenden Mannschaftsvertreter eingerichtet.
              </p>
            </div>

            {/* Team Categories */}
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Hier finden Sie die Liste unserer Mannschaftsführer/Innen Sommer 2024
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a 
                  href="/jugend" 
                  className="group bg-gradient-to-br from-primary/10 to-primary/20 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Jugend</h4>
                  </div>
                </a>

                <a 
                  href="/damen" 
                  className="group bg-gradient-to-br from-accent/10 to-accent/20 p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">Damen</h4>
                  </div>
                </a>

                <a 
                  href="/herren" 
                  className="group bg-gradient-to-br from-primary/10 to-primary/20 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Herren</h4>
                  </div>
                </a>

                <a 
                  href="/senioren" 
                  className="group bg-gradient-to-br from-accent/10 to-accent/20 p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">Senioren</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mannschaften;
