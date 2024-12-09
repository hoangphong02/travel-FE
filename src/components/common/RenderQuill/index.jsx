const { useEffect, useState } = require("react");
const { Quill } = require("react-quill");

const RenderQuillItem = ({ detail }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const quill = new Quill(document.createElement("div"));
    quill.setContents(detail);
    setHtmlContent(quill.root.innerHTML);
  }, [detail]);

  return (
    <div className="body" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default RenderQuillItem;
