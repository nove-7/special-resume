import {
  AppstoreOutlined,
  SettingOutlined,
  FileTextOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import useStore from "@/store";

const Toolbar = () => {
  const ui = useStore((s) => s.ui);
  const changeUIPanelVisibility = useStore((s) => s.changeUIPanelVisibility);
  const resetResume = useStore((s) => s.resetResume);
  const btnClass = (active) => `
    flex items-center justify-center
    w-10 h-10
    rounded-2xl
    transition
    ${active ? "bg-black text-white" : "text-gray-600 hover:text-black hover:bg-gray-200"}
  `;

  return (
    <div className="flex flex-col gap-3 p-2 bg-[#faf8f6]">
      {/* Section Panel */}
      <button
        title="切换侧边栏"
        className={btnClass(ui.showSectionPanel)}
        onClick={() => changeUIPanelVisibility("showSectionPanel")}
      >
        <AppstoreOutlined />
      </button>

      {/* Property Panel */}
      <button
        title="切换属性面板"
        className={btnClass(ui.showPropertyPanel)}
        onClick={() => changeUIPanelVisibility("showPropertyPanel")}
      >
        <SettingOutlined />
      </button>

      {/* Resume Panel */}
      <button
        title="切换简历面板"
        className={btnClass(ui.showResumePanel)}
        onClick={() => changeUIPanelVisibility("showResumePanel")}
      >
        <FileTextOutlined />
      </button>

      {/* Reset */}
      <button
        className="flex items-center justify-center
        w-10 h-10
        rounded-2xl
        transition
        text-gray-600 
        hover:text-black 
        hover:bg-gray-200
        "
        onClick={resetResume}
      >
        <ReloadOutlined />
      </button>
    </div>
  );
};

export default Toolbar;
