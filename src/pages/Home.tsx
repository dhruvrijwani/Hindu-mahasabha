import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Users, ScrollText, BookOpen, Clock, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import SectionReveal from '../components/SectionReveal';
import SubtleBackground from '../components/SubtleBackground';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex justify-center items-center overflow-hidden bg-gradient-to-br from-saffron-50/80 to-saffron-100/50">
        <SubtleBackground />
        {/* Abstract motif background instead of image */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eb8f47 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-navy-900"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 drop-shadow-sm text-navy-900">
            Akhil Bharatiya <br className="hidden md:block" /> Hindu Mahasabha
          </h1>
          <p className="text-xl md:text-2xl font-light text-navy-800 max-w-3xl mx-auto mb-10">
            One of India's oldest political and socio-cultural organisations — founded to preserve Hindu identity, promote national unity, and uphold cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/history"
              className="px-8 py-4 bg-saffron-600 hover:bg-saffron-700 text-white font-semibold rounded shadow-md transition-all duration-200 w-full sm:w-auto text-center"
            >
              Explore Our History
            </Link>
            <Link
              to="/ideology"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-navy-900 border border-saffron-200 font-semibold rounded shadow-sm transition-all duration-200 w-full sm:w-auto text-center"
            >
              Learn About Our Ideology
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Key Facts Strip */}
      <section className="bg-white border-b border-saffron-100 py-12 relative z-10">
        <SectionReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-saffron-100">
              <div className="flex flex-col items-center text-center px-4">
                <Clock className="w-8 h-8 text-saffron-600 mb-3" />
                <span className="text-2xl font-display font-bold text-navy-900">1915</span>
                <span className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">Founded</span>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <ScrollText className="w-8 h-8 text-saffron-600 mb-3" />
                <span className="text-2xl font-display font-bold text-navy-900">100+ Years</span>
                <span className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">Organisational History</span>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <Landmark className="w-8 h-8 text-saffron-600 mb-3" />
                <span className="text-2xl font-display font-bold text-navy-900 text-balance">Political Org.</span>
                <span className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">Registered with Govt.</span>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <Users className="w-8 h-8 text-saffron-600 mb-3" />
                <span className="text-2xl font-display font-bold text-navy-900 text-balance">National</span>
                <span className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">National, State, Local</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* 3. Introductory Statement */}
      <section className="py-20 md:py-28 bg-saffron-50">
        <SectionReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                 <Quote className="w-24 h-24 text-saffron-200 absolute -top-8 -left-8 -z-10" />
                 <blockquote className="text-2xl md:text-3xl font-display font-medium leading-snug text-navy-900 border-l-4 border-saffron-500 pl-6 py-2">
                   The Akhil Bharatiya Hindu Mahasabha stands as one of the oldest political and socio-cultural organisations in modern Indian history.
                 </blockquote>
              </div>
              <div className="lg:col-span-1"></div>
              <div className="lg:col-span-6 space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Established during the British colonial period, the organisation emerged as a platform for the protection of Hindu political, social, and cultural interests at a time when India's national identity was being actively contested.
                </p>
                <p>
                  Over its history, the Hindu Mahasabha has played a significant role in shaping the discourse of Hindu nationalism — contributing to political movements, ideological debates, and broader conversations about Indian nationhood. Its legacy continues to inform contemporary discussions on culture, identity, and national heritage.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* 4. Historical Significance */}
      <section className="py-20 md:py-28 bg-white border-y border-saffron-100">
        <SectionReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                  Shaping the Discourse of Hindu Nationalism Since 1915
                </h2>
                <div className="space-y-5 text-gray-700 text-lg">
                  <p>
                    The Hindu Mahasabha occupies a unique place in India's political history. At a time when the Indian National Congress championed secular nationalism, the Mahasabha articulated an alternative vision — one rooted in Hindu cultural identity, civilizational pride, and political unity.
                  </p>
                  <p>
                    From the colonial era debates on separate electorates, to its firm opposition to the partition of India, and its intellectual contributions through leaders like Veer Savarkar, the organization's history is inseparable from the larger story of modern India.
                  </p>
                  <p>
                    Today, the Mahasabha remains a registered political organisation, continuing its role as a platform for Hindu nationalist thought and cultural advocacy.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/history" className="inline-flex items-center text-saffron-600 font-semibold hover:text-saffron-700 transition-colors group">
                    Read Our History
                    <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 w-full">
                <div className="aspect-[4/3] bg-saffron-50 rounded-lg overflow-hidden shadow-sm border border-saffron-100 flex items-center justify-center text-saffron-300 relative">
                  <SubtleBackground />
                  <div className="text-center p-6 relative z-10">
                    <Landmark className="w-16 h-16 mx-auto mb-2 opacity-60 text-saffron-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* 5. Featured Quote */}
      <section className="py-24 bg-saffron-50 text-navy-900 relative flex justify-center text-center overflow-hidden border-b border-saffron-100">
        <SubtleBackground />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-saffron-500"></div>
        <SectionReveal className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Quote className="w-16 h-16 mx-auto text-saffron-400 mb-8 opacity-80" />
          <blockquote className="text-3xl md:text-5xl font-display font-medium leading-tight mb-8 text-navy-900">
            "Hindutva is not a word but a history... not a religious creed but a cultural civilization."
          </blockquote>
          <cite className="block text-lg md:text-xl text-gray-500 font-semibold not-italic uppercase tracking-widest">
            — Vinayak Damodar Savarkar
          </cite>
        </SectionReveal>
      </section>

      {/* 6. Explore More */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Explore Our Organisation</h2>
              <div className="w-24 h-1 bg-saffron-500 mx-auto"></div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "History & Legacy", desc: "Trace the organisation from its founding in 1915 to the present day.", icon: Clock, link: "/history", delay: 0.1 },
              { title: "Ideology & Thought", desc: "Understand the philosophical and political foundations of the Mahasabha.", icon: BookOpen, link: "/ideology", delay: 0.2 },
              { title: "Leadership", desc: "Meet the key figures who shaped the organisation and its ideology.", icon: Users, link: "/leadership", delay: 0.3 },
              { title: "Contributions", desc: "Explore the lasting contributions to Indian political and social thought.", icon: Landmark, link: "/contributions", delay: 0.4 },
              { title: "About Us", desc: "Learn about the organisation's structure, mission, and objectives.", icon: ScrollText, link: "/about", delay: 0.5 }
            ].map((card, i) => (
              <SectionReveal key={i} delay={card.delay}>
                <Link 
                  to={card.link}
                  className="group block p-8 border border-saffron-100 rounded-lg hover:border-saffron-300 hover:shadow-md hover:bg-saffron-50 transition-all duration-300 bg-white h-full"
                >
                  <card.icon className="w-10 h-10 text-saffron-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{card.desc}</p>
                  <span className="inline-flex items-center text-sm font-bold tracking-wider uppercase text-saffron-600 group-hover:text-saffron-700">
                    Explore <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
