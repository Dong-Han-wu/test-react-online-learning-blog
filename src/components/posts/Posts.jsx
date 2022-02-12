import Post from "../post/Post";
import Post2 from "../post/Post2";
import Profile from "../post/Profile";
import "./posts.css";

export default function Posts() {
  return (
    <div >
      <div className="posts">
        <Post img="https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <Post2 img="https://images.pexels.com/photos/7821674/pexels-photo-7821674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      </div>
      <div className="video-responsive">
      <iframe 
      width="560" height="315" 
      src="https://www.youtube.com/embed/VzeiLT5XNcM" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen="true">
      </iframe>
      </div>
      <hr />
      <div className="posts2">
        <Profile img="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <Profile img="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      </div>
    </div>
  );
}
