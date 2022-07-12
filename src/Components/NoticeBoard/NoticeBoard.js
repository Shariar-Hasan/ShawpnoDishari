import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { noticeTopicData } from "../../Assets/Values/notice";

const NoticeBoard = () => {
  const [searchparams, setSearchparams] = useSearchParams();
  const [topicOfPost, setTopicOfPost] = useState();
  const [postId, setPostId] = useState();
  const [postTopicList, setPostTopicList] = useState([]);
  useEffect(() => {
    setPostTopicList(noticeTopicData);
  }, []);
  useEffect(() => {
    setSearchparams({
      topic: topicOfPost,
      postId: postId,
    });
  }, [topicOfPost, postId]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="settings-dashboard mx-auto my-3 p-4 w-100 bg-white shadow rounded">
              <fieldset>
                <legend>Notice Topic</legend>
                <hr />
                <ul className="settings-list">
                  {postTopicList.map((topic, index) => (
                    <li
                      value={topic.topicName}
                      key={index}
                      onClick={(e) => setTopicOfPost(e.target.textContent)}
                    >
                      {topic.topicName}
                    </li>
                  ))}
                </ul>
              </fieldset>
            </div>
          </div>

          <div className="col-md-9"></div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
