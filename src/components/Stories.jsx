import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import loader from "../assets/Position.gif";

function Stories() {
  const [storyList, setStoryList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();
  const readRoute = (id) => {
    setLoading(true);
    navigate("/dashboard/expandstory/" + id);
  };

  const getData = () => {
    // setLoading(true);
    axios
      .get("https://ancient-tales-backend.onrender.com/createstory", {
        headers:{
          Authorization: 'Bearer '+localStorage.getItem('token')
        }
      })

      .then((res) => {
        // console.log(res.data.myStories)
        setStoryList(res.data.myStories);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  };
  useEffect(() => {
    getData();

  } ,[]);
  return (
    <div>
      <Navbar />
      {isLoading && (
        <div>
          <img src={loader} className="pre-loader-img" alt="" />
        </div>
      )}
      {!isLoading && (<div className="outer-container">
        {storyList?.map(data => 
          <RowData key={data._id} readReq={readRoute} more={data} />
        )}
      </div>)}
    </div>
  );
}

const RowData = (props) => {
  // const pic = 
  // console.log(pic)
  return (
    <div className="card-story">
      <img
        src={props.more.photo}
        alt="Uploded Photos..."
        className="view-story-img"
      />
      <h1 className="title-story">{props.more.title}</h1>
      <p className="author-story">
        -<em>{props.more.authorname}</em>
      </p>
      <p className="desc-story">{props.more.description}</p>
      <button
        className="read-story"
        onClick={() => {
          props.readReq(props.more._id);
        }}
      >
        Read
      </button>
    </div>
  );
};
export default Stories;
