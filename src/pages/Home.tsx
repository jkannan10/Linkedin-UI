import "../assets/styles/Home.css";
import dev3 from "../assets/images/dev3.jpg";
import dev4 from "../assets/images/dev4.jpg";
import dev5 from "../assets/images/dev5.jpg";
import dev6 from "../assets/images/dev6.jpg";
import poster1 from "../assets/images/poster1.jpeg";
import poster2 from "../assets/images/poster3.jpeg";
import poster3 from "../assets/images/poster4.jpeg";
import poster4 from "../assets/images/poster5.jpeg";
import TopStories from "../components/TopStories";
import VideoComponent from "../components/VideoComponent";
import CodingComponent from "../components/CodingComponent";
import PostBox from "../components/PostBox";
import Sidebar from "../components/SideBar";
import ProfileCard from "../components/ProfileCard";
import PromotionAD from "../components/PromotionAD";
import Footer from "../components/Footer";

import { useState } from "react";
import PostComponent from "../components/PostComponent";
interface Content {
  post: string;
  image: string;
}
const Home: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);
  return (
    <div className="row justify-content-center">
      <div className="col-7 col-md-2 mb-2 " style={{ marginLeft: "180px" }}>
        <ProfileCard />
        <Sidebar />
      </div>
      <div className="col-5 col-md-5 ContentHolder">
        <PostBox contents={contents} setContents={setContents} />
        <div className="row" style={{ width: "100%" }}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="SpecialBorder col-11"></div>
            <span
              style={{
                position: "relative",
                whiteSpace: "nowrap",
                fontSize: "small",
                marginLeft: "10px",
                marginTop: "-10px",
              }}
              className="SpecialSort"
            >
              Sort by:<span className="fw-bold"> Top &#x25BC; </span>
            </span>
          </div>
        </div>
        <div className="Content">
          {contents.map((content, index) => (
            <PostComponent
              key={index}
              image={dev3}
              header={"Name"}
              name="StorySpinner"
              year="2nd"
              postText={content.post}
            />
          ))}
          <CodingComponent
            image={dev3}
            header={"DevOps"}
            name={"StorySpinner"}
            year={"2nd"}
            post={poster2}
          />
          <CodingComponent
            image={dev4}
            header={"AIExpert123"}
            name={"NutritionNinja"}
            year={"3rd"}
            post={poster1}
          />
          <VideoComponent url="https://www.youtube.com/embed/_w6N_nplmAw" />
          <CodingComponent
            image={dev6}
            header={"TechGuru_ML"}
            name={"BookWorm"}
            year={"3rd"}
            post={poster3}
          />

          <VideoComponent url="https://www.youtube.com/embed/FYErehuSuuw" />
          <CodingComponent
            image={dev5}
            header={"CodeMaster_AI"}
            name={"ContentCreator_Pro"}
            year={"sde@ZOHO"}
            post={poster4}
          />
          <VideoComponent url="https://www.youtube.com/embed/_w6N_nplmAw" />
          <CodingComponent
            image={dev3}
            header={"InnovationSeeker"}
            name={"MarketingMaven"}
            year={"2nd"}
            post={poster1}
          />

          <VideoComponent url="https://www.youtube.com/embed/_w6N_nplmAw" />
          <CodingComponent
            image={dev6}
            header={"DevOps"}
            name={"asjbx"}
            year={"2nd"}
            post={poster3}
          />
        </div>
      </div>

      <div className="col-10 col-md-4 d-flex flex-column justify-content-between h-100 Story">
        <div className="mb-5">
          <TopStories />
          <div className="mt-2 footer">
            <PromotionAD />
          </div>
        </div>
        <div className="mt-auto"></div>
      </div>
    </div>
  );
};
export default Home;
