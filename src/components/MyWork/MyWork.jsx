import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      <h1 className="mywork-title">My Latest Work</h1>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-more">
        <p>Show More</p>
      </div>
    </div>
  );
};

export default MyWork;
