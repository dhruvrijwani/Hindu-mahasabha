import React from 'react';
import PageHeader from '../components/PageHeader';
import { Target, Shield, BookOpen, Quote, HeartHandshake, Eye, Landmark, GraduationCap } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

export default function Ideology() {
  const principles = [
    { title: "Hindu Unity", desc: "Uniting Hindus across caste, region, and linguistic divisions into a coherent political force.", icon: Target },
    { title: "Cultural Nationalism", desc: "Recognising India's civilizational identity as rooted in Hindu heritage and tradition.", icon: Landmark },
    { title: "National Strength", desc: "Advocating military preparedness and national resilience as essential to a sovereign nation.", icon: Shield },
    { title: "Opposition to Appeasement", desc: "Rejecting policies perceived as compromising Hindu interests for political expediency.", icon: Eye },
    { title: "Social Reform", desc: "Promoting reform within Hindu society — including opposition to untouchability and support for Dalit temple entry.", icon: HeartHandshake },
    { title: "Cultural Preservation", desc: "Protecting Hindu temples, traditions, and heritage sites.", icon: BookOpen }
  ];

  return (
    <div className="w-full">
      <PageHeader 
        title="Ideology & Thought" 
        subtitle="Understand the political and philosophical foundations of the Hindu Mahasabha."
      />

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6 font-serif">Core Ideological Principles</h2>
            <p className="text-lg text-gray-600">The ideology of the Hindu Mahasabha rested on several inter-connected principles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((item, idx) => (
              <div key={idx} className="bg-primary-50 border border-primary-100 p-8 rounded-lg hover:shadow-md hover:bg-white transition-all duration-300 group">
                <item.icon className="w-10 h-10 text-saffron-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Hindutva Doctrine */}
      <section className="py-20 bg-saffron-50 border-y border-saffron-100 overflow-hidden">
        <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-2 font-serif border-b border-gray-300 pb-2 inline-block">Hindutva:</h2>
              <h3 className="text-2xl font-light text-saffron-700 mb-6 mt-4">The Intellectual Foundation</h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                <p>
                  The most enduring ideological contribution of the Hindu Mahasabha came through Vinayak Damodar Savarkar's doctrine of Hindutva — a concept that went far beyond religious identity.
                </p>
                <p>
                  Savarkar's foundational text, <span className="italic font-medium">Hindutva: Who is a Hindu?</span>, argued that being a Hindu was not merely a matter of religious practice, but a broader cultural, civilizational, and political identity.
                </p>
                <p>
                  Savarkar maintained that communities whose sacred geography lay outside India could not share the same depth of civilizational attachment to the Indian nation. This argument formed the basis for the political vision of a culturally Hindu India.
                </p>
              </div>
              <img src="https://images.unsplash.com/photo-1560946261-26ecb0542ab3?q=80&w=800&auto=format&fit=crop" className="w-full h-48 object-cover rounded-sm border border-gray-300 filter grayscale sepia-[0.2]" alt="Vintage book" />
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-saffron-200 transform translate-x-4 translate-y-4 rounded-xl -z-10"></div>
               <div className="bg-white text-navy-900 p-10 md:p-14 rounded-xl border border-saffron-200 shadow-md relative overflow-hidden">
                 <Quote className="absolute right-4 top-4 w-32 h-32 text-saffron-100 opacity-50" />
                 <h4 className="text-2xl font-display font-bold text-saffron-600 mb-6 border-b border-saffron-100 pb-4">Pitribhumi & Punyabhumi</h4>
                 <p className="text-xl font-light leading-relaxed mb-6">
                   "In his formulation, India was the natural homeland of Hindus — both their <span className="font-medium text-navy-900 italic">Pitribhumi</span> (fatherland) and <span className="font-medium text-navy-900 italic">Punyabhumi</span> (holy land)."
                 </p>
               </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Cultural Nationalism & Social Reform */}
      <section className="py-20 bg-white">
        <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div className="border-l-4 border-saffron-500 pl-8">
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Cultural Nationalism</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  The Hindu Mahasabha was among the earliest Indian political organisations to systematically make the case for cultural nationalism — the idea that national unity must be grounded in shared heritage, tradition, and civilizational identity.
                </p>
                <p>
                  In its view, a nation's unity could not rest on territorial boundaries or administrative structures alone. Language, history, tradition, and shared cultural memory were what truly bound a people together.
                </p>
                <p>
                  This emphasis on cultural nationalism shaped many later discussions about Indian identity, citizenship, and the relationship between religion and nationhood.
                </p>
              </div>
            </div>

             <div className="border-l-4 border-saffron-500 pl-8">
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Social Reform Position</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Contrary to a common misconception, several key leaders of the Hindu Mahasabha advocated active social reform within Hindu society.
                </p>
                <p>
                  Veer Savarkar was an outspoken critic of untouchability, arguing that caste discrimination was a source of internal weakness that undermined Hindu unity. He publicly supported temple entry for Dalits and called for the abolition of discriminatory caste practices.
                </p>
                <p>
                  This social reform position was integral to the Mahasabha's vision of a unified and internally cohesive Hindu society.
                </p>
              </div>
            </div>

          </div>
        </SectionReveal>
      </section>

      {/* Ideological Comparisons */}
      <section className="py-24 bg-primary-50 border-t border-primary-100">
        <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">Ideological Comparisons</h2>
            <div className="w-24 h-1 bg-saffron-500 mx-auto"></div>
          </div>

          <div className="overflow-x-auto shadow-md rounded-lg border border-primary-200">
            <table className="min-w-full text-left bg-white">
              <thead className="bg-saffron-50 text-navy-900 border-b border-saffron-200">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold text-lg w-1/3">Hindu Mahasabha</th>
                  <th scope="col" className="px-6 py-4 font-semibold w-1/3">Indian National Congress</th>
                  <th scope="col" className="px-6 py-4 font-semibold w-1/3">Muslim League</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700 bg-white">
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                  <td className="px-6 py-5 align-top border-r border-gray-100">
                    <span className="font-semibold text-saffron-700 mb-1 block">Cultural Base</span>
                    Hindu cultural nationalism; civilizational identity
                  </td>
                  <td className="px-6 py-5 align-top border-r border-gray-100">Secular nationalism; inclusive politics</td>
                  <td className="px-6 py-5 align-top">Separate Muslim political identity</td>
                </tr>
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                  <td className="px-6 py-5 align-top border-r border-gray-100">
                    <span className="font-semibold text-saffron-700 mb-1 block">Position on Partition</span>
                    Opposition to partition; united India
                  </td>
                  <td className="px-6 py-5 align-top border-r border-gray-100">Accepted partition under negotiated conditions</td>
                  <td className="px-6 py-5 align-top">Demanded partition; creation of Pakistan</td>
                </tr>
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                   <td className="px-6 py-5 align-top border-r border-gray-100">
                    <span className="font-semibold text-saffron-700 mb-1 block">Political Methodology</span>
                    Cautious on mass civil disobedience
                  </td>
                  <td className="px-6 py-5 align-top border-r border-gray-100">Led mass civil disobedience movements</td>
                  <td className="px-6 py-5 align-top">Constitutional & separatist agitation</td>
                </tr>
                <tr className="hover:bg-primary-50 transition-colors duration-200">
                   <td className="px-6 py-5 align-top border-r border-gray-100">
                    <span className="font-semibold text-saffron-700 mb-1 block">Social Approach</span>
                    Social reform within Hindu society
                  </td>
                  <td className="px-6 py-5 align-top border-r border-gray-100">Social inclusion across communities</td>
                  <td className="px-6 py-5 align-top">Muslim community political consolidation</td>
                </tr>
              </tbody>
            </table>
          </div>

        </SectionReveal>
      </section>

    </div>
  );
}
