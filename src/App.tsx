/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowRight, Facebook, Instagram, MessageCircle, QrCode, Twitter, X, Menu } from 'lucide-react'; // Assuming lucide-react is the correct import for these icons
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'; // Corrected import for AnimatePresence

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const bgY = useTransform(scrollY, [0, 1000], [0, 250]);

  const bgImages = [
    "https://plus.unsplash.com/premium_photo-1683121155720-36d1a0143217?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop"
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 0; // Adjust if header becomes fixed
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const [showAllGallery, setShowAllGallery] = useState(false);

  const galleryItems = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=800&auto=format&fit=crop' },
    { type: 'video', src: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' },
    { type: 'video', src: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop' },
  ];

  const visibleGalleryItems = showAllGallery ? galleryItems : galleryItems.slice(0, 6);

  return (
    <div className="selection:bg-blue-200 selection:text-blue-900">
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key="preloader"
            className="preloader"
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "blur(15px)",
              transition: { duration: 1.2, ease: "circOut" }
            }}
          >
            <motion.img 
              src="src/Screenshot_2026-03-28_at_20.00.23-removebg-preview.png" 
              alt="Renewable Elegance Preloader"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                opacity: { duration: 1 },
                scale: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="min-h-screen font-sans overflow-x-hidden"
          >
      {/* Header */}
      <div className="w-full bg-slate-900 shadow-md relative z-50">
        <header className="w-full max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 z-50">
            RENEWABLE<span className="font-normal">ELEGANCE</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium text-sm text-slate-300">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-white border-b-2 border-white pb-1">Home</a>
            <a href="#programm" onClick={(e) => handleSmoothScroll(e, 'programm')} className="hover:text-white transition-colors">Programm</a>
            <a href="#galerie" onClick={(e) => handleSmoothScroll(e, 'galerie')} className="hover:text-white transition-colors">Galerie</a>
            <a href="#tickets" onClick={(e) => handleSmoothScroll(e, 'tickets')} className="hover:text-white transition-colors">Tickets</a>
            <a href="#partner" onClick={(e) => handleSmoothScroll(e, 'partner')} className="hover:text-white transition-colors">Partner</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#tickets" onClick={(e) => handleSmoothScroll(e, 'tickets')} className="bg-white hover:bg-slate-200 text-slate-900 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg inline-block hover:-translate-y-1">
              Tickets Kaufen
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-slate-900 shadow-xl border-t border-slate-800 md:hidden flex flex-col p-6 gap-6"
            >
              <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-white font-medium text-lg">Home</a>
              <a href="#programm" onClick={(e) => handleSmoothScroll(e, 'programm')} className="text-slate-300 hover:text-white font-medium text-lg transition-colors">Programm</a>
              <a href="#galerie" onClick={(e) => handleSmoothScroll(e, 'galerie')} className="text-slate-300 hover:text-white font-medium text-lg transition-colors">Galerie</a>
              <a href="#tickets" onClick={(e) => handleSmoothScroll(e, 'tickets')} className="text-slate-300 hover:text-white font-medium text-lg transition-colors">Tickets</a>
              <a href="#partner" onClick={(e) => handleSmoothScroll(e, 'partner')} className="text-slate-300 hover:text-white font-medium text-lg transition-colors">Partner</a>
              <a href="#tickets" onClick={(e) => handleSmoothScroll(e, 'tickets')} className="bg-white text-center hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg inline-block mt-4">
                Tickets Kaufen
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main>
        {/* Hero Section */}
        <div className="relative w-full">
          {/* Background Carousel */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {bgImages.map((src, index) => (
              <motion.img 
                key={src}
                src={src}
                style={{ y: bgY }}
                alt="Background"
                loading={index === 0 ? "eager" : "lazy"}
                className={`absolute -top-[15%] left-0 w-full h-[130%] object-cover transition-opacity duration-1000 ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            {/* Frosted glass overlay to maintain neumorphic readability */}
            <div className="absolute inset-0 bg-[#1e293b]/85 backdrop-blur-lg"></div>
            {/* Gradient fade at the bottom to blend into the next section */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1e293b] to-transparent"></div>
          </div>

          <section id="home" className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left mt-8 lg:mt-0">
            <div className="inline-block bg-blue-900/50 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
              2. - 3. MAI 2026 • SCHWARZKANE, HERTEN
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none tracking-tight text-white">
              Renewable<br />
              <span className="text-blue-400 italic">Elegance</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold tracking-widest text-slate-300 uppercase">Arts in Motion</h2>
            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ein Upcycling-Festival für Kunst und Mode das Textilabfälle in tragbare Kunst verwandelt. Erleben Sie die Schnittstelle von High-Fashion und nachhaltiger Innovation.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a href="#tickets" onClick={(e) => handleSmoothScroll(e, 'tickets')} className="neu-button-accent px-8 py-4 rounded-full font-bold transition-all duration-300 inline-block w-full sm:w-auto text-center">
                Tickets Sichern
              </a>
              <a href="#programm" onClick={(e) => handleSmoothScroll(e, 'programm')} className="neu-button px-8 py-4 rounded-full font-bold text-blue-400 inline-block w-full sm:w-auto text-center">
                Zum Programm
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
            {/* Poster Representation */}
            <div className="w-full max-w-sm md:max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative bg-slate-800">
              {heroImages.map((src, index) => (
                <motion.img 
                  key={src}
                  src={src} 
                  style={{ y }}
                  loading={index === 0 ? "eager" : "lazy"}
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
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">UNSERE HIGHLIGHTS</h2>
          <p className="text-slate-400 max-w-2xl mb-12 text-base md:text-lg">
            Vom Laufsteg bis zur Galerie: Erleben Sie, wie weggeworfene Materialien zu höchster Eleganz werden.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: 'MODENSCHAU', 
                desc: 'Erkunden Sie die Spitze der Kreislaufmode mit unserer abendlichen Runway-Serie.',
                image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800&auto=format&fit=crop'
              },
              { 
                title: 'KUNSTAUSSTELLUNG', 
                desc: 'Eine kuratierte Sammlung taktiler Skulpturen und digitaler Medieninstallationen.',
                image: 'https://images.unsplash.com/photo-1603122630570-7fd434d470d0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              { 
                title: 'LIVE-AUFTRITTE', 
                desc: 'Klangliche Erkundungen mit Künstlern, die experimentelle und recycelte Instrumente nutzen.',
                image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop'
              }
            ].map((item, i) => (
              <div key={i} className="neu-convex rounded-[2rem] p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 neu-pressed p-2">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
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
        <section id="programm" className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">PROGRAMMÜBERSICHT</h2>
            <p className="text-blue-400 font-bold text-base md:text-lg">2. - 3. Mai 2026 • Schwarzkane, Herten</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Day 1 */}
            <div className="neu-convex rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 lg:p-10">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black mb-1">2. MAI</h3>
                  <p className="text-blue-400 font-bold uppercase tracking-widest text-xs md:text-sm">Samstag, 2026</p>
                </div>
                <ArrowDownRight className="text-blue-300" size={32} md:size={40} strokeWidth={1.5} />
              </div>

              <div className="bg-blue-900/30 text-slate-200 font-bold p-4 md:p-5 rounded-2xl mb-6 md:mb-8 border border-blue-800/50 text-sm md:text-base">
                OPENING NIGHT – FASHION, ART & PERFORMANCE
              </div>

              <div className="space-y-4 md:space-y-5">
                {[
                  { time: '18:30', title: 'EINLASS & EMPFANG', desc: 'Begrüßung und Networking' },
                  { time: '19:00', title: 'OFFIZIELLE BEGRÜSSUNG', desc: '' },
                  { time: '19:30', title: 'LIVE-ART-PAINTING', desc: 'Künstler bei der Arbeit' },
                  { time: '20:00', title: 'FASHION-RUNWAY-SHOW', desc: 'Upcycling-Mode auf dem Laufsteg' },
                  { time: '22:00', title: 'AFTERPARTY & DJ-SET', desc: 'Musik, Tanz & Live-Painting bis 02:00 Uhr nachts' },
                ].map((event, i) => (
                  <div key={i} className="neu-flat rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:translate-x-1 transition-transform duration-300">
                    <div className="text-blue-400 font-black text-lg md:text-xl w-16 shrink-0">{event.time}</div>
                    <div>
                      <h4 className="font-bold text-slate-200 text-sm md:text-base">{event.title}</h4>
                      {event.desc && <p className="text-slate-400 text-xs md:text-sm mt-1">{event.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="neu-convex rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 lg:p-10">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black mb-1">3. MAI</h3>
                  <p className="text-blue-400 font-bold uppercase tracking-widest text-xs md:text-sm">Sonntag, 2026</p>
                </div>
                <ArrowDownRight className="text-blue-300" size={32} md:size={40} strokeWidth={1.5} />
              </div>

              <div className="bg-blue-900/30 text-slate-200 font-bold p-4 md:p-5 rounded-2xl mb-6 md:mb-8 border border-blue-800/50 text-sm md:text-base">
                EXHIBITION, ART & NETWORKING
              </div>

              <div className="space-y-4 md:space-y-5">
                {[
                  { time: '13:30', title: 'GALERIEERÖFFNUNG', desc: 'Ausstellung von Kunst & Mode' },
                  { time: '15:30', title: 'BUSINESS TALK', desc: 'Nachhaltigkeit in Kunst & Design' },
                  { time: '16:30', title: 'NETWORKING-SESSION', desc: 'Austausch & Kontakte knüpfen' },
                  { time: '17:30', title: 'ARTIST TALK & GALERIERUNDGANG', desc: 'Einblicke & Diskussionen' },
                  { time: '18:30', title: 'ABSCHLUSSMOMENT', desc: 'Gemeinsamer Ausklang' },
                ].map((event, i) => (
                  <div key={i} className="neu-flat rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:translate-x-1 transition-transform duration-300">
                    <div className="text-blue-400 font-black text-lg md:text-xl w-16 shrink-0">{event.time}</div>
                    <div>
                      <h4 className="font-bold text-slate-200 text-sm md:text-base">{event.title}</h4>
                      {event.desc && <p className="text-slate-400 text-xs md:text-sm mt-1">{event.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galerie" className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">IMPRESSIONEN</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              Ein Blick zurück auf vergangene Momente voller Kreativität, Mode und nachhaltiger Kunst.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: 'image', src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=800&auto=format&fit=crop' },
              { type: 'video', src: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=800&auto=format&fit=crop' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop' },
            ].map((media, i) => (
              <div key={i} className="neu-pressed rounded-[2rem] p-3 group cursor-pointer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleGalleryItems.map((media, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="neu-pressed rounded-[2rem] p-3 group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={media.src} 
                    alt={`Gallery ${media.type} ${i + 1}`} 
                    loading="lazy"
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
              </motion.div>
            ))}
          </div>
          {!showAllGallery && (
            <div className="mt-16 text-center">
              <button 
                onClick={() => setShowAllGallery(true)}
                className="neu-button px-10 py-4 rounded-full font-bold text-blue-400 inline-block"
              >
                Mehr ansehen
              </button>
            </div>
          )}
        </section>

        {/* Partners Section */}
        <section id="partner" className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-blue-400 font-bold tracking-widest text-sm mb-4 md:mb-6 uppercase">Key Partners</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {['KIDINGANGA', 'BOLLÉY', 'Mulungu'].map((p, i) => (
                  <div key={i} className="neu-pressed px-4 md:px-6 py-2 md:py-3 rounded-lg text-slate-400 font-bold text-xs md:text-sm tracking-wider">
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold tracking-widest text-sm mb-4 md:mb-6 uppercase">Sponsoren</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {['Weidner', 'Ghana Council', 'Ghana Forum', 'SOLI-BUS'].map((p, i) => (
                  <div key={i} className="neu-pressed px-4 md:px-6 py-2 md:py-3 rounded-lg text-slate-400 font-bold text-xs md:text-sm tracking-wider">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tickets Section */}
        <section id="tickets" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-blue-950">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop" 
                alt="Tickets Background" 
                className="w-full h-full object-cover opacity-60 blur-md scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900/40 to-blue-950/80"></div>
            </div>

            <div className="flex-1 text-white z-10 text-center lg:text-left w-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-none tracking-tight">TICKET<br className="hidden sm:block"/>KAUFEN</h2>
              <p className="text-blue-200 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-md mx-auto lg:mx-0">
                Sichern Sie sich jetzt Ihren Zugang zum Upcycling-Event des Jahres. Limitierte Plätze verfügbar.
              </p>

              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12 max-w-md mx-auto lg:mx-0">
                <div className="flex justify-between items-end border-b border-blue-500/50 pb-3 md:pb-4">
                  <span className="text-sm sm:text-base md:text-lg">Vorverkauf (VVK)</span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-black">20.00 €</span>
                </div>
                <div className="flex justify-between items-end border-b border-blue-500/50 pb-3 md:pb-4">
                  <span className="text-sm sm:text-base md:text-lg">Abendkasse (AK)</span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-black">25.00 €</span>
                </div>
              </div>

              <button className="neu-button-accent px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg w-full sm:w-auto">
                Jetzt Tickets Sichern
              </button>
            </div>

            <div className="w-full lg:w-auto z-10">
              <div className="neu-convex rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center text-center w-full max-w-sm mx-auto">
                <div className="w-24 h-24 md:w-32 md:h-32 neu-pressed rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                  <QrCode size={40} className="text-blue-400 md:w-12 md:h-12" />
                </div>
                <p className="font-bold text-slate-200 text-base md:text-lg mb-6 md:mb-8">Was geht ab? Hier erfährst du's!</p>
                <div className="flex gap-4 md:gap-6 text-blue-400">
                  <div className="neu-button p-2 md:p-3 rounded-full cursor-pointer hover:text-blue-300"><Instagram size={20} className="md:w-6 md:h-6" /></div>
                  <div className="neu-button p-2 md:p-3 rounded-full cursor-pointer hover:text-blue-300"><Facebook size={20} className="md:w-6 md:h-6" /></div>
                  <div className="neu-button p-2 md:p-3 rounded-full cursor-pointer hover:text-blue-300"><Twitter size={20} className="md:w-6 md:h-6" /></div>
                  <div className="neu-button p-2 md:p-3 rounded-full cursor-pointer hover:text-blue-300"><MessageCircle size={20} className="md:w-6 md:h-6" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 mt-8 md:mt-12 border-t border-slate-700/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="text-xl font-black tracking-tighter mb-4">
              RENEWABLE<span className="font-normal">ELEGANCE</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Ein Projekt zur Förderung von nachhaltiger Mode und kreativem Upcycling in Herten und darüber hinaus.
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-3 md:mb-4">Veranstaltungsort</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Schwarzkane<br/>
              Ehemalige Zeche Schlägel & Eisen<br/>
              Glückauf-Ring 35-37<br/>
              45699 Herten
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-3 md:mb-4">Öffnungszeiten</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mo. - Do. 07:30 - 15:30 Uhr<br/>
              Freitags: 07:30 - 12:30 Uhr
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-slate-700/50 text-xs text-slate-400 gap-4 md:gap-0 text-center md:text-left">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Presse</a>
          </div>
          <div className="flex items-center gap-8 md:gap-10">
            <div>
              © 2026 Renewable Elegance Festival. Arts in Motion.
            </div>
            <div className="flex gap-3 md:gap-4 text-blue-400">
              <a href="https://www.instagram.com/reels/DWQ9dh7iGzd/" target="_blank" rel="noopener noreferrer" className="neu-button p-2 md:p-3 rounded-full cursor-pointer hover:text-blue-300 transition-all" aria-label="Instagram">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.instagram.com/reels/DWQ9dh7iGzd/" target="_blank" rel="noopener noreferrer" className="neu-button p-2 md:p-3 rounded-full cursor-pointer hover:text-blue-300 transition-all" aria-label="Facebook">
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.instagram.com/reels/DWQ9dh7iGzd/" target="_blank" rel="noopener noreferrer" className="neu-button p-2 md:p-3 rounded-full cursor-pointer hover:text-blue-300 transition-all" aria-label="Twitter">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://wa.me/+49123456789" target="_blank" rel="noopener noreferrer" className="neu-button p-2 md:p-3 rounded-full cursor-pointer hover:text-[#1ebe57] transition-all" aria-label="WhatsApp">
                <MessageCircle size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Chat Button */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 neu-button p-3 md:p-4 rounded-full flex items-center justify-center text-[#25D366] hover:text-[#1ebe57] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
