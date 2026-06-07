import { GithubFilled, DownloadOutlined } from "@ant-design/icons";

const Header = ({ resumeRef }) => {
  const printNative = async () => {
    if (!resumeRef?.current) return;

    const el = resumeRef.current as HTMLElement;
    const newWin = window.open("", "_blank");
    if (!newWin) {
      alert("请允许弹窗以打印或使用浏览器的打印功能（Ctrl+P）。");
      return;
    }

    const headHtml = Array.from(document.head.querySelectorAll("link, style"))
      .map((n) => n.outerHTML)
      .join("\n");

    const bodyHtml = `<div id="print-root">${el.innerHTML}</div>`;

    newWin.document.open();
    newWin.document.write(
      `<!doctype html><html><head>${headHtml}<meta charset="utf-8"></head><body>${bodyHtml}</body></html>`,
    );
    newWin.document.close();

    const waitForResources = (win: Window) =>
      new Promise<void>((resolve) => {
        try {
          const imgs = Array.from(win.document.images || []);
          if (imgs.length === 0) return resolve();
          let loaded = 0;
          const check = () => {
            loaded += 1;
            if (loaded >= imgs.length) resolve();
          };
          imgs.forEach((img) => {
            if (img.complete) return check();
            img.addEventListener("load", check);
            img.addEventListener("error", check);
          });
          setTimeout(() => resolve(), 3000);
        } catch {
          resolve();
        }
      });

    await waitForResources(newWin);

    try {
      newWin.focus();
      newWin.print();
      setTimeout(() => {
        try {
          newWin.close();
        } catch {
          // ignore
        }
      }, 1000);
    } catch (e) {
      console.error("打印失败:", e);
    }
  };

  return (
    <header className="h-14 border-b border-[#eaecef] bg-orange-50 w-full">
      <div className="flex h-full w-full items-center justify-between px-6">
        <div className="flex items-center">
          <span className="text-[15px] font-semibold text-[#111827] tracking-wide">
            Special Resume
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-white bg-zinc-900 hover:text-white hover:bg-zinc-700 transition"
            onClick={printNative}
          >
            <DownloadOutlined className="text-sm" /> 导出
          </button>

          <a
            href="https://github.com/nove-7/regexp-tool"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md text-[#6b7280] hover:text-[#111827] hover:bg-[#f3f4f6] transition"
          >
            <GithubFilled className="text-lg" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
