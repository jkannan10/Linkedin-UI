import React, { useState } from "react";
import "../assets/styles/PostBox.css";
import dev from "../assets/images/dev2.jpg";
import imgeIcon from "../assets/images/imageIcon.png";
import calenderIcon from "../assets/images/calendarIcon.png";
import articleIcon from "../assets/images/articleIcon.png";
import { Box, Modal } from "@mui/material";
interface Content {
  post: string;
  image: string;
}
interface Contentprops {
  contents: Content[];
  setContents: React.Dispatch<React.SetStateAction<Content[]>>;
}

const PostBox: React.FC<Contentprops> = ({ contents, setContents }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [post, setPost] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [mimeType, setMimeType] = useState<string>("image/png");

  const handlePost = () => {
    if (post.trim() !== "") {
      console.log(selectedImage);
      setContents([...contents, { post, image: selectedImage }]);
      setPost("");
      setSelectedImage("");
      setOpen(!open);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      setMimeType(file.type);
      console.log(mimeType);
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result: string | null | ArrayBuffer = reader.result;
        if (typeof result !== "string") return;
        const mimeTypeMatch = result.match(/^data:(.*);base64,/);
        if (mimeTypeMatch) {
          setMimeType(mimeTypeMatch[1]);
          const base64String = result.replace(/^data:(.*);base64,/, "");
          setSelectedImage(base64String);
        } else {
          console.error("Invalid base64 string");
        }
      };
    }
  };

  return (
    <div className="container border post-box  p-3 mb-3 bg-white">
      <div className="row mb-2 align-items-center">
        <div className="col-auto">
          <img src={dev} alt="User Avatar" className="rounded-circle avatar" />
        </div>
        <div
          className="col form-control Write fw-bold"
          onClick={() => setOpen(!open)}
        >
          Start a post, try writing with AI
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: 800,
            height: "80%",
            maxHeight: 600,
            background: "white",
            margin: "50px auto",
            textAlign: "center",
            border: "none",
          }}
        >
          <div className="d-flex justify-content-between p-4">
            <div className="d-flex align-items-center modalHolder p-2">
              <div className="position-relative me-2">
                <img src={dev} alt="User" className="img-fluid image" />
              </div>
              <div className="text-start fw-bold p-2">
                <p className="mb-0">Name</p>
                <p className="mb-0">Post to anyone</p>
              </div>
            </div>
            <div className="fw-bold">
              <p className="XBtn p-2" onClick={() => setOpen(!open)}>
                X
              </p>
            </div>
          </div>

          <div className="text-start px-4">
            <textarea
              className=" TextArea"
              placeholder="What do you want to talk about"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end align-items-center mt-3 px-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="btn btn-light me-3"
            />
            <div className="p-3">
              <button
                className="btn btn-primary text-white"
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="row justify-content-around bg-white">
        <div className="col-auto">
          <button className="btn d-flex align-items-center MediaandEvent p-2">
            <img src={imgeIcon} alt="Media" className="icon" />
            <span className=" spanPost">Media</span>
          </button>
        </div>
        <div className="col-auto">
          <button className="btn d-flex align-items-center MediaandEvent p-2">
            <img src={calenderIcon} alt="Event" className="icon" />
            <span className="spanPost">Contribute expertise</span>
          </button>
        </div>
        <div className="col-auto">
          <button className="btn d-flex align-items-center MediaandEvent p-2">
            <img src={articleIcon} alt="Write article" className="icon" />
            <span className="spanPost">Write article</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
