import React from "react";
import s from "./Post.module.css";
import def_img from "../../../../assets/images/def_img.png";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={def_img} />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
