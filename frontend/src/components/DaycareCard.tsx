import { DaycareInfo } from "../types/interfaces";
import ServiceBadges from "./ServiceBadges";

interface DaycareCardProps {
  showOnMap?: boolean;
  daycareInfo: DaycareInfo;
}

function DaycareCard({ showOnMap = false, daycareInfo }: DaycareCardProps) {
  const titleStyle = showOnMap ? "text-sm" : "text-lg";

  return (
    <div className="mb-2 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow">
      <a href="#">
        <h5
          className={`${titleStyle} font-semibold tracking-tight text-gray-900`}
        >
          {daycareInfo.name}
        </h5>
      </a>
      <p className="text-sm font-normal text-gray-500">{daycareInfo.address}</p>

      <ServiceBadges services={daycareInfo.services} />
      <p className="text-sm">Tel: 604-123-456</p>
    </div>
  );
}

export default DaycareCard;
