import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
           <img src="/assets/coin.png" 
           alt="" 
           className="singlePostImg" 
           />
           <h1 className="singlePostTitle">
               Blockchain Business
               <div className="singlePostEdit">
                   <i className="singlePostIcon fa fa-edit"></i>
                   <i className="singlePostIcon far fa-trash-alt"></i>
               </div>
           </h1>
           <div className="singlePostInfo">
               <span className="singlePostAuthor">Author:<b>Furkan</b>
               </span>
               <span className="singlePostDate">1 hour ago</span>
           </div>
           <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsum saepe expedita ut illum, illo dolorum! Consectetur beatae voluptas dolore repellendus nulla, odio voluptatum saepe perferendis molestiae voluptatibus, aliquid quia!
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum unde ullam incidunt molestias veritatis non obcaecati. Incidunt exercitationem possimus sequi ab quasi ullam ex ipsum vitae odio autem, hic aut?
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla maxime laboriosam ipsum cumque impedit accusantium minus possimus libero odit cum, amet tenetur nobis quod laborum eos velit voluptates. Repellendus, tempora.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae id assumenda minima mollitia corporis, blanditiis, delectus maiores itaque architecto illum iste quidem non odit magnam necessitatibus! Deleniti esse odio hic.
           </p>
       </div>
    </div>
  )
}
