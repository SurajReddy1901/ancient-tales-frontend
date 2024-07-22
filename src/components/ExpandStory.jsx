import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function ExpandStory() {
  const [expandViewStory, setExpandViewStory] = useState({});
  let params = useParams();
  // console.log(params.id);
  useEffect(() => {
    axios
      .get('https://ancient-tales-backend.onrender.com/createstory/' + params.id, {
        headers:{
          Authorization: 'Bearer '+localStorage.getItem('token')
        }
      })
      .then(res => {
        setExpandViewStory(res.data.mystories);
        // console.log(res.data.mystories)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="expand-outer-container">
        <div className="expand-inner-container">
          <img
            src={expandViewStory.photo}
            alt="image.."
            className="expand-story-img"
          />
          <h1 className="title-story">{expandViewStory.title}</h1>
          <p className="author-story">
            -<em>{expandViewStory.authorname}</em>
          </p>
          <p className="desc-story-expand">{expandViewStory.description}</p>
          <p className="content-story">{expandViewStory.contents}</p>
        </div>
      </div>
    </div>
  );
}

export default ExpandStory;
