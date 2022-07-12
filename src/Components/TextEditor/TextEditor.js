import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
// import 'quill/dist/quill.bubble.css';
import { useForm } from "react-hook-form";
import { noticeTopicData } from "../../Assets/Values/notice";
const TextEditor = ({ setValue, handlePost }) => {
  const [attachedImages, setAttachedImages] = useState([]);

  const theme = "snow";

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      [{ align: [] }],
      [
        {
          link: (value) => {
            if (value) {
              var href = prompt("Enter the URL");
              this.quill.format("link", href);
            } else {
              this.quill.format("link", false);
            }
          },
        },
      ],

      // ["clean"], // remove formatting button
    ],
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
  ];
  const placeholder = "Write and Post......";

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    handlePost(data.postTopic, data.postImage);
  };

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-block my-3">
          <select
            className="form-select"
            defaultValue={""}
            {...register("postTopic", { required: true })}
          >
            <option value="" disabled>
              Select Post Topic
            </option>
            {noticeTopicData?.map((topic,key) => (
              <option key={key} value={topic.topicName}>{topic.topicName}</option>
            ))}
          </select>
        </div>
        <div
          ref={quillRef}
          className="editor"
          style={{
            width: "100%",
            height: "250px",
          }}
        />
        <div className="d-block my-3">
          <input
            type="file"
            className="form-control"
            accept=".png, .jpg, .jpeg, .webp"
            multiple={false}
            {...register("postImage")}
          />
        </div>
        <div className="d-block my-3">
          <button
            className="btn btn-lg btn-outline-primary w-100 click-effect"
            type="submit"
          >
            <i className="fa fa-paper-plane" aria-hidden="true"></i> Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextEditor;
