import Modal from "../common/Modal";
import CityPanel from "./CityPanel";

function RegionModel({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <Modal title="Choose Region" onClose={onClose}>
      <CityPanel asPanel={false} />
    </Modal>
  );
}

export default RegionModel;
