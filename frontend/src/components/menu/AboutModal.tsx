import Modal from "../common/Modal";
import { GithubIcon } from "../icons/GithubIcon";

function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      {/* Modal Content */}
      <p className="text-base leading-relaxed text-gray-500">
        This project aims to create a convenient and modern website where users
        can easily search for and explore child care service information in BC.
      </p>
      <p className="text-base leading-relaxed text-gray-500">
        The data source comes from the{" "}
        <a
          href="https://open.canada.ca/data/en/dataset/4cc207cc-ff03-44f8-8c5f-415af5224646"
          className="text-indigo-600 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          BC government's open data set
        </a>
        .
      </p>
      <p className="text-base leading-relaxed text-gray-500">
        I am working on improving this website. Stay tuned for upcoming
        features!
      </p>

      {/* Modal Buttons */}
      <div className="flex w-full justify-center">
        <a
          className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none"
          href="https://github.com/ikulan/BC-Daycares-Info"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon className="me-2 h-4 w-4" />
          GitHub
        </a>
      </div>
    </Modal>
  );
}

export default AboutModal;
