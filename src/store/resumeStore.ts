import { v4 as uuidv4 } from "uuid";
import avatar from "@/assets/avatar.jpg";
const createResumeSlice = (set) => ({
  // id唯一标识
  // type: section类型
  // title: section标题
  // visible: section是否可见
  // fields: section字段
  sections: [
    // 基本信息
    {
      id: "basic_1",

      order: 1,

      type: "basic",

      title: "基本信息",

      visible: true,

      fields: [
        {
          id: "name",
          label: "姓名",
          value: "易豪俊",
          visible: true,
          type: "fixed",
          draggable: false,
        },
        {
          id: "photo",
          label: "头像",
          value: avatar,
          visible: true,
          type: "fixed",
          draggable: false,
        },
        {
          id: "position",
          label: "意向职位",
          value: "前端开发工程师",
          visible: true,
          draggable: false,
          type: "fixed",
        },
        {
          id: "location",
          label: "地址",
          value: "江西南昌",
          visible: true,
          type: "fixed",
          draggable: true,
        },
        {
          id: "phone",
          label: "电话",
          value: "18720017823",
          visible: true,
          draggable: true,
          type: "fixed",
        },
        {
          id: "email",
          label: "邮箱",
          value: "nove7@qq.com",
          visible: true,
          draggable: true,
          type: "fixed",
        },
        {
          id: "state",
          label: "状态",
          value: "在职",
          visible: true,
          draggable: true,
          type: "fixed",
        },
      ],
    },
    // 专业技能
    {
      id: "skill_1",

      order: 2,

      type: "skill",

      title: "专业技能",

      visible: true,

      fields: [
        {
          content: `<ul><li><p>前端框架：熟悉 React、Vue.js，熟悉 Next.js、Nuxt.js 等 SSR 框架</p></li><li><p>开发语言：TypeScript、JavaScript(ES6+)、HTML5、CSS3</p></li><li><p>UI/样式：熟悉 TailwindCSS、Sass/Less、CSS Module、Styled-components</p></li><li><p>状态管理：Redux、Vuex、Zustand、Jotai、React Query</p></li><li><p>工程化工具：Webpack、Vite、Rollup、Babel、ESLint</p></li><li><p>测试工具：Jest、React Testing Library、Cypress</p></li><li><p>性能优化：熟悉浏览器渲染原理、性能指标监控、代码分割、懒加载等优化技术</p></li><li><p>版本控制：Git、SVN</p></li><li><p>技术管理：具备团队管理经验，主导过多个大型项目的技术选型和架构设计</p></li></ul>`,
        },
      ],
    },
    // 工作经验
    {
      id: "work_1",

      type: "work",

      order: 3,

      title: "工作经历",

      visible: true,

      fields: [
        {
          id: uuidv4(),
          companyName: "公司名",
          position: "职位",
          startTime: "开始工作时间",
          endTime: "结束工作时间",
          draggable: true,
          content: `<ul><li><p>1负责xxx的开发与维护，主导多个核心功能的技术方案设计</p></li><li><p>优化项目工程化配置，将构建时间从 8 分钟优化至 2 分钟，提升团队开发效率</p></li><li><p>设计并实现组件库，提升代码复用率达 70%，显著减少开发时间</p></li><li><p>主导性能优化项目，使平台首屏加载时间减少 50%，接入 APM 监控系统</p></li><li><p>指导初级工程师，组织技术分享会，提升团队整体技术水平</p></li></ul>`,
        },
        {
          id: uuidv4(),
          companyName: "公司名2",
          position: "职位2",
          startTime: "开始工作时间2",
          endTime: "结束工作时间2",
          draggable: true,
          content: `<ul><li><p>2负责xxx的开发与维护，主导多个核心功能的技术方案设计</p></li><li><p>优化项目工程化配置，将构建时间从 8 分钟优化至 2 分钟，提升团队开发效率</p></li><li><p>设计并实现组件库，提升代码复用率达 70%，显著减少开发时间</p></li><li><p>主导性能优化项目，使平台首屏加载时间减少 50%，接入 APM 监控系统</p></li><li><p>指导初级工程师，组织技术分享会，提升团队整体技术水平</p></li></ul>`,
        },
      ],
    },
    // 项目经验
    {
      id: "project_1",

      type: "project",

      order: 4,

      title: "项目经历",

      visible: true,

      fields: [
        {
          id: uuidv4(),
          projectName: "项目名称",
          role: "项目角色",
          website: "项目链接",
          startTime: "开始工作时间",
          endTime: "结束工作时间",
          draggable: true,
          content: `<ul><li><p>基于 React 开发的创作者数据分析和内容管理平台，服务百万级创作者群体</p></li><li><p>包含数据分析、内容管理、收益管理等多个子系统</p></li><li><p>使用 Redux 进行状态管理，实现复杂数据流的高效处理</p></li><li><p>采用 Ant Design 组件库，确保界面设计的一致性和用户体验</p></li><li><p>实施代码分割和懒加载策略，优化大规模应用的加载性能</p></li></ul>`,
        },
      ],
    },
    // 教育经历
    {
      id: "school_1",

      type: "school",

      order: 5,

      title: "教育经历",

      visible: true,

      fields: [
        {
          id: uuidv4(),
          schoolName: "学校名称",
          // degree: "学历",
          major: "专业",
          startTime: "入学时间",
          endTime: "毕业时间",
          draggable: true,
          content: `<ul><li><p>主修课程：数据结构、算法设计、操作系统、计算机网络、Web开发技术</p></li><li><p>专业排名前 5%，连续三年获得一等奖学金</p></li><li><p>担任计算机协会技术部部长，组织多次技术分享会</p></li><li><p>参与开源项目贡献</p></li></ul>`,
        },
      ],
    },
    // 自我评价
    {
      id: "selfEvaluation_1",

      type: "selfEvaluation",

      order: 6,

      title: "自我评价",

      visible: true,

      fields: [{ content: "自我评价富文本" }],
    },
    // 自定义模块
    {
      id: "custom" + uuidv4(),
      // id: "custom",

      type: "custom",

      order: 7,

      title: "自定义模块",

      visible: true,

      fields: [
        {
          id: uuidv4(),
          title: "主标题1",
          subtitle: "副标题1",
          startTime: "开始时间",
          endTime: "结束时间",
          draggable: true,
          content: "富文本内容1",
        },
        {
          id: uuidv4(),
          title: "主标题2",
          subtitle: "副标题2",
          startTime: "开始时间2",
          endTime: "结束时间2",
          draggable: true,
          content: "富文本内容2",
        },
      ],
    },
  ],

  activeSectionId: "basic_1",

  layout: {
    // =====主题色板块=====
    // 主题色
    themeColor: "#000000",
    // 自定义主题色
    customerColor: "#f97316",
    // =====排版板块=====
    // 字体
    fontFamily: "Inter",
    // 行高
    lineHeight: 1.5,
    // 内容字体大小
    bodyFontSize: 16,
    // 模块标题字体大小
    sectionFontSize: 18,
    // 模块项一级标题字体大小
    titleFontSize: 16,

    // =====间距板块=====
    // 页边距
    margin: 32,
    // 模块间距
    sectionMargin: 16,
    // 段落间距
    paragraphMargin: 12,
    // =====模式板块=====
    // 副标题居中
    subtitleCenter: true,
    // 长标题模式
    // longTitle: false,
  },
  ui: {
    showSectionPanel: true,
    showPropertyPanel: true,
    showResumePanel: true,
  },
  // 给个人信息添加字段，index不能重复！！！！，value是后续显示的值
  addBasicField: (value) => {
    set((state) => ({
      sections: state.sections.map((section) => {
        if (section.id !== "basic_1") {
          return section;
        }

        return {
          ...section,

          fields: [
            ...section.fields,
            {
              id: uuidv4(),
              label: "自定义字段",
              value: value,
              visible: true,
              type: "add",
              draggable: true,
            },
          ],
        };
      }),
    }));
  },
  delBasicField: (key) => {
    set((state) => ({
      sections: state.sections.map((section) => {
        if (section.id !== "basic_1") {
          return section;
        }

        return {
          ...section,
          fields: section.fields.filter((field) => field.id !== key),
        };
        // const { [key]: _, ...res } = section.fields[0];
        // console.log("这里是basic里删除的字段key" + _);
        // return {
        //   ...section,
        //   fields: [res],
        // };
      }),
    }));
  },
  // basic字段的显示与隐藏
  toggleBasicFieldVisible: (id) => {
    set((state) => ({
      sections: state.sections.map((section) => {
        if (section.id !== "basic_1") {
          return section;
        }
        return {
          ...section,
          fields: section.fields.map((field) =>
            field.id === id
              ? {
                  ...field,
                  visible: !field.visible,
                }
              : field,
          ),
        };
      }),
    }));
  },
  //给不同模块加多个fields
  // 这里要求传入的是（哪个模块的id，传入的值（对象，不同模块对象的内容也不同））
  addField: (typeId, value) => {
    set((state) => ({
      sections: state.sections.map((section) => {
        if (section.id !== typeId) {
          return section;
        }

        return {
          ...section,
          fields: [
            ...section.fields,
            {
              id: uuidv4(),
              // type: "add",
              draggable: true,
              ...value,
            },
          ],
        };
      }),
    }));
  },
  // 固定的模块不能删除，可以通过visible来控制
  // 删除只支持添加的模块（basic的）
  // 后续固定模块不加删除按钮（这里不进行判断是否是固定模块）
  delField: (typeId, fieldId) => {
    set((state) => ({
      sections: state.sections.map((section) => {
        if (section.id !== typeId) {
          return section;
        }
        return {
          ...section,
          fields: section.fields.filter((field) => field.id !== fieldId),
        };
      }),
    }));
  },
  // 更新模块里面fields的内容
  // 传入模块id，filedid，属性，属性值
  updateField: (sectionId, fieldId, key, value) => {
    set((state) => ({
      sections: state.sections.map((section) => {
        if (section.id !== sectionId) return section;

        return {
          ...section,
          fields: section.fields.map((field) => {
            if (field.id !== fieldId) return field;

            return {
              ...field,
              [key]: value,
            };
          }),
        };
      }),
    }));
  },
  // 更新标题
  updateTitle: (sectionId, value) => {
    set((state) => ({
      sections: state.sections.map((section) => {
        if (section.id !== sectionId) return section;

        return {
          ...section,
          title: value,
        };
      }),
    }));
  },
  // 添加模块section
  // 传入的对象
  addSection: (value) => {
    set((state) => ({
      sections: [
        ...state.sections,
        {
          id: "custom" + uuidv4(),

          type: "custom",

          order: state.sections.length + 1,

          title: "自定义模块",

          visible: true,

          fields: [
            // {
            //   id: uuidv4(),
            //   title: "主标题1",
            //   subtitle: "副标题1",
            //   time: "时间1",
            //   content: "富文本内容1",
            // },
            value,
          ],
        },
      ],
    }));
  },
  // 删除模块，不支持删除固定模块，传入id时不要传入固定模块的id（这里不进行判断是否是固定模块）
  // delSection: (id) => {
  //   set((state) => ({
  //     sections: state.sections.filter((section) => section.id !== id),
  //   }));
  // },
  delSection: (id) => {
    set((state) => {
      const sections = state.sections.filter((section) => section.id !== id);

      return {
        sections,
        activeSectionId:
          state.activeSectionId === id
            ? sections[0]?.id || ""
            : state.activeSectionId,
      };
    });
  },
  // 更多模块的显示和隐藏切换
  toggleVisible: (id) => {
    set((state) => ({
      sections: state.sections.map((section) => {
        if (section.id !== id) {
          return section;
        }
        return {
          ...section,
          visible: !section.visible,
        };
      }),
    }));
  },

  // 主题色修改
  toggleThemeColor: (color) => {
    set((state) => ({
      layout: {
        ...state.layout,
        themeColor: color,
      },
    }));
  },
  // 自定义颜色修改
  toggleCustomColor: (color) => {
    set((state) => ({
      layout: {
        ...state.layout,
        customColor: color,
      },
    }));
  },
  // 修改字体fontfamily
  toggleFontFamily: (font) => {
    set((state) => ({
      layout: {
        ...state.layout,
        fontFamily: font,
      },
    }));
  },
  // 修改行高
  changeLineHeight: (lineHeight) => {
    set((state) => ({
      layout: {
        ...state.layout,
        lineHeight: lineHeight,
      },
    }));
  },

  // 修改字号（三个字号修改）
  changeFontSize: (type, value) => {
    set((state) => ({
      layout: {
        ...state.layout,
        [type]: value,
      },
    }));
  },
  // 修改三个项的间距
  changeMargin: (type, value) => {
    set((state) => ({
      layout: {
        ...state.layout,
        [type]: value,
      },
    }));
  },
  // 修改两个switch状态
  changeSwitch: () => {
    set((state) => ({
      layout: {
        ...state.layout,
        subtitleCenter: !state.layout.subtitleCenter,
      },
    }));
  },

  // 修改激活状态的id
  changeActiveSectionId: (id) => {
    set(() => ({
      activeSectionId: id,
    }));
  },

  // UI面板显示状态
  changeUIPanelVisibility: (panel) => {
    set((state) => ({
      ui: {
        ...state.ui,
        [panel]: !state.ui[panel],
      },
    }));
  },

  // 拖拽函数
  moveSection: (activeId, overId) =>
    set((state) => {
      // 找到拖动的 item 下标
      const oldIndex = state.sections.findIndex((item) => item.id === activeId);

      // 找到目标位置下标
      const newIndex = state.sections.findIndex((item) => item.id === overId);

      // 拷贝一份数组（不能直接改 state）
      const newSections = [...state.sections];

      // 1️ 把拖动的元素取出来
      const [movedItem] = newSections.splice(oldIndex, 1);

      // 2️ 插入到新位置
      newSections.splice(newIndex, 0, movedItem);

      // 3️ 重新计算 order（保证顺序稳定）
      const result = newSections.map((item, index) => ({
        ...item,
        order: index,
      }));

      return {
        sections: result,
      };
    }),
  // 重置简历
  resetResume: () => {
    set(() => ({
      sections: [
        // 基本信息
        {
          id: "basic_1",

          order: 1,

          type: "basic",

          title: "基本信息",

          visible: true,

          fields: [
            {
              id: "name",
              label: "姓名",
              value: "易豪俊",
              visible: true,
              type: "fixed",
              draggable: false,
            },
            {
              id: "photo",
              label: "头像",
              value: avatar,
              visible: true,
              type: "fixed",
              draggable: false,
            },
            {
              id: "position",
              label: "意向职位",
              value: "前端开发工程师",
              visible: true,
              draggable: false,
              type: "fixed",
            },
            {
              id: "location",
              label: "地址",
              value: "江西南昌",
              visible: true,
              type: "fixed",
              draggable: true,
            },
            {
              id: "phone",
              label: "电话",
              value: "18720017823",
              visible: true,
              draggable: true,
              type: "fixed",
            },
            {
              id: "email",
              label: "邮箱",
              value: "nove7@qq.com",
              visible: true,
              draggable: true,
              type: "fixed",
            },
            {
              id: "state",
              label: "状态",
              value: "在职",
              visible: true,
              draggable: true,
              type: "fixed",
            },
          ],
        },
        // 专业技能
        {
          id: "skill_1",

          order: 2,

          type: "skill",

          title: "专业技能",

          visible: true,

          fields: [
            {
              content: `<ul><li><p>前端框架：熟悉 React、Vue.js，熟悉 Next.js、Nuxt.js 等 SSR 框架</p></li><li><p>开发语言：TypeScript、JavaScript(ES6+)、HTML5、CSS3</p></li><li><p>UI/样式：熟悉 TailwindCSS、Sass/Less、CSS Module、Styled-components</p></li><li><p>状态管理：Redux、Vuex、Zustand、Jotai、React Query</p></li><li><p>工程化工具：Webpack、Vite、Rollup、Babel、ESLint</p></li><li><p>测试工具：Jest、React Testing Library、Cypress</p></li><li><p>性能优化：熟悉浏览器渲染原理、性能指标监控、代码分割、懒加载等优化技术</p></li><li><p>版本控制：Git、SVN</p></li><li><p>技术管理：具备团队管理经验，主导过多个大型项目的技术选型和架构设计</p></li></ul>`,
            },
          ],
        },
        // 工作经验
        {
          id: "work_1",

          type: "work",

          order: 3,

          title: "工作经历",

          visible: true,

          fields: [
            {
              id: uuidv4(),
              companyName: "公司名",
              position: "职位",
              startTime: "开始工作时间",
              endTime: "结束工作时间",
              draggable: true,
              content: `<ul><li><p>1负责xxx的开发与维护，主导多个核心功能的技术方案设计</p></li><li><p>优化项目工程化配置，将构建时间从 8 分钟优化至 2 分钟，提升团队开发效率</p></li><li><p>设计并实现组件库，提升代码复用率达 70%，显著减少开发时间</p></li><li><p>主导性能优化项目，使平台首屏加载时间减少 50%，接入 APM 监控系统</p></li><li><p>指导初级工程师，组织技术分享会，提升团队整体技术水平</p></li></ul>`,
            },
            {
              id: uuidv4(),
              companyName: "公司名2",
              position: "职位2",
              startTime: "开始工作时间2",
              endTime: "结束工作时间2",
              draggable: true,
              content: `<ul><li><p>2负责xxx的开发与维护，主导多个核心功能的技术方案设计</p></li><li><p>优化项目工程化配置，将构建时间从 8 分钟优化至 2 分钟，提升团队开发效率</p></li><li><p>设计并实现组件库，提升代码复用率达 70%，显著减少开发时间</p></li><li><p>主导性能优化项目，使平台首屏加载时间减少 50%，接入 APM 监控系统</p></li><li><p>指导初级工程师，组织技术分享会，提升团队整体技术水平</p></li></ul>`,
            },
          ],
        },
        // 项目经验
        {
          id: "project_1",

          type: "project",

          order: 4,

          title: "项目经历",

          visible: true,

          fields: [
            {
              id: uuidv4(),
              projectName: "项目名称",
              role: "项目角色",
              website: "项目链接",
              startTime: "开始工作时间",
              endTime: "结束工作时间",
              draggable: true,
              content: `<ul><li><p>基于 React 开发的创作者数据分析和内容管理平台，服务百万级创作者群体</p></li><li><p>包含数据分析、内容管理、收益管理等多个子系统</p></li><li><p>使用 Redux 进行状态管理，实现复杂数据流的高效处理</p></li><li><p>采用 Ant Design 组件库，确保界面设计的一致性和用户体验</p></li><li><p>实施代码分割和懒加载策略，优化大规模应用的加载性能</p></li></ul>`,
            },
          ],
        },
        // 教育经历
        {
          id: "school_1",

          type: "school",

          order: 5,

          title: "教育经历",

          visible: true,

          fields: [
            {
              id: uuidv4(),
              schoolName: "学校名称",
              // degree: "学历",
              major: "专业",
              startTime: "入学时间",
              endTime: "毕业时间",
              draggable: true,
              content: `<ul><li><p>主修课程：数据结构、算法设计、操作系统、计算机网络、Web开发技术</p></li><li><p>专业排名前 5%，连续三年获得一等奖学金</p></li><li><p>担任计算机协会技术部部长，组织多次技术分享会</p></li><li><p>参与开源项目贡献</p></li></ul>`,
            },
          ],
        },
        // 自我评价
        {
          id: "selfEvaluation_1",

          type: "selfEvaluation",

          order: 6,

          title: "自我评价",

          visible: true,

          fields: [{ content: "自我评价富文本" }],
        },
        // 自定义模块
        {
          id: "custom" + uuidv4(),
          // id: "custom",

          type: "custom",

          order: 7,

          title: "自定义模块",

          visible: true,

          fields: [
            {
              id: uuidv4(),
              title: "主标题1",
              subtitle: "副标题1",
              startTime: "开始时间",
              endTime: "结束时间",
              draggable: true,
              content: "富文本内容1",
            },
            {
              id: uuidv4(),
              title: "主标题2",
              subtitle: "副标题2",
              startTime: "开始时间2",
              endTime: "结束时间2",
              draggable: true,
              content: "富文本内容2",
            },
          ],
        },
      ],

      activeSectionId: "basic_1",

      layout: {
        // =====主题色板块=====
        // 主题色
        themeColor: "#000000",
        // 自定义主题色
        customerColor: "#f97316",
        // =====排版板块=====
        // 字体
        fontFamily: "Inter",
        // 行高
        lineHeight: 1.5,
        // 内容字体大小
        bodyFontSize: 16,
        // 模块标题字体大小
        sectionFontSize: 18,
        // 模块项一级标题字体大小
        titleFontSize: 16,

        // =====间距板块=====
        // 页边距
        margin: 32,
        // 模块间距
        sectionMargin: 16,
        // 段落间距
        paragraphMargin: 12,
        // =====模式板块=====
        // 副标题居中
        subtitleCenter: true,
        // 长标题模式
        // longTitle: false,
      },
      ui: {
        showSectionPanel: true,
        showPropertyPanel: true,
        showResumePanel: true,
      },
    }));
  },
});

export default createResumeSlice;
