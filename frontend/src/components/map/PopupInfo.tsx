import { Popup } from "react-map-gl";
import { Feature, Point } from "geojson";

interface PopupInfoProps {
  popupInfo: Feature<Point> | null;
  onClose: (argument: Feature<Point> | null) => void;
}

function PopupInfo({ popupInfo, onClose }: PopupInfoProps) {
  return (
    popupInfo && (
      <Popup
        anchor="top"
        longitude={Number(popupInfo.geometry.coordinates[0])}
        latitude={Number(popupInfo.geometry.coordinates[1])}
        closeOnClick={false}
        onClose={() => onClose(null)}
      >
        <b>{popupInfo.properties?.name}</b>
      </Popup>
    )
  );
}

export default PopupInfo;
