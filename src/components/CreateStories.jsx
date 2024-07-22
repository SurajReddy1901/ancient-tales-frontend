import React, { useState } from "react";
import Navbar from "./Navbar";
import imageLogo from "../assets/fairytale-storytelling-with-open-book-concept.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loader from "../assets/Position.gif";

function CreateStories() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(imageLogo);
  const [title, setTitle] = useState("");
  const [authorname, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [contents, setContents] = useState("");
  const [isLoading, setLoading] = useState(false);

  let navigate = useNavigate();

  const fileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const submitHandler = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("authorname", authorname);
    formData.append("description", description);
    formData.append("photo", selectedFile);
    formData.append("contents", contents);

    axios
      .post("https://ancient-tales-backend.onrender.com/createstory", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        navigate("/dashboard/stories");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      {isLoading && (
        <div>
          <img src={loader} alt="" className="pre-loader-img"/>
        </div>
      )}
      {!isLoading && (
        <div className="story-content-here">
          <div className="hero-cont2">
            <div className="left-inner-cont">
              <div className="left-inner-cont-inner2">
                <div className="signup-box">
                  <form onSubmit={submitHandler} className="form-details2">
                    <input
                      type="text"
                      placeholder="Enter Your Story Name..."
                      required
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Enter the Author Name..."
                      required
                      onChange={(e) => {
                        setAuthorName(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Short Description of Your Story..."
                      required
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <label>Upload the Image of Your Story below...</label>
                    <input
                      onChange={(e) => {
                        fileHandler(e);
                      }}
                      type="file"
                      required
                    />
                    <textarea
                      name="postContent"
                      rows={4}
                      cols={40}
                      placeholder="Write your Story:"
                      onChange={(e) => {
                        setContents(e.target.value);
                      }}
                      className="text-area-story"
                    />
                    <button type="submit" className="btn-signup">
                      Upload Story
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="right-inner-cont">
              <img
                className="story-uploaded-image"
                src={imageUrl}
                alt="Uploaded Images.."
              />
            </div>
          </div>
          <footer>
            <h1>Copyright© Ancient Tales 2024</h1>
          </footer>
        </div>
      )}
    </div>
  );
}

export default CreateStories;
