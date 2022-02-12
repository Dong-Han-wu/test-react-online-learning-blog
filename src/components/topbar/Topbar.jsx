import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              首頁
            </Link>
          </li>
          <li className="topListItem">關於我們</li>
          <li className="topListItem">結帳教學</li>
          <li className="topListItem">
          <Link className="link" to="/classlist">
            課程清單
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
            文章列表
            </Link>
          </li>
          {user && <li className="topListItem">登出</li>}
        </ul>
      </div>
      <div className="topRight">
          <i className="topSearchIcon fas fa-search"></i>
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                登入
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                註冊
              </Link>
            </li>
          </ul>
        )}
      
      </div>
    </div>
  );
}
