import { CrossIcon } from "../icons/CrossIcon";

function Modal({ onClose, children }) {
  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
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
          <div className="space-y-4 p-4 md:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
