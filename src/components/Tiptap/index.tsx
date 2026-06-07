import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  BarsOutlined,
  OrderedListOutlined,
  MenuOutlined,
} from "@ant-design/icons";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const colors = [
  "#000000",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
];
const highlightColors = ["#fff59d", "#fde047", "#fca5a5", "#a7f3d0", "#93c5fd"];

export default function TiptapEditor({ value, onChange }: Props) {
  // const editor = useEditor({
  //   extensions: [
  //     StarterKit.configure({
  //       bulletList: { keepMarks: true },
  //       orderedList: { keepMarks: true },
  //     }),
  //     TextStyle,
  //     Color,
  //     Highlight.configure({ multicolor: true }),
  //     Underline,
  //     TextAlign.configure({
  //       types: ["paragraph"],
  //       alignments: ["left", "center", "right", "justify"],
  //     }),
  //     Placeholder.configure({
  //       placeholder: "请输入内容...",
  //     }),
  //   ],
  //   content: value || "",
  //   onUpdate: ({ editor }) => {
  //     onChange(editor.getHTML());
  //   },
  // });
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
      }),
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      Underline,
      TextAlign.configure({
        types: ["paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
      Placeholder.configure({
        placeholder: "请输入内容...",
      }),
    ],
    content: value || "",
  });

  /**
   * ✅ 编辑器内容变化 → 回写外部 store
   */
  useEffect(() => {
    if (!editor) return;

    const handler = () => {
      onChange(editor.getHTML());
    };

    editor.on("update", handler);

    return () => {
      editor.off("update", handler);
    };
  }, [editor, onChange]);

  /**
   * ✅ 外部 value 变化 → 同步回 editor
   * ✔ 修复 TS：不能传 false，要用 emitUpdate
   */
  useEffect(() => {
    if (!editor) return;

    const current = editor.getHTML();

    if (value !== current) {
      editor.commands.setContent(value || "", {
        emitUpdate: false,
      });
    }
  }, [value, editor]);

  return (
    <section className="rounded-xl border border-orange-100 bg-white shadow-sm p-4">
      <div className="rounded-lg border border-orange-100 overflow-hidden flex flex-col">
        {/* ================= 工具栏 ================= */}
        <div className="flex flex-wrap items-center gap-2 px-3 py-2 bg-orange-50/40 border-b border-orange-100">
          {/* 加粗 */}
          <IconBtn
            title="加粗"
            active={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <BoldOutlined />
          </IconBtn>

          {/* 斜体 */}
          <IconBtn
            title="斜体"
            active={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <ItalicOutlined />
          </IconBtn>

          {/* 下划线 */}
          <IconBtn
            title="下划线"
            active={editor.isActive("underline")}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <UnderlineOutlined />
          </IconBtn>

          <div className="w-px h-5 bg-orange-100 mx-1" />

          {/* 字体颜色 */}
          <div className="flex items-center gap-1">
            {colors.map((c) => (
              <div
                key={c}
                title="字体颜色"
                onClick={() => editor.chain().focus().setColor(c).run()}
                className="w-4 h-4 rounded-full cursor-pointer border border-gray-200 hover:scale-110 transition"
                style={{ backgroundColor: c }}
              />
            ))}
            <input
              type="color"
              title="自定义颜色"
              onChange={(e) =>
                editor.chain().focus().setColor(e.target.value).run()
              }
              className="w-6 h-6 p-0 border-none bg-transparent cursor-pointer"
            />
          </div>

          <div className="w-px h-5 bg-orange-100 mx-1" />

          {/* 高亮 */}
          <div className="flex items-center gap-1">
            {highlightColors.map((c) => (
              <div
                key={c}
                title="高亮"
                onClick={() =>
                  editor.chain().focus().toggleHighlight({ color: c }).run()
                }
                className="w-4 h-4 rounded-sm cursor-pointer border border-gray-200 hover:scale-110 transition"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <div className="w-px h-5 bg-orange-100 mx-1" />

          {/* 对齐 */}
          <IconBtn
            title="左对齐"
            active={editor.isActive({ textAlign: "left" })}
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
          >
            <AlignLeftOutlined />
          </IconBtn>

          <IconBtn
            title="居中"
            active={editor.isActive({ textAlign: "center" })}
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
          >
            <AlignCenterOutlined />
          </IconBtn>

          <IconBtn
            title="右对齐"
            active={editor.isActive({ textAlign: "right" })}
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
          >
            <AlignRightOutlined />
          </IconBtn>

          <IconBtn
            title="两端对齐"
            active={editor.isActive({ textAlign: "justify" })}
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          >
            <MenuOutlined />
          </IconBtn>

          <div className="w-px h-5 bg-orange-100 mx-1" />

          {/* 列表 */}
          <IconBtn
            title="无序列表"
            active={editor.isActive("bulletList")}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <BarsOutlined />
          </IconBtn>

          <IconBtn
            title="有序列表"
            active={editor.isActive("orderedList")}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <OrderedListOutlined />
          </IconBtn>
        </div>

        {/* ================= 编辑区 ================= */}
        <div className="px-4 py-3 min-h-[180px]">
          <EditorContent editor={editor} />
        </div>
      </div>
    </section>
  );
}

/* ================= 按钮组件 ================= */
function IconBtn({
  children,
  onClick,
  active,
  title,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  title?: string;
}) {
  return (
    <div
      title={title}
      onClick={onClick}
      className={`
        flex items-center justify-center
        w-7 h-7
        rounded-md
        cursor-pointer
        transition-all
        hover:bg-orange-100
        hover:text-orange-600
        active:scale-95
        ${active ? "bg-orange-100 text-orange-600" : "text-gray-600"}
      `}
    >
      {children}
    </div>
  );
}
