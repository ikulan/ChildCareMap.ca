function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-center justify-between gap-4 p-4">
        <div className="text-sm text-stone-700 sm:text-center md:text-base">
          Data Last Updated: {import.meta.env.VITE_DATA_DATE}
        </div>
        <div>
          <span className="text-sm text-stone-700 sm:text-center md:text-base">
            <a
              href="https://ikulan.github.io/"
              className="hover:underline"
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
