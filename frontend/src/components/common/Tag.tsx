function Tag({ color, children }) {
  const colorStyle = `border-${color} text-${color}`;
  return (
    <div className="flex items-center">
      <span
        className={`inline-block text-nowrap rounded border px-1 align-top text-xs font-medium italic ${colorStyle}`}
      >
        {children}
      </span>
    </div>
  );
}

export default Tag;
