import React from 'react';
import PageHeader from '../components/PageHeader';
import { ScrollText, Landmark, Clock, CheckCircle } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import { motion } from 'motion/react';

export default function History() {
  const timelineEvents = [
    { year: "1909", event: "Morley-Minto Reforms introduce separate electorates for Muslims." },
    { year: "1915", event: "Akhil Bharatiya Hindu Mahasabha formally established under Madan Mohan Malaviya." },
    { year: "1920s", event: "Growing ideological divergence from the Indian National Congress." },
    { year: "1937", event: "Veer Savarkar becomes President of the Hindu Mahasabha." },
    { year: "1940s", event: "Mahasabha firmly opposes partition of India." },
    { year: "1947", event: "Indian Independence; partition of India." },
    { year: "1948", event: "Gandhi assassination; political isolation of the Mahasabha." },
    { year: "1951", event: "Syama Prasad Mukherjee founds the Bharatiya Jana Sangh." },
    { year: "Post-1951", event: "Hindu Mahasabha continues as ideological and cultural platform." }
  ];

  return (
    <div className="w-full">
      <PageHeader 
        title="History & Legacy" 
        subtitle="Trace the complete historical narrative of the Hindu Mahasabha from its colonial origins to its present-day legacy."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Timeline and Eras grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Eras Column */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Era 1 */}
              <SectionReveal className="relative">
                <div className="absolute -left-12 top-2 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-saffron-100 border-2 border-saffron-500 text-saffron-600 font-bold text-sm">1</div>
                <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Colonial Origins (1909–1920)</h2>
                <h3 className="text-xl font-medium text-saffron-600 mb-4">A Response to Communal Politics</h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The late nineteenth century saw India's political landscape being reshaped by colonial policies and communal reorganisation. The Morley-Minto Reforms of 1909 introduced separate electorates for Muslims, deepening the communalisation of Indian politics.
                  </p>
                  <p>
                    As Muslim political organisations grew in influence, Hindu leaders recognised the need for organised political representation. In 1915, the Akhil Bharatiya Hindu Mahasabha formally emerged under the leadership of Madan Mohan Malaviya — not as a rival to the Indian National Congress, but initially as a complementary pressure group advocating Hindu interests within the nationalist framework.
                  </p>
                  <p>
                    In its early years, the organisation cooperated with the Congress on many aspects of the freedom struggle. Several leaders, including Malaviya himself, held positions in both organisations simultaneously.
                  </p>
                </div>
              </SectionReveal>

              {/* Era 2 */}
              <SectionReveal className="relative">
                 <div className="absolute -left-12 top-2 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-saffron-100 border-2 border-saffron-500 text-saffron-600 font-bold text-sm">2</div>
                <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Ideological Formation (1920s–1937)</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The 1920s and 1930s were a period of growing ideological divergence between the Congress and the Mahasabha. As communal tensions increased across India, the Mahasabha became more assertive in articulating Hindu political interests.
                  </p>
                  <p>
                    A defining moment came with the Mahasabha's opposition to the Khilafat Movement — a campaign supported by Mahatma Gandhi to build Hindu-Muslim unity. The Mahasabha argued that mixing religion with politics in this manner did not serve national interests.
                  </p>
                  <p>
                    The most transformative development of this period was the emergence of Vinayak Damodar Savarkar as a central figure. In 1937, Savarkar became president of the Hindu Mahasabha. His intellectual work, particularly the doctrine of Hindutva, gave the organisation a sharper ideological identity and lasting political influence.
                  </p>
                </div>
              </SectionReveal>

               {/* Era 3 */}
               <SectionReveal className="relative">
                 <div className="absolute -left-12 top-2 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-saffron-100 border-2 border-saffron-500 text-saffron-600 font-bold text-sm">3</div>
                <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Partition & Independence (1937–1947)</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The years leading to India's independence were marked by intense political tension. The Hindu Mahasabha was a firm and consistent opponent of the partition of India.
                  </p>
                  <p>
                    Savarkar argued for a strong, unified Indian state and warned against dividing the nation along religious lines. The Mahasabha viewed the Muslim League's demand for Pakistan as a fundamental threat to national unity.
                  </p>
                  <p>
                    The Mahasabha adopted constitutional methods of political engagement rather than mass civil disobedience. This position differentiated it from the Congress-led independence movement.
                  </p>
                  <p>
                    The violence accompanying partition reinforced the Mahasabha's arguments about the need for Hindu political unity and national strength.
                  </p>
                </div>
              </SectionReveal>

              {/* Era 4 */}
              <SectionReveal className="relative">
                 <div className="absolute -left-12 top-2 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-saffron-100 border-2 border-saffron-500 text-saffron-600 font-bold text-sm">4</div>
                <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Post-Independence (1948 onwards)</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The years immediately following independence brought significant challenges to the Hindu Mahasabha.
                  </p>
                  <p>
                    In January 1948, Mahatma Gandhi was assassinated by Nathuram Godse, who had previously been associated with the organisation. The event led to severe public criticism, political isolation, and lasting reputational damage for the Hindu Mahasabha. Though Savarkar was arrested in connection with the conspiracy, he was subsequently acquitted due to lack of sufficient evidence.
                  </p>
                  <p>
                     In 1951, Syama Prasad Mukherjee departed to found the Bharatiya Jana Sangh, which later evolved into the Bharatiya Janata Party. This departure significantly weakened the Mahasabha's political base.
                  </p>
                  <p>
                    In the decades that followed, the Hindu Mahasabha was unable to secure major representation in Parliament or state assemblies. However, the organisation continued to function as an ideological and cultural platform, maintaining a presence in public discourse through statements, events, and commemorative activities.
                  </p>
                </div>
              </SectionReveal>

            </div>

             {/* Vertical Timeline Column */}
             <div className="lg:col-span-4 relative pl-4 lg:pl-10 lg:border-l-2 lg:border-gray-100 mt-16 lg:mt-0">
               <div className="sticky top-28">
                  <h3 className="text-2xl font-display font-bold mb-8 text-navy-900 flex items-center">
                    <Clock className="mr-3 text-saffron-500" />
                    Historical Timeline
                  </h3>
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-saffron-300 before:to-transparent">
                    {timelineEvents.map((item, index) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index} 
                        className="relative flex items-start gap-4"
                      >
                        <div className="absolute left-0 w-4 h-4 rounded-full bg-saffron-500 border-2 border-white shadow mt-1.5 z-10"></div>
                         <div className="ml-8 bg-white p-4 rounded-lg border border-saffron-100 shadow-sm w-full hover:shadow-md transition-shadow">
                           <span className="text-sm font-bold tracking-wider uppercase text-saffron-600 mb-1 block">{item.year}</span>
                           <p className="text-gray-700 text-sm leading-tight">{item.event}</p>
                         </div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-saffron-50 border-t border-saffron-200 text-navy-900 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-saffron-500"></div>
        <SectionReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Landmark className="w-16 h-16 mx-auto text-saffron-400 mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">An Ideology That Outlasted Its Electoral Fortunes</h2>
          <div className="space-y-6 text-xl font-light text-gray-700 leading-relaxed text-left md:text-center">
            <p>
              The legacy of the Hindu Mahasabha is measured not by electoral results, but by the depth of its ideological contributions to Indian political thought.
            </p>
            <p>
              The organisation was among the first to articulate a systematic framework of cultural nationalism in the Indian context — one centred on civilizational pride, Hindu unity, and a vision of nationhood rooted in shared culture and heritage.
            </p>
            <p>
              Its leaders' writings and speeches continue to inspire study and debate in academic, political, and cultural circles. The questions it raised about national identity, cultural heritage, secularism, and religious freedom remain central to contemporary Indian public discourse.
            </p>
            <p className="font-semibold text-navy-800 italic mt-6 bg-white p-6 border border-saffron-200 rounded-lg shadow-sm">
              The Hindu Mahasabha also reminds us that India's independence was not shaped by a single political vision — it was the product of competing ideas, diverse strategies, and multiple voices, each contributing to the India we know today.
            </p>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
