// src/pages/Projects.jsx
import { useMemo, useState } from "react";

const sampleProjects = [
  {
    id: 1,
    title: "RCC Residential Villa",
    category: "Residential",
    cover: "/project-images/villa-1.jpg",
    location: "Bengaluru, KA",
    scope: "Turnkey: Civil + MEP + Finishing",
  },
  {
    id: 2,
    title: "Corporate Office Fit‑Out",
    category: "Commercial",
    cover: "/project-images/office-1.jpg",
    location: "Hyderabad, TS",
    scope: "Interior fit‑out + HVAC + Electrical",
  },
  {
    id: 3,
    title: "Industrial Shed & Utilities",
    category: "Industrial",
    cover: "/project-images/industrial-1.jpg",
    location: "Hosur, TN",
    scope: "Structural steel + Utilities + Flooring",
  },
  {
    id: 4,
    title: "Apartment Block",
    category: "Residential",
    cover: "/project-images/apartment-1.jpg",
    location: "Mysuru, KA",
    scope: "Civil superstructure + Services",
  },
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(sampleProjects.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(
    () => (active === "All" ? sampleProjects : sampleProjects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Projects</h1>
            <p className="text-gray-700 mt-2">
              A selection of completed works across Residential, Commercial, and Industrial sectors displayed in a responsive grid using Tailwind card patterns. [web:27][web:33][web:36]
            </p>
          </div>
          <div className="flex gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  active === c ? "bg-amber-600 text-white border-amber-600" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">{p.category}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{p.location}</p>
                <p className="text-gray-700 mt-2">{p.scope}</p>
                <div className="mt-4">
                  <a href={`/projects/${p.id}`} className="text-amber-700 hover:text-amber-800 font-medium">
                    View details →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
