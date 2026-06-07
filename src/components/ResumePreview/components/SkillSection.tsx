import Section from "./Section";
import useStore from "@/store/index";
const SkillSection = ({ data }) => {
  const bodyFontSize = useStore((s) => s.layout.bodyFontSize);
  return (
    <Section title={data.title}>
      <div
        // className="text-[12px] leading-6"
        className="resume-content mt-1"
        style={{ fontSize: bodyFontSize }}
        dangerouslySetInnerHTML={{
          __html: data.fields?.[0]?.content || "",
        }}
      />
    </Section>
  );
};

export default SkillSection;
