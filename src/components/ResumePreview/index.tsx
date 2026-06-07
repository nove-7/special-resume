import useStore from "@/store";
import BasicSection from "./components/BasicSection";
import SkillSection from "./components/SkillSection";
import WorkSection from "./components/WorkSection";
import ProjectSection from "./components/ProjectSection";
import SchoolSection from "./components/SchoolSection";
import SelfEvaluation from "./components/SelfEvaluationSection";
import CustomSection from "./components/CustomSection";

export default function ResumePreview({ resumeRef }) {
  const sections = useStore((s) => s.sections);
  const fontFamily = useStore((s) => s.layout.fontFamily);
  const pageMargin = useStore((state) => state.layout.margin);
  // const sectionMargin = useStore((state) => state.layout.sectionMargin);
  const lineHeight = useStore((state) => state.layout.lineHeight);
  // const paragraphMargin = useStore((state) => state.layout.paragraphMargin);
  // 1️ 按 order 排序（核心）
  const sortedSections = [...sections]
    .filter((s) => s.visible)
    .sort((a, b) => a.order - b.order);

  // 2️ 渲染分发
  const renderSection = (section) => {
    switch (section.type) {
      case "basic":
        return <BasicSection key={section.id} data={section} />;
      case "skill":
        return <SkillSection key={section.id} data={section} />;
      case "work":
        return <WorkSection key={section.id} data={section} />;
      case "project":
        return <ProjectSection key={section.id} data={section} />;
      case "school":
        return <SchoolSection key={section.id} data={section} />;
      case "selfEvaluation":
        return <SelfEvaluation key={section.id} data={section} />;
      case "custom":
        return <CustomSection key={section.id} data={section} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="w-full overflow-auto bg-gray-200 flex justify-center py-10"
      style={{ fontFamily }}
    >
      {/* A4 纸 */}
      <div
        className="relative bg-white shadow-lg"
        style={{
          width: "210mm",
          minHeight: "1123px",
          flexShrink: 0,
        }}
        ref={resumeRef}
      >
        {/* 内容 */}
        {/* <div className="px-10 py-8 text-[12px] text-gray-800 leading-6"> */}
        <div
          className="px-10 py-8 text-[12px] text-gray-800 leading-6"
          style={{
            padding: pageMargin,
            lineHeight: lineHeight,
          }}
        >
          {sortedSections.map(renderSection)}
        </div>
        {/* 红色虚线 */}
        {/* <A4Guides /> */}
      </div>
    </div>
  );
}

// 红色虚线
const A4_HEIGHT = 1123; // px（A4 @96dpi）

function A4Guides() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${i * A4_HEIGHT}px`,
            left: 0,
            right: 0,
          }}
          className="border-t border-dashed border-red-500 opacity-50"
        />
      ))}
    </div>
  );
}
