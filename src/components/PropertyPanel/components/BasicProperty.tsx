import { Upload, Input, message } from "antd";
import { useState } from "react";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import useStore from "@/store";
import avatar from "@/assets/avatar.jpg";
const FieldCard = ({ field, children }) => {
  const toggleBasicFieldVisible = useStore((s) => s.toggleBasicFieldVisible);
  const delBasicField = useStore((s) => s.delBasicField);
  if (!field) return null;
  const handleDelField = (id) => {
    delBasicField(id);
  };

  const handleToggleVisible = (id) => {
    // console.log(id);

    toggleBasicFieldVisible(id);
  };
  return (
    <div
      className="
        mb-3
        rounded-lg
        border
        border-orange-100
        bg-white
        p-4
        shadow-sm
        transition-all
        hover:bg-orange-50
      "
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-medium text-gray-700">{field.label}</span>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {/* 删除按钮icon */}
            {field.type === "add" && (
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
                onClick={() => handleDelField(field.id)}
              >
                <DeleteOutlined />
              </button>
            )}
            {/* 显示隐藏那个眼睛icon */}
            {/* {item.visible ? ( */}
            {field.visible ? (
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
                onClick={() => handleToggleVisible(field.id)}
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
                onClick={() => handleToggleVisible(field.id)}
              >
                <EyeInvisibleOutlined />
              </button>
            )}
          </div>
        </div>
      </div>
      {field.visible && children}
    </div>
  );
};

const BasicProperty = () => {
  const [loading, setLoading] = useState(false);
  const sections = useStore((state) => state.sections);
  const basic = sections.find((section) => section.id === "basic_1");
  const updateField = useStore((state) => state.updateField);
  const addBasicField = useStore((state) => state.addBasicField);
  const photoField = basic.fields.find((field) => field.id === "photo");

  const avatarUrl = photoField?.value || avatar;
  // 上传图片处理
  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("只能上传 JPG/PNG 图片");
    }

    const isLt4M = file.size / 1024 / 1024 < 4;

    if (!isLt4M) {
      message.error("图片大小不能超过 4MB");
    }

    return isJpgOrPng && isLt4M;
  };

  const getBase64 = (img: File, callback: (url: string) => void) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      callback(reader.result as string);
    });

    reader.readAsDataURL(img);
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);

        updateAvatar(url);
      });
    }
  };

  // 更新store里的头像
  const updateAvatar = (imageUrl) => {
    updateField("basic_1", "photo", "value", imageUrl);
  };
  return (
    <div className="p-4">
      <Input
        value="基本信息"
        readOnly
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
      />
      {/* 头像 */}
      <FieldCard field={basic.fields.find((field) => field.id === "photo")}>
        <Upload
          name="avatar"
          listType="picture-card"
          showUploadList={false}
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {loading ? (
            <LoadingOutlined />
          ) : (
            <img
              src={avatarUrl}
              alt="avatar"
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </Upload>
      </FieldCard>

      {/* 姓名 */}
      <FieldCard field={basic.fields.find((field) => field.id === "name")}>
        <Input
          placeholder="请输入姓名"
          value={basic.fields.find((field) => field.id === "name").value}
          onChange={(e) =>
            updateField("basic_1", "name", "value", e.target.value)
          }
        />
      </FieldCard>
      {/* 意向职位 */}
      <FieldCard field={basic.fields.find((field) => field.id === "position")}>
        <Input
          placeholder="请输入意向职位"
          value={basic.fields.find((field) => field.id === "position").value}
          onChange={(e) =>
            updateField("basic_1", "position", "value", e.target.value)
          }
        />
      </FieldCard>
      {/* 剩余的字段进行遍历 */}
      {basic.fields.map((field) => {
        if (
          field.id === "name" ||
          field.id === "position" ||
          field.id === "photo"
        ) {
          return;
        } else {
          return (
            <FieldCard key={field.id} field={field}>
              <Input
                placeholder={`请输入${field.label}`}
                value={basic.fields.find((item) => item.id === field.id).value}
                onChange={(e) =>
                  updateField("basic_1", field.id, "value", e.target.value)
                }
              />
            </FieldCard>
          );
        }
      })}
      {/* 添加自定义字段 */}
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
        onClick={() => addBasicField("")}
      >
        + 添加自定义字段
      </button>
    </div>
  );
};

export default BasicProperty;
