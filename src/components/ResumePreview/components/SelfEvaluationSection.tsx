import Section from "./Section";
import useStore from "@/store/index";
const SelfEvaluation = ({ data }) => {
  const bodyFontSize = useStore((s) => s.layout.bodyFontSize);
  return (
    <Section title={data.title}>
      <div
        className="resume-content mt-1"
        dangerouslySetInnerHTML={{
          __html: data.fields?.[0]?.content || "",
        }}
        style={{ fontSize: bodyFontSize }}
      />
    </Section>
  );
};

export default SelfEvaluation;
