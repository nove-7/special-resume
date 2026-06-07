import useStore from "@/store/index";
import Section from "./Section";
const CustomSection = ({ data }) => {
  const titleFontSize = useStore((s) => s.layout.titleFontSize);
  const bodyFontSize = useStore((s) => s.layout.bodyFontSize);
  const subtitleCenter = useStore((s) => s.layout.subtitleCenter);
  return (
    <Section title={data.title}>
      {data.fields.map((item) => (
        <div key={item.id} className="mb-3">
          <div
            className="flex justify-between font-semibold"
            style={{ fontSize: titleFontSize }}
          >
            {subtitleCenter ? (
              <>
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
              </>
            ) : (
              <div>
                {item.title} · {item.subtitle}
              </div>
            )}

            {item.startTime && item.endTime ? (
              <div className="text-[11px] text-gray-500">
                {item.startTime} - {item.endTime}
              </div>
            ) : null}
          </div>

          {/* <div className="mt-1 text-[12px]" style={{ fontSize: bodyFontSize }}>
            {item.content}
          </div> */}
          <div
            className="resume-content mt-1"
            style={{ fontSize: bodyFontSize }}
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          />
        </div>
      ))}
    </Section>
  );
};

export default CustomSection;
