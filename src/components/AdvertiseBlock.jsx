function AdvertiseBlock({
  className,
  svg = null,
  heading,
  subheading = "",
  content = "",
}) {
  return (
    <div className={className}>
      <div className="flex justify-around">
        {svg && <img src={svg} alt="svg" />}
        {heading}
      </div>
      <div>{subheading && subheading}</div>
      <article className="p-3 text-wrap">{content}</article>
    </div>
  );
}

export default AdvertiseBlock;
