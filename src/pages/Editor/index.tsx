import Header from "@/components/Header";
import SectionPanel from "@/components/SectionPanel";
import PropertyPanel from "@/components/PropertyPanel";
import ResumePreview from "@/components/ResumePreview";
import Toolbar from "@/components/Toorbar";
import { Splitter } from "antd";
import useStore from "@/store";
import { useRef } from "react";
const Editor = () => {
  const ui = useStore((state) => state.ui);
  const resumeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="h-screen flex flex-col">
      <Header resumeRef={resumeRef} />

      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <Splitter style={{ height: "100%" }}>
            {ui.showSectionPanel && (
              <Splitter.Panel defaultSize={280} min="10">
                <SectionPanel />
              </Splitter.Panel>
            )}
            {ui.showPropertyPanel && (
              <Splitter.Panel
                defaultSize={480}
                min="10"
                className="scrollbar-hide"
              >
                <PropertyPanel />
              </Splitter.Panel>
            )}

            {ui.showResumePanel && (
              <Splitter.Panel className="scrollbar-hide">
                <ResumePreview resumeRef={resumeRef} />
              </Splitter.Panel>
            )}
          </Splitter>
        </div>

        <Toolbar />
      </main>
    </div>
  );
};
export default Editor;
