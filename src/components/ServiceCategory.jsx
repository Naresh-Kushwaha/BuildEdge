import ServiceCard from "./ServiceCard";

const ServiceCategory = ({ icon, category, services }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-6">
      <span className="mr-2 text-3xl">{icon}</span> {category}
    </h2>
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {services.map((item, index) => (
        <ServiceCard key={index} name={item.name} image={item.image} />
      ))}
    </div>
  </section>
);

export default ServiceCategory;
