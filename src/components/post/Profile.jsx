import { Link } from "react-router-dom";
import "./post.css";

export default function Profile({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              稅法
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              會計
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            我是xxx
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      經歷:
      .....
      </p>
    </div>
  );
}
