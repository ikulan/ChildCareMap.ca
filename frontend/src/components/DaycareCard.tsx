function DaycareCard() {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          ABC Daycare
        </h5>
      </a>
      <p className="text-sm font-normal text-gray-500">
        123 De Street, City, BC
      </p>

      <div className="mb-2 flex text-sm">
        <span className="me-3 flex items-center text-sm font-medium text-gray-900">
          <span className="me-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-500"></span>
          &lt; 3y
        </span>
        <span className="me-3 flex items-center text-sm font-medium text-gray-900">
          <span className="me-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-purple-500"></span>
          2.5 - 5y
        </span>
        <span className="me-3 flex items-center text-sm font-medium text-gray-900">
          <span className="me-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-500"></span>
          School Age
        </span>
      </div>
      <p className="text-sm">Tel: 604-123-456</p>
    </div>
  );
}

export default DaycareCard;
