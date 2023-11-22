import React from 'react';
import './BlogSecondPage.css';
import SecondBlog from '../../assets/blogImage/secondblog.jpg';
import { Scrollbars } from 'react-custom-scrollbars';
import { CommentSection, SecondBlogData } from '../../data/SecondBlogData';
function BlogSecondPage() {
  return (
    <Scrollbars>
      {SecondBlogData.map((item) => (
        <div className="second-blog-main">
          <div className="second-blog-image">
            <img src={SecondBlog} alt="blogImg" />
          </div>
          <div className="center">
            <div className="blogSecond-content">
              <div className="second-blog-heading">
                <span className="second-blog-cate">{item.category}</span>
                <h1>{item.title}</h1>
                <span className="second-blog-date">{item.date}</span>
              </div>
              <div className="second-blog-paragraph">
                <p>{item.paragraph1}</p>
                <p>{item.paragraph2}</p>
                <blockquote>{item.paragraph3}</blockquote>
                <p>{item.paragraph4}</p>
              </div>
              {/* comment section start */}
              <div className="post-comment-sec">
                <h4>Post Comments</h4>
                {CommentSection.map((item) => (
                  <div className="user-comment">
                    <div className="comment-avatar">{item.avatar}</div>
                    <div className="user-intro-comment">
                      <h6 className="author-comment-sec">{item.name}</h6>
                      <span className="comment-date">{item.date}</span>
                      <p className="user-comment-para">{item.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* comment section end */}

              {/* Leave reply section start */}
              <div className="reply-section">
                <h4>Leave A Reply</h4>
                <form
                  className="reply-form"
                  id="contact-form"
                  action="https://formspree.io/f/mayzgazv"
                  method="POST"
                >
                  <div className="reply-form-input-flex">
                    {/* <div className="chch"> */}
                    <div className="reply-form-input-name">
                      <input type="text" required name="name" />
                      <label for="">Name</label>
                    </div>
                    <div className="reply-form-input-name name1">
                      <input type="email" required name="email" />
                      <label for="">Email</label>
                    </div>
                    {/* </div> */}
                  </div>
                  <textarea
                    className="reply-form-textarea"
                    name="message"
                    rows="10"
                    placeholder="How can we help you?"
                  ></textarea>
                  <div className="button-main">
                    <button type="submit" value="send" className="btn-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Leave reply section end */}
            </div>
          </div>
        </div>
      ))}
    </Scrollbars>
  );
}

export default BlogSecondPage;
