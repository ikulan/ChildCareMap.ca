import { Popup } from "react-map-gl";
import { Location } from "../../types/interfaces";
import DaycareCard from "../DaycareCard";

interface PopupInfoProps {
  location: Location | null;
  onClose: (argument: Location | null) => void;
}

function PopupInfo({ location, onClose }: PopupInfoProps) {
  return (
    location && (
      <Popup
        anchor="top"
        longitude={location.position.longitude}
        latitude={location.position.latitude}
        closeOnClick={false}
        onClose={() => onClose(null)}
      >
        <DaycareCard showOnMap={true} daycareInfo={location.info} />
      </Popup>
    )
  );
}

export default PopupInfo;
