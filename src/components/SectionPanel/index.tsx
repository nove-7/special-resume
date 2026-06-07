import {
  ColorPicker,
  Switch,
  Select,
  Col,
  InputNumber,
  Row,
  Slider,
} from "antd";
import {
  DeleteOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  HolderOutlined,
} from "@ant-design/icons";
import useStore from "@/store/index";
// Helper wrapper: treat the zustand hook as any in this component to avoid TS 'unknown' errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStoreAny: any = useStore;
import { v4 as uuidv4 } from "uuid";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-gray-800">{title}</h3>
      {children}
    </section>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-1 text-xs font-medium text-gray-500">{children}</div>
  );
};

const SectionPanel = () => {
  const sections = useStoreAny((state) => state.sections);
  const addSection = useStoreAny((state) => state.addSection);
  const delSection = useStoreAny((state) => state.delSection);
  const toggleVisible = useStoreAny((state) => state.toggleVisible);
  const moveSection = useStoreAny((state) => state.moveSection);
  // 主题色和自定义颜色
  const themeColor = useStoreAny((state) => state.layout.themeColor);
  const customColor = useStoreAny((state) => state.layout.customColor);
  const toggleThemeColor = useStoreAny((state) => state.toggleThemeColor);
  const toggleCustomColor = useStoreAny((state) => state.toggleCustomColor);
  // 修改字体fontfamily
  const toggleFontFamily = useStoreAny((state) => state.toggleFontFamily);
  // 行高
  const lineHeight = useStoreAny((state) => state.layout.lineHeight);
  const changeLineHeight = useStoreAny((state) => state.changeLineHeight);
  // 字号
  const bodyFontSize = useStoreAny((state) => state.layout.bodyFontSize);
  const sectionFontSize = useStoreAny((state) => state.layout.sectionFontSize);
  const titleFontSize = useStoreAny((state) => state.layout.titleFontSize);
  const changeFontSize = useStoreAny((state) => state.changeFontSize);
  // 间距
  const margin = useStoreAny((state) => state.layout.margin);
  const sectionMargin = useStoreAny((state) => state.layout.sectionMargin);
  const paragraphMargin = useStoreAny((state) => state.layout.paragraphMargin);
  const changeMargin = useStoreAny((state) => state.changeMargin);
  // switch
  const subtitleCenter = useStoreAny((state) => state.layout.subtitleCenter);
  // const longTitle = useStore((state) => state.layout.longTitle);
  const changeSwitch = useStoreAny((state) => state.changeSwitch);
  // 激活状态的id
  const activeSectionId = useStoreAny((state) => state.activeSectionId);
  const changeActiveSectionId = useStoreAny(
    (state) => state.changeActiveSectionId,
  );
  // ============布局板块===================
  // 增加模块
  const handleAddSection = () => {
    addSection({
      id: uuidv4(),
      title: "主标题1",
      subtitle: "副标题1",
      startTime: "开始时间",
      endTime: "结束时间",
      draggable: true,
      content: "富文本内容1",
    });
  };
  // 删除自定义模块
  const handleDelSection = (id) => {
    delSection(id);
  };
  // 切换模块的显示和隐藏
  const handleToggleVisible = (id) => {
    toggleVisible(id);
  };

  // 字体切换
  const handleToggleFont = (value) => {
    toggleFontFamily(value);
  };
  // 行高sliderChange
  const handleSliderChange = (value) => {
    changeLineHeight(value as number);
  };
  // 三个字号切换
  const handleToggleFontSize = (type, value) => {
    // console.log(type + value);
    changeFontSize(type, value);
  };
  // 三个边距切换
  const handleToggleMargin = (type, value) => {
    if (typeof value !== "number") return;
    changeMargin(type, value);
  };
  // 模式切换
  const handleSwitch = () => {
    changeSwitch();
  };

  return (
    <div className="h-full overflow-y-auto bg-[#faf8f6] scrollbar-hide">
      <div className="space-y-5 p-5">
        {/* <button onClick={test}>测试按钮</button> */}
        {/* 布局 */}
        <Card title="布局">
          <div className="space-y-2">
            <DndContext
              collisionDetection={closestCenter}
              onDragStart={({ active }) => {
                changeActiveSectionId(active.id);
              }}
              onDragEnd={({ active, over }) => {
                // 拖拽结束后将 activeSectionId 设为刚才被拖拽的模块 id，保持 property panel 显示该模块
                changeActiveSectionId(active.id);

                if (!over) return;
                if (active.id === over.id) return;

                moveSection(active.id, over.id);
              }}
            >
              <SortableContext
                items={sections.map((i) => i.id)}
                strategy={verticalListSortingStrategy}
              >
                {sections.map((item) => (
                  <SortableItem key={item.id} item={item}>
                    {({ listeners }) => (
                      <div
                        onClick={() => changeActiveSectionId(item.id)}
                        className={`
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        border border-orange-100
                        bg-orange-50
                        px-3 py-2
                        text-sm
                        text-gray-700
                        transition-all
                        hover:border-gray-400
                        cursor-pointer
                        ${
                          activeSectionId === item.id
                            ? "border-orange-500 bg-orange-100"
                            : ""
                        }
                      `}
                      >
                        {/* 左侧：拖拽手柄（只拖这里） */}
                        <span className="flex items-center gap-1">
                          <HolderOutlined
                            {...listeners}
                            className="cursor-move text-gray-400"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="text-gray-700">{item.title}</span>
                        </span>

                        {/* 右侧操作区 */}
                        <div className="flex items-center gap-1">
                          {/* 删除 */}
                          {item.type === "custom" && (
                            <button
                              className="
                                flex h-7 w-7 items-center justify-center
                                rounded-md text-gray-500
                                hover:bg-red-50 hover:text-red-500
                              "
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelSection(item.id);
                              }}
                            >
                              <DeleteOutlined />
                            </button>
                          )}

                          {/* 显示/隐藏 */}
                          {item.visible ? (
                            <button
                              className="
                                flex h-7 w-7 items-center justify-center
                                rounded-md text-gray-500
                                hover:bg-white hover:text-orange-500
                              "
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleVisible(item.id);
                              }}
                            >
                              <EyeOutlined />
                            </button>
                          ) : (
                            <button
                              className="
                                flex h-7 w-7 items-center justify-center
                                rounded-md text-gray-500
                                hover:bg-white hover:text-orange-500
                              "
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleVisible(item.id);
                              }}
                            >
                              <EyeInvisibleOutlined />
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </SortableItem>
                ))}
              </SortableContext>
            </DndContext>
            {/* {sections.map((item) => (
              <div
                key={item.id}
                className={`
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border border-orange-100
                  bg-orange-50
                  px-3 py-2
                  text-sm
                  text-gray-700
                  transition-all
                  hover:border-gray-400
                  ${activeSectionId === item.id ? "border-orange-500 bg-orange-100" : ""}
                  `}
                onClick={() => changeActiveSectionId(item.id)}
              >
                <span>
                  <HolderOutlined
                    className="cursor-move text-gray-400"
                    onClick={(e) => e.stopPropagation()}
                  />
                  {item.title}
                </span>

                <div className="flex items-center gap-1">
                  删除按钮icon
                  {item.type === "custom" && (
                    <button
                      className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-md
                    text-gray-500
                    transition-colors
                    hover:bg-red-50
                    hover:text-red-500
                  "
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelSection(item.id);
                      }}
                    >
                      <DeleteOutlined />
                    </button>
                  )}
                  显示隐藏那个眼睛icon
                  {item.visible ? (
                    <button
                      className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-md
                      text-gray-500
                      transition-colors
                      hover:bg-white
                      hover:text-orange-500
                    "
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleVisible(item.id);
                      }}
                    >
                      <EyeOutlined />
                    </button>
                  ) : (
                    <button
                      className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-md
                      text-gray-500
                      transition-colors
                      hover:bg-white
                      hover:text-orange-500
                    "
                      style={{
                        opacity: 0.5,
                      }}
                      onClick={() => handleToggleVisible(item.id)}
                    >
                      <EyeInvisibleOutlined />
                    </button>
                  )}
                </div>
              </div>
            ))} */}
            <button
              className="
                w-full
                cursor-pointer
                rounded-lg
                border border-dashed border-orange-200
                bg-white
                px-3 py-2
                text-sm
                text-orange-500
                transition-all
                hover:border-orange-400
                hover:bg-orange-50
              "
              onClick={handleAddSection}
            >
              + 添加模块
            </button>
          </div>
        </Card>

        {/* 主题色 */}
        <Card title="主题色">
          <div className="flex flex-wrap gap-3">
            {[
              "#000000",
              "#1A1A1A",
              "#333333",
              "#4D4D4D",
              "#666666",
              "#808080",
              "#0047AB",
              "#8B0000",
              "#FF4500",
              "#4B0082",
              "#2E8B57",
            ].map((color) => (
              <button
                key={color}
                onClick={() => toggleThemeColor(color)}
                className={`
                  h-8
                  w-8
                  rounded-full
                  shadow-sm
                  transition-all
                  hover:scale-110
                  ${
                    themeColor === color
                      ? "ring-2 ring-orange-400 ring-offset-2"
                      : "border border-gray-200"
                  }
                `}
                style={{
                  backgroundColor: color,
                }}
              />
            ))}

            <ColorPicker
              value={customColor}
              onChange={(color) => {
                const hex = color.toHexString();

                toggleCustomColor(hex);
                toggleThemeColor(hex);
              }}
            >
              <button
                className={`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-xs
                  text-white
                  transition-all
                  hover:scale-110
                  ${
                    themeColor === customColor
                      ? "ring-2 ring-orange-400 ring-offset-2"
                      : "border border-gray-200"
                  }
                `}
                style={{
                  backgroundColor: customColor,
                }}
              >
                +
              </button>
            </ColorPicker>
          </div>
        </Card>

        {/* 排版 */}
        <Card title="排版">
          <div className="space-y-4">
            {/* 字体 */}
            <div>
              <Label>字体</Label>

              <Select
                className="w-full"
                defaultValue="Noto Sans SC"
                options={[
                  { value: "Noto Sans SC", label: "Noto Sans SC" },
                  { value: "PingFang SC", label: "PingFang SC" },
                  { value: "Microsoft YaHei", label: "微软雅黑" },
                  { value: "sans-serif", label: "sans-serif" },
                  { value: "SimSun", label: "宋体" },
                ]}
                onChange={handleToggleFont}
              />
            </div>
            {/* 行高 */}
            <div>
              <Label>行高</Label>

              <Row gutter={12} align="middle">
                <Col flex="auto">
                  <Slider
                    min={1}
                    max={2}
                    step={0.1}
                    onChange={handleSliderChange}
                    value={typeof lineHeight === "number" ? lineHeight : 0}
                  />
                </Col>

                <Col>
                  <InputNumber
                    min={1}
                    max={2}
                    step={0.1}
                    onChange={handleSliderChange}
                    value={typeof lineHeight === "number" ? lineHeight : 0}
                    style={{ width: 60 }}
                  />
                </Col>
              </Row>
            </div>
            {/* 内容字号 */}
            <div>
              <Label>内容字号</Label>

              <Select
                className="w-full"
                defaultValue={bodyFontSize}
                options={[
                  { value: 12, label: "12px" },
                  { value: 13, label: "13px" },
                  { value: 14, label: "14px" },
                  { value: 15, label: "15px" },
                  { value: 16, label: "16px" },
                  { value: 18, label: "18px" },
                  { value: 20, label: "20px" },
                  { value: 24, label: "24px" },
                ]}
                onChange={(value) =>
                  handleToggleFontSize("bodyFontSize", value)
                }
              />
            </div>
            {/* 模块标题标题字号 */}
            <div>
              <Label>模块标题字号</Label>

              <Select
                className="w-full"
                defaultValue={sectionFontSize}
                options={[
                  { value: 12, label: "12px" },
                  { value: 13, label: "13px" },
                  { value: 14, label: "14px" },
                  { value: 15, label: "15px" },
                  { value: 16, label: "16px" },
                  { value: 18, label: "18px" },
                  { value: 20, label: "20px" },
                  { value: 24, label: "24px" },
                ]}
                onChange={(value) =>
                  handleToggleFontSize("sectionFontSize", value)
                }
              />
            </div>
            {/* 模块项一级标题字号 */}
            <div>
              <Label>模块项一级标题字号</Label>

              <Select
                className="w-full"
                defaultValue={titleFontSize}
                options={[
                  { value: 12, label: "12px" },
                  { value: 13, label: "13px" },
                  { value: 14, label: "14px" },
                  { value: 15, label: "15px" },
                  { value: 16, label: "16px" },
                  { value: 18, label: "18px" },
                  { value: 20, label: "20px" },
                  { value: 24, label: "24px" },
                ]}
                onChange={(value) =>
                  handleToggleFontSize("titleFontSize", value)
                }
              />
            </div>
          </div>
        </Card>

        {/* 间距 */}
        <Card title="间距">
          <div className="space-y-4">
            {/* 页边距 */}
            <div>
              <Label>页边距</Label>

              <Row gutter={12} align="middle">
                <Col flex="auto">
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={typeof margin === "number" ? margin : 0}
                    onChange={(value) => handleToggleMargin("margin", value)}
                  />
                </Col>

                <Col>
                  <InputNumber
                    min={0}
                    max={100}
                    step={1}
                    style={{ width: 60 }}
                    value={typeof margin === "number" ? margin : 0}
                    onChange={(value) => handleToggleMargin("margin", value)}
                  />
                </Col>
              </Row>
            </div>
            {/* 模块间距 */}
            <div>
              <Label>模块间距</Label>

              <Row gutter={12} align="middle">
                <Col flex="auto">
                  <Slider
                    min={1}
                    max={100}
                    step={1}
                    value={
                      typeof sectionMargin === "number" ? sectionMargin : 0
                    }
                    onChange={(value) =>
                      handleToggleMargin("sectionMargin", value)
                    }
                  />
                </Col>

                <Col>
                  <InputNumber
                    min={0}
                    max={100}
                    step={1}
                    style={{ width: 60 }}
                    value={
                      typeof sectionMargin === "number" ? sectionMargin : 0
                    }
                    onChange={(value) =>
                      handleToggleMargin("sectionMargin", value)
                    }
                  />
                </Col>
              </Row>
            </div>
            {/* 段落间距 */}
            <div>
              <Label>段落间距</Label>

              <Row gutter={12} align="middle">
                <Col flex="auto">
                  <Slider
                    min={1}
                    max={50}
                    step={1}
                    value={
                      typeof paragraphMargin === "number" ? paragraphMargin : 0
                    }
                    onChange={(value) =>
                      handleToggleMargin("paragraphMargin", value)
                    }
                  />
                </Col>

                <Col>
                  <InputNumber
                    min={0}
                    max={50}
                    step={1}
                    style={{ width: 60 }}
                    value={
                      typeof paragraphMargin === "number" ? paragraphMargin : 0
                    }
                    onChange={(value) =>
                      handleToggleMargin("paragraphMargin", value)
                    }
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Card>

        {/* 模式 */}
        <Card title="模式">
          <div className="space-y-3">
            <div
              className="
              flex
              items-center
              justify-between
              rounded-lg
              border
              border-orange-100
              bg-orange-50/50
              px-3
              py-2
            "
            >
              <span className="text-sm text-gray-700">副标题居中</span>

              <Switch
                checked={subtitleCenter}
                // disabled={longTitle}
                onChange={handleSwitch}
              />
            </div>

            <div
              className="
              flex
              items-center
              justify-between
              rounded-lg
              border
              border-orange-100
              bg-orange-50/50
              px-3
              py-2
            "
            >
              <span className="text-sm text-gray-700">长标题模式</span>

              <Switch
                checked={!subtitleCenter}
                // disabled={subtitleCenter}
                onChange={handleSwitch}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

import React from "react";

const SortableItem = ({ item, children }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 999 : undefined,
      }}
    >
      <div
        style={{
          backgroundColor: isDragging ? "#fff" : undefined,
          boxShadow: isDragging ? "0 12px 30px rgba(0,0,0,0.15)" : undefined,
          borderRadius: 12,
        }}
      >
        {children({ listeners })}
      </div>
    </div>
  );
};

export default SectionPanel;
