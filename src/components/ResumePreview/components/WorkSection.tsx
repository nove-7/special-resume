import Section from "./Section";
import useStore from "@/store/index";
const WorkSection = ({ data }) => {
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
            {/* <div>
              {item.companyName} · {item.position}
            </div> */}
            {subtitleCenter ? (
              <>
                <div>{item.companyName}</div>
                <div>{item.position}</div>
              </>
            ) : (
              <div>
                {item.companyName} · {item.position}
              </div>
            )}
            {item.startTime && item.endTime ? (
              <div className="text-[11px] text-gray-500">
                {item.startTime} - {item.endTime}
              </div>
            ) : null}
            {/* <div className="text-[11px] text-gray-500">{item.time}</div> */}
          </div>

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

export default WorkSection;
