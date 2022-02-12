import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles" style={{ whiteSpace: 'pre-wrap'}} >
        <span className="headerTitleSm">學得快，學得輕鬆，隨時隨地，考取執照</span>
        <span className="headerTitleLg">了解更多......</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
       
        alt=""
      />
    </div>
  );
}
