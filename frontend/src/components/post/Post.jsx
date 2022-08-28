import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img 
        className='postImg'
        src="/assets/header.png" 
        alt="" 
        />
        <div className='postInfo'>
            <div className="postCats">
                <span className="postCat">Blockchain</span>
                <span className="postCat">Bitcoin</span>
            </div>
            <span className="postTitle">
                Blockchain Business
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates perspiciatis, debitis repellendus similique 
          molestiae eligendi eveniet corrupti ex explicabo
           numquam autem! Saepe ut 
          dolore minus ab, doloremque libero quos fugiat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam alias molestiae voluptas aliquam dignissimos voluptatum eos quasi omnis mollitia ipsa, fugit sed reprehenderit. Alias, omnis at? Inventore, soluta fuga.
        </p>
    </div>
  )
}
