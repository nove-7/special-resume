import useStore from "@/store/index";
const BasicSection = ({ data }) => {
  const bodyFontSize = useStore((s) => s.layout.bodyFontSize);
  const fields = data.fields.filter((item) => item.visible);

  const photoField = fields.find((item) => item.id === "photo");

  const nameField = fields.find((item) => item.id === "name");

  const infoFields = fields.filter(
    (item) => item.id !== "photo" && item.id !== "name",
  );

  return (
    <section className="mb-5 pb-1">
      <div className="flex items-start">
        {/* 证件照 */}
        {photoField?.value && (
          <img
            src={photoField.value}
            alt="头像"
            className="w-24 h-32 object-cover border border-gray-300 mr-6 shrink-0"
          />
        )}

        {/* 右侧信息 */}
        <div className="flex-1">
          {/* 姓名 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {nameField?.value}
          </h1>

          {/* 基本信息 */}
          <div
            className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-700"
            style={{ fontSize: bodyFontSize }}
          >
            {infoFields.map((field) => {
              if (field.type === "fixed" && field.id !== "position") {
                return (
                  <div key={field.id} className="truncate" title={field.value}>
                    {field.label}:{field.value}
                  </div>
                );
              }
              return (
                <div key={field.id} className="truncate" title={field.value}>
                  {field.value}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicSection;
