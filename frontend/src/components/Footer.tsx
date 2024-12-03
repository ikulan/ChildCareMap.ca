function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-center justify-center gap-4 px-12 py-4">
        <div>
          <span className="text-sm text-stone-700 sm:text-center md:text-base">
            <a
              href="https://github.com/ikulan/BC-Daycares-Info"
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
