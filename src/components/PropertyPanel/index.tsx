import BasicProperty from "./components/BasicProperty";
import SkillProperty from "./components/SkillProperty";
import WorkProperty from "./components/WorkProperty";
import ProjectProperty from "./components/ProjectProperty";
import SchoolProperty from "./components/SchoolProperty";
import SelfEvaluationProperty from "@/components/PropertyPanel/components/SelfEvaluationProperty";
import CustomProperty from "./components/CustomProperty";
import useStore from "@/store/index";
const renderProperty = (id) => {
  const fixed = {
    basic_1: <BasicProperty />,
    skill_1: <SkillProperty />,
    work_1: <WorkProperty />,
    project_1: <ProjectProperty />,
    school_1: <SchoolProperty />,
    selfEvaluation_1: <SelfEvaluationProperty />,
  };

  if (fixed[id]) return fixed[id];

  return <CustomProperty id={id} />;
};
export default function Page() {
  const activeSectionId = useStore((state) => state.activeSectionId);
  return (
    <div className="scrollbar-hide">
      {/* 条件渲染 */}
      {renderProperty(activeSectionId)}
      {/* <CustomProperty id={"custom"}></CustomProperty> */}
      {/* <div style={{ margin: 20 }}>分隔</div>
      <Tiptap value={content} onChange={(val) => setContent(val)} />

      这里就是你“拿到的数据”
      <div className="mt-4">
        <h3>预览：</h3>
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div> */}
    </div>
  );
}
