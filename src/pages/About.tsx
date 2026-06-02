import React from 'react';
import PageHeader from '../components/PageHeader';
import { Target, Users, MapPin, Landmark, BookOpen, Scale } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

export default function About() {
  return (
    <div className="w-full relative">
      <PageHeader 
        title="About Us" 
        subtitle="Provide a clear institutional overview of the Hindu Mahasabha."
      />

      {/* Overview & Context */}
      <section className="py-20 bg-white">
        <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-6 font-serif">About the Hindu Mahasabha</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed border-l-4 border-saffron-300 pl-6 bg-saffron-50 p-6 rounded-r-lg">
                <p>
                  The Hindu Mahasabha is one of the oldest political and socio-cultural organisations in modern Indian history. Founded during the British colonial period, it emerged as an organised platform for the protection of Hindu political, social, and cultural interests.
                </p>
                <p>
                  The organisation is registered as a political party in India, maintains national, state, and local committees, and continues to engage in public discourse on issues related to Hindu cultural identity, national unity, and social concerns.
                </p>
                <p>
                  Although its direct electoral influence declined after Indian independence, its ideological contributions — particularly in articulating the framework of Hindutva and cultural nationalism — left a lasting mark on Indian political thought.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-6 font-serif">Founding Context</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  The roots of the Hindu Mahasabha lie in the late nineteenth and early twentieth centuries — a period of profound political awakening across India under British colonial rule. Multiple socio-religious reform movements were emerging among various communities, and Hindu leaders increasingly felt the need for an organised political voice.
                </p>
                <p>
                  The organisation formally took shape in 1915, under the leadership of prominent nationalist leaders including Madan Mohan Malaviya. Its initial mandate was not to function as a separate political party, but as a pressure group within the broader nationalist movement — uniting Hindus across caste and regional lines and protecting Hindu social and political rights.
                </p>
                <p>
                  The British government's introduction of separate electorates for Muslims through the Morley-Minto Reforms of 1909 had signalled the growing communalisation of Indian politics. The Hindu Mahasabha emerged partly in response to these developments.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Organisational Structure */}
      <section className="py-20 bg-primary-50 border-y border-primary-100">
        <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6 font-serif">Organisational Structure</h2>
            <p className="text-lg text-gray-600 font-sans">The Hindu Mahasabha has historically operated through a multi-tiered national structure, holding meetings, conferences, religious events, and public campaigns related to Hindu social and political affairs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary-200 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mx-auto bg-saffron-100 rounded-full flex items-center justify-center mb-6">
                 <Landmark className="w-8 h-8 text-saffron-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">National Committee</h3>
              <p className="text-gray-600 leading-relaxed">Central governing and policy-making body driving the national vision.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary-200 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mx-auto bg-saffron-100 rounded-full flex items-center justify-center mb-6">
                 <MapPin className="w-8 h-8 text-saffron-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">State Committees</h3>
              <p className="text-gray-600 leading-relaxed">Regional-level representation and coordination across the country.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary-200 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mx-auto bg-saffron-100 rounded-full flex items-center justify-center mb-6">
                 <Users className="w-8 h-8 text-saffron-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Local Committees</h3>
              <p className="text-gray-600 leading-relaxed">Grassroots presence activating initiatives at the district and city level.</p>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Mission & Objectives and Fact Sheet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-16 item-start">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b-2 border-saffron-500 pb-4 inline-block font-serif">Mission & Objectives</h2>
              <p className="text-lg text-gray-700 mb-8 font-sans">The Hindu Mahasabha has historically pursued the following core objectives:</p>
              
              <ul className="space-y-6">
                {[
                  "Protection of Hindu culture, traditions, and religious heritage.",
                  "Promotion of political and social unity among Hindus.",
                  "Advocacy for the abolition of caste discrimination and untouchability.",
                  "Support for a Uniform Civil Code across India.",
                  "Preservation of Hindu temples and places of worship.",
                  "Promotion of national strength and cultural pride.",
                  "Educational and cultural programmes aligned with Hindu civilizational values."
                ].map((obj, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Target className="w-6 h-6 text-saffron-500" />
                    </div>
                    <p className="ml-4 text-lg text-gray-800 leading-snug tracking-wide">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-saffron-50 text-navy-900 rounded-xl shadow-sm overflow-hidden p-8 sticky top-28 border border-saffron-200">
                <h3 className="text-2xl font-display font-bold mb-6 text-saffron-700">Fact Sheet</h3>
                <div className="space-y-5 divide-y divide-saffron-200">
                  <div className="pt-2">
                    <span className="block text-sm font-bold tracking-wider uppercase text-navy-800 mb-1">Founded</span>
                    <span className="text-lg">1915</span>
                  </div>
                  <div className="pt-4">
                    <span className="block text-sm font-bold tracking-wider uppercase text-navy-800 mb-1">Founders</span>
                    <span className="text-lg">Madan Mohan Malaviya and other prominent nationalist leaders</span>
                  </div>
                  <div className="pt-4">
                    <span className="block text-sm font-bold tracking-wider uppercase text-navy-800 mb-1">Organisation Type</span>
                    <span className="text-lg text-balance">Registered Political & Socio-Cultural Organisation</span>
                  </div>
                  <div className="pt-4">
                    <span className="block text-sm font-bold tracking-wider uppercase text-navy-800 mb-1">Ideological Basis</span>
                    <span className="text-lg">Hindu nationalism, Hindutva, Cultural nationalism</span>
                  </div>
                  <div className="pt-4">
                    <span className="block text-sm font-bold tracking-wider uppercase text-navy-800 mb-1">Key Ideology Text</span>
                    <span className="text-lg italic">Hindutva: Who is a Hindu?</span> — V.D. Savarkar
                  </div>
                  <div className="pt-4">
                    <span className="block text-sm font-bold tracking-wider uppercase text-navy-800 mb-1">Structure</span>
                    <span className="text-lg">National, State, and Local Committees</span>
                  </div>
                   <div className="pt-4 border-b border-transparent">
                    <span className="block text-sm font-bold tracking-wider uppercase text-navy-800 mb-1">Current Status</span>
                    <span className="text-lg text-balance">Registered political organisation; limited electoral presence; active in public discourse</span>
                  </div>
                </div>
              </div>
            </div>

          </SectionReveal>
        </div>
      </section>

    </div>
  );
}
