import "./header.css"

export default function Header () {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Entelturk Forum</span>
        <span className="headerTitleSm">Blog</span>
      </div>
      <img
      className="headerImg"
      src="/assets/coin.jpeg"
      alt=""
      />
    </div>
  )
}
