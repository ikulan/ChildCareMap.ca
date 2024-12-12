function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-center justify-between gap-4 p-4 text-sm text-gray-600 md:text-base">
        <div className="sm:text-center">
          Data Last Updated: {import.meta.env.VITE_DATA_DATE}
        </div>
        <div>
          <span>
            <a
              href="https://ikulan.github.io/"
              className="hover:text-indigo-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              ikulan
            </a>{" "}
            &copy; 2024
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
