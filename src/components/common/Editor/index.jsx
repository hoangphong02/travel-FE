import React, { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import BlotFormatter from "quill-blot-formatter";
Quill.register("modules/blotFormatter", BlotFormatter);
// Hook xử lý upload hình ảnh
const useImageUpload = (quill, uploadPreset, uploadUrl) => {
  useEffect(() => {
    if (quill) {
      const toolbar = quill.getModule("toolbar");
      toolbar.addHandler("image", () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = () => {
          const file = input.files[0];
          if (/^image\//.test(file.type)) {
            uploadToCloudinary(file);
          } else {
            console.warn("You could only upload images.");
            alert("You could only upload images.");
          }
        };
      });
    }
  }, [quill, uploadPreset, uploadUrl]);

  const uploadToCloudinary = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    fetch(uploadUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.secure_url) {
          insertToEditor(data.secure_url);
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        alert("Error uploading image!");
      });
  };

  const insertToEditor = (url) => {
    const range = quill.getSelection();
    if (range) {
      quill.insertEmbed(range.index, "image", url);
    }
  };
};

const Editor = ({ value, setValue, onBlur }) => {
  const quillRef = useRef(null);

  useImageUpload(
    quillRef?.current?.getEditor(),
    "vr8eratg",
    "https://api.cloudinary.com/v1_1/disrx4gzn/image/upload"
  );

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        [{ size: ["small", false, "large", "huge"] }], // Thêm lựa chọn size chữ
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
    blotFormatter: {
      // Các tùy chọn cấu hình cho blot formatter (nếu cần)
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "size",
    "align",
  ];

  // const getEditorContents = () => {
  //   if (quillRef.current) {
  //     const quill = quillRef.current.getEditor(); // Access the Quill instance
  //     const contents = quill.getContents(); // Get the delta
  //     console.log("Delta contents:", contents);
  //   }
  // };

  const handleChange = () => {
    if (quillRef?.current) {
      const quill = quillRef?.current?.getEditor(); // Access the Quill instance
      const contents = quill?.getContents(); // Get the delta
      setValue(contents); // Set the delta to state
    }
  };
  return (
    <div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        // onChange={setValue}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        onBlur={onBlur}
      />
      {/* <button onClick={getEditorContents}>Get Content</button> */}
    </div>
  );
};

export default Editor;
