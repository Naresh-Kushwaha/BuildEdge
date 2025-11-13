// src/pages/About.jsx
const About = () => {
  const pillars = [
    { title: "Quality First", desc: "Material and workmanship standards enforced across every phase from site prep to finishing." },
    { title: "On‑time Delivery", desc: "Reliable scheduling with transparent milestones and tracked progress." },
    { title: "Safety & Compliance", desc: "Strict adherence to safety norms, inspections, and documentation." },
  ];

  const phases = [
    { step: "Preliminary & Site Prep", detail: "Survey, marking, excavation, leveling, and temporary works." },
    { step: "Foundation & Substructure", detail: "PCC, reinforcement, shuttering, pouring, and waterproofing." },
    { step: "Superstructure & Roofing", detail: "Columns, beams, slabs, masonry, and roof finishing." },
    { step: "MEP Services", detail: "Plumbing, electrical, HVAC integration and testing." },
    { step: "Finishing & Handover", detail: "Plastering, flooring, painting, snag rectification, and final cleaning." },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-amber-600">BUIDEDGE</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            BUIDEDGE delivers end‑to‑end construction services—from site preparation to finishing—with uncompromising quality, safety, and schedule discipline. Our multidisciplinary team manages civil, structural, and MEP scopes with modern workflows and clear communication. [web:32][web:35]
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What sets us apart</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={i} className="rounded-xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-3 text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our delivery process</h2>
          <ol className="relative border-s border-gray-200">
            {phases.map((ph, i) => (
              <li key={i} className="mb-10 ms-6">
                <span className="absolute -start-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-white text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{ph.step}</h3>
                <p className="text-gray-600 mt-1">{ph.detail}</p>
              </li>
            ))}
          </ol>
          <p className="text-gray-600 mt-4">
            This structured approach ensures predictable outcomes and high client satisfaction using established Tailwind hero/section patterns. [web:32][web:35]
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
