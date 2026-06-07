import Section from "./Section";
import useStore from "@/store/index";
const ProjectSection = ({ data }) => {
  const titleFontSize = useStore((s) => s.layout.titleFontSize);
  const bodyFontSize = useStore((s) => s.layout.bodyFontSize);
  const subtitleCenter = useStore((s) => s.layout.subtitleCenter);
  return (
    <Section title={data.title}>
      {data.fields.map((p) => (
        <div key={p.id} className="mb-3">
          <div
            className="flex justify-between font-semibold"
            style={{ fontSize: titleFontSize }}
          >
            {/* <div>
              {p.projectName} · {p.role}
            </div> */}
            {subtitleCenter ? (
              <>
                <div>{p.projectName}</div>
                <div>{p.role}</div>
              </>
            ) : (
              <div>
                {p.projectName} · {p.role}
              </div>
            )}
            {p.startTime && p.endTime ? (
              <div className="text-[11px] text-gray-500">
                {p.startTime} - {p.endTime}
              </div>
            ) : null}
            {/* <div className="text-[11px] text-gray-500">
              {p.startTime} - {p.endTime}
            </div> */}
          </div>

          <div
            className="text-black text-[11px]"
            style={{ fontSize: titleFontSize }}
          >
            {p.website}
          </div>

          <div
            className="resume-content mt-1"
            style={{ fontSize: bodyFontSize }}
            dangerouslySetInnerHTML={{
              __html: p.content,
            }}
          />
        </div>
      ))}
    </Section>
  );
};
export default ProjectSection;
