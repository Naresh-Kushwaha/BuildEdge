const ServiceCard = ({ name, image }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-lg font-medium text-gray-700">{name}</h3>
    </div>
  </div>
);

export default ServiceCard;
