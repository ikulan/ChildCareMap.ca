import { CrossIcon } from "../icons/CrossIcon";
import { GithubIcon } from "../icons/GithubIcon";

function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center justify-items-center overflow-y-auto overflow-x-hidden pt-24 md:inset-0"
    >
      <div className="relative max-h-full w-full max-w-xl p-4">
        <div className="relative rounded-lg bg-white shadow">
          {/* Modal Header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900">About</h3>
            <button
              type="button"
              className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              onClick={onClose}
            >
              <CrossIcon className="h-3 w-3" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal Content */}
          <div className="space-y-4 p-4 md:p-5">
            <p className="text-base leading-relaxed text-gray-500">
              This project aims to create a convenient and modern website where
              users can easily search for and explore child care service
              information in BC.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
