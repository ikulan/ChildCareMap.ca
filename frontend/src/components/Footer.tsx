function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-center justify-between gap-4 p-4 text-sm text-gray-600 md:text-base">
        <div className="sm:text-center">
          Last Updated: {import.meta.env.VITE_DATA_DATE} (
          {import.meta.env.VITE_APP_VERSION})
        </div>
        <div>
          <span>
            &copy; 2024
            <a
              href="https://ikulan.github.io/"
              className="px-2 hover:text-indigo-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              ikulan
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
