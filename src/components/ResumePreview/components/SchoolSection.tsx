import Section from "./Section";
import useStore from "@/store/index";
const SchoolSection = ({ data }) => {
  const titleFontSize = useStore((s) => s.layout.titleFontSize);
  const bodyFontSize = useStore((s) => s.layout.bodyFontSize);
  const subtitleCenter = useStore((s) => s.layout.subtitleCenter);
  return (
    <Section title={data.title}>
      {data.fields.map((s) => (
        <div key={s.id} className="mb-3">
          <div
            className="flex justify-between font-semibold"
            style={{ fontSize: titleFontSize }}
          >
            {/* <div>
              {s.schoolName} · {s.major}
            </div> */}
            {subtitleCenter ? (
              <>
                <div>{s.schoolName}</div>
                <div>{s.major}</div>
              </>
            ) : (
              <div>
                {s.schoolName} · {s.major}
              </div>
            )}
            {s.startTime && s.endTime ? (
              <div className="text-[11px] text-gray-500">
                {s.startTime} - {s.endTime}
              </div>
            ) : null}
          </div>

          <div
            className="resume-content mt-1"
            style={{ fontSize: bodyFontSize }}
            dangerouslySetInnerHTML={{
              __html: s.content,
            }}
          />
        </div>
      ))}
    </Section>
  );
};

export default SchoolSection;
