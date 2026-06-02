import React from 'react';
import PageHeader from '../components/PageHeader';
import { User, Quote } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

export default function Leadership() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Leadership" 
        subtitle="Meet the key figures who shaped the organisation and its ideology."
      />

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Savarkar - Featured/Large Profile */}
          <SectionReveal className="bg-white rounded-xl shadow-md overflow-hidden border border-primary-100 hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 bg-saffron-50 relative flex flex-col items-center border-b lg:border-b-0 lg:border-r border-gray-300 py-12 p-4">
                <div className="w-full aspect-[3/4] mb-8 relative border-4 border-white shadow-md mx-6">
                   <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop" alt="Savarkar Archival Portrait" className="w-full h-full object-cover filter grayscale sepia-[0.3]" />
                </div>
                <div className="text-center px-4 relative z-10 w-full bg-white p-4 border border-saffron-200">
                   <h2 className="text-2xl font-display font-medium mb-1 text-navy-900 border-b border-gray-200 pb-2">Vinayak Damodar<br/>Savarkar</h2>
                   <p className="text-sm text-saffron-700 font-serif italic mt-2">President (1937 onwards)</p>
                   <p className="text-xs text-navy-800 uppercase tracking-wider font-bold mt-1">Author of Hindutva doctrine</p>
                </div>
              </div>

              <div className="lg:col-span-8 p-10 md:p-16 flex flex-col justify-center bg-white">
                <div className="mb-6 flex justify-between items-start">
                   <Quote className="w-12 h-12 text-saffron-200" />
                </div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Vinayak Damodar Savarkar — known popularly as Veer Savarkar — remains one of the most influential and debated figures in modern Indian political history. A revolutionary nationalist who endured imprisonment in the Cellular Jail in the Andaman Islands, Savarkar's life traced an extraordinary arc from anti-colonial activism to ideological leadership.
                  </p>
                  <p>
                    His foundational text, <span className="italic font-medium">Hindutva: Who is a Hindu?</span>, articulated a comprehensive vision of Hindu civilization as the basis for Indian nationhood. He argued that shared culture, history, and heritage — not merely religion or territory — were the true binding forces of a nation.
                  </p>
                  <p>
                     As President of the Hindu Mahasabha from 1937, Savarkar gave the organisation its most distinctive ideological voice. He advocated the militarization of Hindu society, strong opposition to the partition of India, and a vision of India as a culturally Hindu civilization.
                  </p>
                  <p>
                    Savarkar also took a firm stand against untouchability and caste discrimination, viewing them as internal weaknesses that undermined the unity he sought to build. His ideas have continued to inspire significant political and ideological movements in India and remain the subject of active scholarly and political debate.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Malaviya */}
            <SectionReveal className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-primary-100 flex flex-col h-full">
               <div className="aspect-[3/4] bg-saffron-50 flex flex-col items-center justify-center p-6 border-b border-gray-300 relative overflow-hidden">
                 <div className="w-full h-full border-4 border-white shadow-md relative z-10">
                   <img src="https://images.unsplash.com/photo-1507675971448-f222035eb5ee?q=80&w=800&auto=format&fit=crop" alt="Historical profile" className="w-full h-full object-cover filter grayscale sepia-[0.3]" />
                 </div>
               </div>
               <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">Madan Mohan Malaviya</h2>
                  <p className="text-md text-saffron-700 font-medium mb-6 font-serif italic">Founding Leader (1915)</p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed flex-grow">
                    <p>
                      Madan Mohan Malaviya was among the most respected nationalist leaders of the early twentieth century. A prominent figure within the Indian National Congress, he simultaneously championed the cause of Hindu political organisation.
                    </p>
                    <p>
                       In 1915, Malaviya played a central role in the formal establishment of the Hindu Mahasabha — providing it with early institutional leadership and intellectual credibility. He embodied a generation of leaders who saw no contradiction between nationalist politics and the protection of Hindu cultural interests.
                    </p>
                  </div>
               </div>
            </SectionReveal>

            {/* Mukherjee */}
            <SectionReveal className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-primary-100 flex flex-col h-full">
               <div className="aspect-[3/4] bg-saffron-50 flex flex-col items-center justify-center p-6 border-b border-gray-300 relative overflow-hidden">
                 <div className="w-full h-full border-4 border-white shadow-md relative z-10">
                   <img src="https://images.unsplash.com/photo-1517598024396-46c53fb391a1?q=80&w=800&auto=format&fit=crop" alt="Historical profile" className="w-full h-full object-cover filter grayscale sepia-[0.3]" />
                 </div>
               </div>
               <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">Syama Prasad Mukherjee</h2>
                  <p className="text-md text-saffron-700 font-medium mb-6 font-serif italic">Key Leader & Founder (BJS)</p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed flex-grow">
                    <p>
                      Syama Prasad Mukherjee was a prominent political leader who was closely associated with the Hindu Mahasabha in the post-independence period.
                    </p>
                    <p>
                       In 1951, believing that a broader nationalist political platform was needed to challenge Congress dominance, he departed to found the Bharatiya Jana Sangh.
                    </p>
                     <p>
                       The Jana Sangh later evolved into the Bharatiya Janata Party — today one of India's largest political parties. Mukherjee's departure marked a significant turning point in the Mahasabha's political trajectory.
                    </p>
                  </div>
               </div>
            </SectionReveal>

          </div>

        </div>
      </section>

    </div>
  );
}
