import './article.css'
const Article = ({imgURL, date, text}) => {
  return (
    <div className="gpt3__blog-container_artice">
      <div className="gpt3__blog-container_artice-image">
        <img src={imgURL} alt="blog-img" />
      </div>
      <div className="gpt3__blog-container_artice-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );}

export default Article
