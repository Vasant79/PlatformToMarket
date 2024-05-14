function AdvertiseBlock({
  className,
  svg = null,
  svgCss = null,
  heading,
  headingCss = "",
  subheading = "",
  subHeadingCss = "",
  content = "",
  contentCss = "",
}) {
  return (
    <div className={className}>
      {svg && <img className={svgCss} src={svg} alt="svg" />}
      <span className={headingCss}>{heading}</span>
      <span className={subHeadingCss}>{subheading && subheading}</span>
      <article className={contentCss}>{content}</article>
    </div>
  );
}

export default AdvertiseBlock;
