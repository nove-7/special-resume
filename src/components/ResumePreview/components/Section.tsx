import useStore from "@/store/index";
const SectionTitle = ({ title }) => {
  const themeColor = useStore((s) => s.layout.themeColor);
  const customerColor = useStore((s) => s.layout.customerColor);
  const sectionFontSize = useStore((s) => s.layout.sectionFontSize);

  const activeColor = themeColor === customerColor ? customerColor : themeColor;
  return (
    <div className="mb-3">
      <div className="flex items-center">
        {/* 黑块 */}
        {/* <button onClick={test}>ceshi</button> */}
        {/* <div className="w-1 h-4 bg-black mr-2" /> */}

        <div
          className={`text-[13px] font-bold`}
          style={{ color: activeColor, fontSize: sectionFontSize }}
        >
          {title}
        </div>
      </div>
      {/* 黑线 */}
      <div className={`mt-1 border-b`} style={{ borderColor: activeColor }} />
    </div>
  );
};
const Section = ({ title, children }) => {
  const sectionMargin = useStore((s) => s.layout.sectionMargin);
  const paragraphMargin = useStore((s) => s.layout.paragraphMargin);
  return (
    // <div className="mb-5">
    <div style={{ marginTop: sectionMargin }}>
      <SectionTitle title={title} />
      <div
        className="pl-3"
        style={{
          marginBottom: paragraphMargin,
          marginTop: paragraphMargin,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Section;
