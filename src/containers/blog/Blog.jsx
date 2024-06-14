import { Article } from '../../componennts'
import{ blog01, blog02, blog03, blog04, blog05} from './index'
import './blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding " id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgURL={blog01} date="Jun 27, 2025"   text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgURL={blog02} date="Jun 27, 2025"   text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog03} date="Jun 27, 2025"   text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog04} date="Jun 27, 2025"   text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog05} date="Jun 27, 2025"   text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
}

export default Blog