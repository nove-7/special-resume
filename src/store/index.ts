import { create } from "zustand";
import createResumeSlice from "./resumeStore";
// 浏览器调试用
import { devtools } from "zustand/middleware";
// const useStore = create((set, get, api) => ({
//   ...createResumeSlice(set, get, api),
// }));
const useStore = create(
  devtools(
    (set, get, api) => ({
      ...createResumeSlice(set, get, api),
    }),
    {
      enabled: true,
      name: "resume-store",
    },
  ),
);
// const useStore = create(
//   devtools((set, get, api) => ({
//     ...createResumeSlice(set, get, api),
//     ...createUISlice(set, get, api),
//     ...createEditorSlice(set, get, api),
//   }))
// );
export default useStore;
