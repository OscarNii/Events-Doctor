/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowRight, Facebook, Instagram, MessageCircle, QrCode, Twitter, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  const bgImages = [
    "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop"
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1550614000-4b95d415dc96?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2070&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Header */}
      <div className="w-full bg-slate-900 shadow-md">
        <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            RENEWABLE<span className="font-normal">ELEGANCE</span>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-sm text-slate-300">
            <a href="#home" className="text-white border-b-2 border-white pb-1">Home</a>
            <a href="#programm" className="hover:text-white transition-colors">Programm</a>
            <a href="#galerie" className="hover:text-white transition-colors">Galerie</a>
            <a href="#tickets" className="hover:text-white transition-colors">Tickets</a>
            <a href="#partner" className="hover:text-white transition-colors">Partner</a>
          </nav>
          <a href="#tickets" className="bg-white hover:bg-slate-200 text-slate-900 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg inline-block hover:-translate-y-1">
            Tickets Kaufen
          </a>
        </header>
      </div>

      <main>
        {/* Hero Section */}
        <div className="relative w-full">
          {/* Background Carousel */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {bgImages.map((src, index) => (
              <img 
                key={src}
                src={src}
                alt="Background"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            {/* Frosted glass overlay to maintain neumorphic readability */}
            <div className="absolute inset-0 bg-[#1e293b]/70 backdrop-blur-sm"></div>
            {/* Gradient fade at the bottom to blend into the next section */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1e293b] to-transparent"></div>
          </div>

          <section id="home" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
            <div className="inline-block bg-blue-900/50 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
              2. - 3. MAI 2026 • SCHWARZKANE, HERTEN
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight text-white">
              Renewable<br />
              <span className="text-blue-400 italic">Elegance</span>
            </h1>
            <h2 className="text-2xl font-bold tracking-widest text-slate-300 uppercase">Arts in Motion</h2>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Ein Upcycling-Festival für Kunst und Mode das Textilabfälle in tragbare Kunst verwandelt. Erleben Sie die Schnittstelle von High-Fashion und nachhaltiger Innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#tickets" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-blue-900/20 inline-block hover:-translate-y-1 hover:shadow-blue-900/40">
                Tickets Sichern
              </a>
              <a href="#programm" className="neu-button px-8 py-4 rounded-full font-bold text-blue-400 inline-block">
                Zum Programm
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            {/* Poster Representation */}
            <div className="w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative bg-slate-800">
              {heroImages.map((src, index) => (
                <motion.img 
                  key={src}
                  src={src} 
                  style={{ y }}
                  alt={`Fashion Poster ${index + 1}`} 
                  className={`absolute -top-[15%] left-0 w-full h-[130%] object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-90' : 'opacity-0'}`} 
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col z-10">
                <div className="text-blue-300 font-black text-3xl leading-none mb-2">
                  RENEWABLE<br/><span className="italic">Elegance</span>
                </div>
                <div className="text-xs font-bold tracking-widest text-slate-200 mb-8">ARTS IN MOTION</div>
                
                <div className="mt-auto space-y-4">
                  <div className="bg-slate-800/90 backdrop-blur-sm p-4 rounded-xl w-fit shadow-lg">
                    <div className="font-black text-blue-300 mb-1">TICKETS</div>
                    <div className="text-sm font-bold text-slate-300">VVK: 20.00 €</div>
                    <div className="text-sm font-bold text-slate-300">AK: 25.00 €</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-800/80 w-fit px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    SCHWARZKANE
                  </div>
                </div>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-8 right-8 flex gap-2 z-20">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'w-6 bg-blue-400' : 'w-2 bg-blue-400/30 hover:bg-blue-400/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Highlights Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-black mb-4 tracking-tight">UNSERE HIGHLIGHTS</h2>
          <p className="text-slate-400 max-w-2xl mb-12 text-lg">
            Vom Laufsteg bis zur Galerie: Erleben Sie, wie weggeworfene Materialien zu höchster Eleganz werden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'MODENSCHAU', 
                desc: 'Erkunden Sie die Spitze der Kreislaufmode mit unserer abendlichen Runway-Serie.',
                image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800&auto=format&fit=crop'
              },
              { 
                title: 'KUNSTAUSSTELLUNG', 
                desc: 'Eine kuratierte Sammlung taktiler Skulpturen und digitaler Medieninstallationen.',
                image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop'
              },
              { 
                title: 'LIVE-AUFTRITTE', 
                desc: 'Klangliche Erkundungen mit Künstlern, die experimentelle und recycelte Instrumente nutzen.',
                image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop'
              }
            ].map((item, i) => (
              <div key={i} className="neu-flat rounded-[2rem] p-6 flex flex-col">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 neu-pressed p-2">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 mb-8 flex-grow">{item.desc}</p>
                  <ArrowRight className="text-blue-400" size={24} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Section */}
        <section id="programm" className="w-full max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight">PROGRAMMÜBERSICHT</h2>
            <p className="text-blue-400 font-bold text-lg">2. - 3. Mai 2026 • Schwarzkane, Herten</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Day 1 */}
            <div className="neu-flat rounded-[3rem] p-8 lg:p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-4xl font-black mb-1">2. MAI</h3>
                  <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Samstag, 2026</p>
                </div>
                <ArrowDownRight className="text-blue-300" size={40} strokeWidth={1.5} />
              </div>

              <div className="bg-blue-900/30 text-slate-200 font-bold p-5 rounded-2xl mb-8 border border-blue-800/50">
                OPENING NIGHT – FASHION, ART & PERFORMANCE
              </div>

              <div className="space-y-5">
                {[
                  { time: '18:30', title: 'EINLASS & EMPFANG', desc: 'Begrüßung und Networking' },
                  { time: '19:00', title: 'OFFIZIELLE BEGRÜSSUNG', desc: '' },
                  { time: '19:30', title: 'LIVE-ART-PAINTING', desc: 'Künstler bei der Arbeit' },
                  { time: '20:00', title: 'FASHION-RUNWAY-SHOW', desc: 'Upcycling-Mode auf dem Laufsteg' },
                  { time: '22:00', title: 'AFTERPARTY & DJ-SET', desc: 'Musik, Tanz & Live-Painting bis 02:00 Uhr nachts' },
                ].map((event, i) => (
                  <div key={i} className="neu-flat rounded-2xl p-5 flex items-center gap-6">
                    <div className="text-blue-400 font-black text-xl w-16 shrink-0">{event.time}</div>
                    <div>
                      <h4 className="font-bold text-slate-200">{event.title}</h4>
                      {event.desc && <p className="text-slate-400 text-sm mt-1">{event.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="neu-flat rounded-[3rem] p-8 lg:p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-4xl font-black mb-1">3. MAI</h3>
                  <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Sonntag, 2026</p>
                </div>
                <ArrowDownRight className="text-blue-300" size={40} strokeWidth={1.5} />
              </div>

              <div className="bg-blue-900/30 text-slate-200 font-bold p-5 rounded-2xl mb-8 border border-blue-800/50">
                EXHIBITION, ART & NETWORKING
              </div>

              <div className="space-y-5">
                {[
                  { time: '13:30', title: 'GALERIEERÖFFNUNG', desc: 'Ausstellung von Kunst & Mode' },
                  { time: '15:30', title: 'BUSINESS TALK', desc: 'Nachhaltigkeit in Kunst & Design' },
                  { time: '16:30', title: 'NETWORKING-SESSION', desc: 'Austausch & Kontakte knüpfen' },
                  { time: '17:30', title: 'ARTIST TALK & GALERIERUNDGANG', desc: 'Einblicke & Diskussionen' },
                  { time: '18:30', title: 'ABSCHLUSSMOMENT', desc: 'Gemeinsamer Ausklang' },
                ].map((event, i) => (
                  <div key={i} className="neu-flat rounded-2xl p-5 flex items-center gap-6">
                    <div className="text-blue-400 font-black text-xl w-16 shrink-0">{event.time}</div>
                    <div>
                      <h4 className="font-bold text-slate-200">{event.title}</h4>
                      {event.desc && <p className="text-slate-400 text-sm mt-1">{event.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galerie" className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight">IMPRESSIONEN</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Ein Blick zurück auf vergangene Momente voller Kreativität, Mode und nachhaltiger Kunst.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: 'image', src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' },
              { type: 'video', src: 'https://images.unsplash.com/photo-1551482850-2197144b55ca?q=80&w=800&auto=format&fit=crop' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=800&auto=format&fit=crop' },
              { type: 'video', src: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=800&auto=format&fit=crop' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop' },
            ].map((media, i) => (
              <div key={i} className="neu-pressed rounded-[2rem] p-3 group cursor-pointer">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={media.src} 
                    alt={`Gallery ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-blue-400 border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="neu-button px-10 py-4 rounded-full font-bold text-blue-400 inline-block">
              Mehr ansehen
            </button>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partner" className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-blue-400 font-bold tracking-widest text-sm mb-6 uppercase">Key Partners</h3>
              <div className="flex flex-wrap gap-4">
                {['KIDINGANGA', 'BOLLÉY', 'Mulungu'].map((p, i) => (
                  <div key={i} className="neu-pressed px-6 py-3 rounded-lg text-slate-400 font-bold text-sm tracking-wider">
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold tracking-widest text-sm mb-6 uppercase">Sponsoren</h3>
              <div className="flex flex-wrap gap-4">
                {['Weidner', 'Ghana Council', 'Ghana Forum', 'SOLI-BUS'].map((p, i) => (
                  <div key={i} className="neu-pressed px-6 py-3 rounded-lg text-slate-400 font-bold text-sm tracking-wider">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tickets Section */}
        <section id="tickets" className="w-full max-w-7xl mx-auto px-6 py-12">
          <div className="bg-blue-900 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
            <div className="flex-1 text-white z-10">
              <h2 className="text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight">TICKET<br/>KAUFEN</h2>
              <p className="text-blue-200 text-lg mb-12 max-w-md">
                Sichern Sie sich jetzt Ihren Zugang zum Upcycling-Event des Jahres. Limitierte Plätze verfügbar.
              </p>

              <div className="space-y-6 mb-12 max-w-md">
                <div className="flex justify-between items-end border-b border-blue-500/50 pb-4">
                  <span className="text-lg">Vorverkauf (VVK)</span>
                  <span className="text-3xl font-black">20.00 €</span>
                </div>
                <div className="flex justify-between items-end border-b border-blue-500/50 pb-4">
                  <span className="text-lg">Abendkasse (AK)</span>
                  <span className="text-3xl font-black">25.00 €</span>
                </div>
              </div>

              <button className="bg-white text-blue-700 hover:bg-slate-200 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl">
                Jetzt Tickets Sichern
              </button>
            </div>

            <div className="w-full lg:w-auto z-10">
              <div className="bg-[#1e293b] rounded-[2.5rem] p-10 lg:p-12 flex flex-col items-center text-center shadow-2xl w-full max-w-sm mx-auto">
                <div className="w-32 h-32 neu-pressed rounded-2xl flex items-center justify-center mb-8">
                  <QrCode size={48} className="text-blue-400" />
                </div>
                <p className="font-bold text-slate-200 text-lg mb-8">Was geht ab? Hier erfährst du's!</p>
                <div className="flex gap-6 text-blue-400">
                  <div className="neu-button p-3 rounded-full cursor-pointer hover:text-blue-300"><Instagram size={24} /></div>
                  <div className="neu-button p-3 rounded-full cursor-pointer hover:text-blue-300"><Facebook size={24} /></div>
                  <div className="neu-button p-3 rounded-full cursor-pointer hover:text-blue-300"><Twitter size={24} /></div>
                  <div className="neu-button p-3 rounded-full cursor-pointer hover:text-blue-300"><MessageCircle size={24} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-16 mt-12 border-t border-slate-700/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="text-xl font-black tracking-tighter mb-4">
              RENEWABLE<span className="font-normal">ELEGANCE</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Ein Projekt zur Förderung von nachhaltiger Mode und kreativem Upcycling in Herten und darüber hinaus.
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4">Veranstaltungsort</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Schwarzkane<br/>
              Ehemalige Zeche Schlägel & Eisen<br/>
              Glückauf-Ring 35-37<br/>
              45699 Herten
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4">Öffnungszeiten</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mo. - Do. 07:30 - 15:30 Uhr<br/>
              Freitags: 07:30 - 12:30 Uhr
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700/50 text-xs text-slate-400">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Presse</a>
          </div>
          <div>
            © 2026 Renewable Elegance Festival. Arts in Motion.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Chat Button */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 neu-button p-4 rounded-full flex items-center justify-center text-[#25D366] hover:text-[#1ebe57] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
