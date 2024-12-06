import { DaycareInfo } from "../types/interfaces";
import ServiceBadges from "./ServiceBadges";

interface DaycareCardProps {
  showOnMap?: boolean;
  daycareInfo: DaycareInfo;
}

function DaycareCard({ showOnMap = false, daycareInfo }: DaycareCardProps) {
  const wrapperStyle = showOnMap
    ? "mt-1 w-56 px-1"
    : "mb-2 rounded-lg border border-gray-200 bg-white shadow p-4";
  const titleStyle = showOnMap ? "text-sm" : "text-lg";

  return (
    <div className={`${wrapperStyle}`}>
      <a href="#">
        <h5
          className={`${titleStyle} font-semibold tracking-tight text-gray-900`}
        >
          {daycareInfo.name}
        </h5>
      </a>
      <p className="text-sm font-normal text-gray-500">{daycareInfo.address}</p>

      <ServiceBadges services={daycareInfo.services} />
      <p className="text-sm">Tel: {daycareInfo.phone}</p>
    </div>
  );
}

export default DaycareCard;
