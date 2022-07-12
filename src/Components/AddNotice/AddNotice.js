import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LoadingContext, UserContext } from "../../App";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
import TextEditor from "../TextEditor/TextEditor";
import toast from "react-hot-toast";
import { sourceChanger } from "../../Assets/Funtions/Storage";
const AddNotice = () => {
  const [value, setValue] = useState("");
  const [newPost, setNePost] = useState();
  const [imageSource, setImageSource] = useState("");
  const [postTopic, setPostTopic] = useState("");
  const [loginuser] = useContext(UserContext);
  const [loadingpage, setLoadingpage] = useContext(LoadingContext);
  const postNotice = (topic) => {
    const newPost = {
      description: value,
      reaction: {
        like: 0,
        dislike: 0,
      },
      postedOn: moment().format("DD/MM/YYYY, hh:mm:ss A"),
      postedBy: loginuser?.personalInfo.name,
      postTopic: topic,
      postedImage: {
        src: imageSource.src,
        reference: imageSource.reference,
      },
    };
    setLoadingpage(false)
  };
  useEffect(() => {
    postNotice(postTopic);
  }, [imageSource]);
  const handlePost = (topic, image) => {
    setLoadingpage(true)
    if (!value) {
      toast.error("Please write something");
      setLoadingpage(false)
      return;
    } else {
      setPostTopic(topic);
      if (image.length > 0) {
        sourceChanger(image[0], "notice")
          .then((res) => {
            setImageSource(res);
          })
          .catch((err) => {
          });
      } else {
        setImageSource("");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="wholepageCenterChild  bg-white shadow rounded">
          <div className="col-md-8 px-4 py-5 my-4 border rounded">
            <h3 className="text-brand text-center ">Post Notice</h3>
            <div style={hrStyle}></div>
            <div className=" text-center text-editor">
              <TextEditor handlePost={handlePost} setValue={setValue} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotice;
