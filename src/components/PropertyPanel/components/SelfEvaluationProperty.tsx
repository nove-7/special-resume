import { Input } from "antd";
import Tiptap from "@/components/Tiptap";
import useStore from "@/store/index";
const SelfEvaluationProperty = () => {
  const sections = useStore((state) => state.sections);
  const self = sections.find((section) => section.id === "selfEvaluation_1");
  const updateField = useStore((state) => state.updateField);
  const updateTitle = useStore((state) => state.updateTitle);
  return (
    <div className="p-4">
      <Input
        value={self.title}
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
        onChange={(e) => updateTitle("selfEvaluation_1", e.target.value)}
      />
      <Tiptap
        value={self.fields[0].content}
        onChange={(val) =>
          updateField("selfEvaluation_1", self.fields[0].id, "content", val)
        }
      />
    </div>
  );
};

// const Item = ({ item, onChange, onDelete }) => {

export default SelfEvaluationProperty;
