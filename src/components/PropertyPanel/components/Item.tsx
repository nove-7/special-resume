import { useState } from "react";
import { Input } from "antd";

import {
  HolderOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
// const Item = ({ item, onChange, onDelete }) => {
const Item = ({ item }) => {
  const [open, setOpen] = useState(true);

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
              {item.companyName || "未填写公司"}
            </span>

            <span className="text-sm text-gray-500">
              {item.position || "未填写职位"}
            </span>
          </div>
        </div>

        {/* 右侧操作 */}
        <div
          className="flex items-center gap-3"
          // onClick={(e) => e.stopPropagation()}
        >
          {/* 显示 / 隐藏 */}
          {item.visible ? (
            <EyeOutlined className="text-gray-500" />
          ) : (
            <EyeInvisibleOutlined className="text-gray-400" />
          )}

          {/* 删除 */}
          <DeleteOutlined className="text-red-400 hover:text-red-600" />

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
            <div className="text-sm text-gray-500 mb-1">公司名称</div>
            <Input value={item.company} />
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-1">职位名称</div>
            <Input value={item.position} />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">开始时间</div>
              <Input value={item.startTime} />
            </div>

            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">结束时间</div>
              <Input value={item.endTime} />
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-1">工作内容</div>
            <Input.TextArea rows={4} value={item.description} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Item;
