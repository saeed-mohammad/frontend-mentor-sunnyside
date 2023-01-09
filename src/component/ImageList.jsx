import React from "react";
import imgList from "./List/ImgList";
import "../style/ImageList.scss";
const ImageList = () => {
  return (
    <div className="images">
      {imgList.map((pic, ind) => (
        <div className="img-container" key={ind}>
          <a href={"#" + pic.anchor}>
            <img src={pic.m_image} alt={pic.m_image} className="d_image" />
            <img src={pic.d_image} alt={pic.d_image} className="m_image" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
