import Tag from "./Tag";

function SiteLogo() {
  return (
    <div className="flex">
      <a
        href="https://github.com/ikulan/BC-Daycares-Info"
        className="mx-2 flex items-center justify-between"
        target="_blank"
        rel="noreferrer"
      >
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-600">
          BC-Daycares.info
        </span>
      </a>
      <Tag color="indigo-800">Beta</Tag>
    </div>
  );
}

export default SiteLogo;
