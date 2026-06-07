import Tiptap from "@/components/Tiptap";
import { Input } from "antd";
import useStore from "@/store/index";
const SkillProperty = () => {
  const skill = useStore((state) =>
    state.sections.find((section) => section.id === "skill_1"),
  );
  const updateField = useStore((state) => state.updateField);
  const updateTitle = useStore((state) => state.updateTitle);
  return (
    <div className="p-4">
      <Input
        value={skill.title}
        variant="borderless"
        style={{
          fontSize: "24px",
          fontWeight: 700,
        }}
        className="
        mb-4
        rounded-xl
        border
        border-orange-200
        bg-orange-50
        px-4
        py-3
        shadow-sm
      "
        onChange={(e) => updateTitle("skill_1", e.target.value)}
      />
      <Tiptap
        value={skill.fields[0].content}
        onChange={(val) =>
          updateField("skill_1", skill.fields[0].id, "content", val)
        }
      ></Tiptap>
    </div>
  );
};

export default SkillProperty;
