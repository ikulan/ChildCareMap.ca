import { ServiceTypes } from "../types/enums";

const serviceMapping = [
  {
    type: ServiceTypes.UNDER_3,
    color: "bg-red-500",
    label: "< 3y",
  },
  {
    type: ServiceTypes.UNDER_5,
    color: "bg-purple-500",
    label: "2.5 - 5y",
  },
  {
    type: ServiceTypes.OOS_SCHOOL,
    color: "bg-indigo-500",
    label: "School Age",
  },
];

function ServiceBadge({ color, label }: { color: string; label: string }) {
  return (
    <span className="me-3 flex items-center text-sm font-medium text-gray-900">
      <span
        className={`me-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full ${color}`}
      ></span>
      {label}
    </span>
  );
}

function ServiceBadges({ services }: { services: ServiceTypes[] }) {
  return (
    <div className="mb-2 flex text-sm">
      {serviceMapping
        .filter((service) => services.includes(service.type))
        .map(({ color, label }, index) => (
          <ServiceBadge key={index} color={color} label={label} />
        ))}
    </div>
  );
}

export default ServiceBadges;
