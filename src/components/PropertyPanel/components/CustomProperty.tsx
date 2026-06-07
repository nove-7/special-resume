import { Input } from "antd";
import { useState } from "react";
import {
  HolderOutlined,
  DeleteOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import useStore from "@/store/index";
import Tiptap from "@/components/Tiptap";
const CustomProperty = ({ id }) => {
  const updateTitle = useStore((state) => state.updateTitle);
  const sections = useStore((state) => state.sections);
  const custom = sections.find((section) => section.id === id);
  const addField = useStore((state) => state.addField);
  const handleAddField = (typeId, value) => {
    addField(typeId, value);
  };
  return (
    <div className="p-4">
      {/* 大标题 */}
      <Input
        value={custom?.title}
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
        onChange={(e) => updateTitle(id, e.target.value)}
      />
      {/* 列表 */}
      {custom?.fields.map((item) => {
        return <Item item={item} key={item.id} id={id}></Item>;
      })}
      {/* 添加按钮 */}
      <div
        className="
          mt-3
          cursor-pointer
          rounded-lg
          border
          border-dashed
          border-orange-300
          p-3
          text-center
          text-sm
          text-orange-500
          hover:bg-orange-50
        "
        onClick={(e) => {
          e.stopPropagation();
          handleAddField(id, {
            title: "标题",
            subtitle: "副标题",
            startTime: "开始时间",
            endTime: "结束时间",
            content: "内容",
          });
        }}
      >
        + 添加
      </div>
    </div>
  );
};

// const Item = ({ item, onChange, onDelete }) => {
const Item = ({ item, id }) => {
  const [open, setOpen] = useState(true);
  const updateField = useStore((state) => state.updateField);
  const delField = useStore((state) => state.delField);
  const handleDelField = (typeId, fieldId) => {
    delField(typeId, fieldId);
  };
  return (
    <div
      className="
        mb-3
        rounded-xl
        border
        border-orange-200
        bg-white
        shadow-sm
        transition-all
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          px-4
          py-3
          bg-orange-50
          rounded-t-xl
        "
        onClick={() => setOpen(!open)}
      >
        {/* 左侧：拖拽 + 标题 */}
        <div className="flex items-center gap-3">
          {/* 拖拽手柄（最左） */}
          <HolderOutlined
            className="cursor-move text-gray-400"
            // onClick={(e) => e.stopPropagation()}
          />

          {/* 标题 */}
          <div className="flex flex-col">
            <span className="text-base font-semibold text-gray-800">
              {item.title || "标题"}
            </span>

            <span className="text-sm text-gray-500">
              {item.subtitle || "副标题"}
            </span>
          </div>
        </div>

        {/* 右侧操作 */}
        <div
          className="flex items-center gap-3"
          // onClick={(e) => e.stopPropagation()}
        >
          {/* 显示 / 隐藏 */}
          {/* {item.visible ? (
            <EyeOutlined className="text-gray-500" />
          ) : (
            <EyeInvisibleOutlined className="text-gray-400" />
          )} */}

          {/* 删除 */}
          {
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
                handleDelField(id, item.id);
              }}
            >
              <DeleteOutlined />
            </button>
          }

          {/* 展开 / 收起（最右） */}
          <div className="cursor-pointer text-gray-500">
            {open ? <UpOutlined /> : <DownOutlined />}
          </div>
        </div>
      </div>

      {/* Content */}
      {open && (
        <div className="p-4 space-y-3">
          <div>
            <div className="text-sm text-gray-500 mb-1">标题</div>
            <Input
              value={item.title}
              onChange={(e) =>
                updateField(id, item.id, "title", e.target.value)
              }
            />
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-1">副标题</div>
            <Input
              value={item.subtitle}
              onChange={(e) =>
                updateField(id, item.id, "subtitle", e.target.value)
              }
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">开始时间</div>
              <Input
                value={item.startTime}
                onChange={(e) =>
                  updateField(id, item.id, "startTime", e.target.value)
                }
              />
            </div>

            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">结束时间</div>
              <Input
                value={item.endTime}
                onChange={(e) =>
                  updateField(id, item.id, "endTime", e.target.value)
                }
              />
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-1">详细描述</div>
            <Tiptap
              value={item.content}
              onChange={(val) => updateField(id, item.id, "content", val)}
            ></Tiptap>
          </div>
        </div>
      )}
    </div>
  );
};
export default CustomProperty;
