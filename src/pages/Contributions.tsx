import React from 'react';
import PageHeader from '../components/PageHeader';
import { BookOpen, Landmark, Users, HeartHandshake, Shield, Sparkles, Map } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

export default function Contributions() {
  const contributions = [
    {
      title: "Development of Hindutva Ideology",
      icon: BookOpen,
      content: [
        "Among the Hindu Mahasabha's most enduring contributions to Indian political thought is its role in articulating and disseminating the ideology of Hindutva. Through the writings and leadership of Veer Savarkar, the organisation provided the intellectual architecture for what became the most significant strand of Hindu nationalist thought in modern India.",
        "Hindutva — as articulated through the Mahasabha platform — framed Indian national identity in civilizational rather than purely religious terms, arguing for a culturally grounded vision of nationhood."
      ]
    },
    {
      title: "Cultural Nationalism",
      icon: Landmark,
      content: [
        "The Hindu Mahasabha was among the earliest Indian political organisations to systematically make the case for cultural nationalism — the idea that national unity must be grounded in shared heritage, tradition, and civilizational identity.",
        "This contribution to political philosophy predated similar arguments elsewhere and helped shape the intellectual vocabulary of India's right-leaning nationalist traditions."
      ]
    },
    {
      title: "Advancing Hindu Political Organisation",
      icon: Users,
      content: [
        "At a time when Indian politics was being increasingly organised along communal lines, the Hindu Mahasabha worked to unite Hindus across barriers of caste, language, and region into a coherent political voice.",
        "This effort at political organisation — however controversial its methods — contributed to the development of a tradition of politically conscious Hindu mobilisation that outlasted the organisation itself."
      ]
    },
    {
      title: "Social Reform Advocacy",
      icon: HeartHandshake,
      content: [
        "Several leaders associated with the Hindu Mahasabha took strong public positions against caste discrimination and untouchability — notably Veer Savarkar, who argued that internal social divisions weakened Hindu unity and were morally indefensible.",
        "Savarkar supported temple entry for Dalits and publicly criticised discriminatory practices as incompatible with his vision of a unified Hindu society.",
        "This social reform dimension of the Mahasabha's history is often under-reported and represents an important aspect of its intellectual legacy."
      ]
    },
     {
      title: "National Security & Militarisation Advocacy",
      icon: Shield,
      content: [
        "The Hindu Mahasabha was an early advocate of military preparedness and national defence as essential attributes of a sovereign nation. Savarkar in particular argued against what he saw as excessive pacifism, contending that nations required military strength for survival and self-defence.",
        "This emphasis on national security — articulated long before India's independence — anticipated debates about defence policy that would become central to post-independence governance."
      ]
    },
    {
      title: "Opposition to Partition",
      icon: Map,
      content: [
        "The Mahasabha maintained a firm and consistent opposition to the partition of India leading up to 1947, warning against dividing the nation along religious lines.",
        "Savarkar and others argued for a strong, unified Indian state, viewing the Muslim League's demand for Pakistan as a fundamental threat to national unity."
      ]
    }
  ];

  const communityActivities = [
    "Cow protection advocacy",
    "Campaigns in support of a Uniform Civil Code",
    "Advocacy against religious conversion",
    "Preservation and protection of Hindu temples and places of worship",
    "Educational and cultural programmes",
    "Commemorative events honouring key leaders of Hindu nationalist tradition"
  ];

  return (
    <div className="w-full">
      <PageHeader 
        title="Contributions & Work" 
        subtitle="Explore the lasting contributions to Indian political thought, social reform advocacy, and cultural life."
      />

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {contributions.map((item, idx) => (
                <SectionReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-primary-100 hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 border-b border-saffron-100 pb-6 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-saffron-50 rounded-full flex items-center justify-center border border-saffron-200 text-saffron-600">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-navy-900">{item.title}</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      {item.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
             ))}
          </div>

          {/* Community Activities */}
          <SectionReveal className="mt-20">
            <div className="bg-saffron-50 text-navy-900 rounded-xl shadow-sm overflow-hidden border border-saffron-200 relative">
               {/* Abstract Motif in corner */}
               <Sparkles className="absolute -right-16 -top-16 w-64 h-64 text-saffron-100 opacity-50 z-0 pointer-events-none" />
               <div className="p-10 md:p-16 relative z-10">
                 <div className="flex flex-col lg:flex-row gap-12 items-start">
                   <div className="lg:w-1/3">
                      <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Community & Cultural Activities</h2>
                      <div className="w-20 h-1 bg-saffron-500 mb-6"></div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Beyond electoral politics, the Hindu Mahasabha has historically engaged in a range of community and cultural activities.
                      </p>
                   </div>
                   <div className="lg:w-2/3">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-sm border border-saffron-100">
                        {communityActivities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                             <Sparkles className="w-5 h-5 text-saffron-500 mt-1 flex-shrink-0 mr-3" />
                             <span className="text-lg text-navy-800">{activity}</span>
                          </li>
                        ))}
                      </ul>
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
