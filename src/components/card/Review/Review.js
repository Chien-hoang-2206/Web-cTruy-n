import React from 'react'
import "./Review.css"
function Review(props) {
  const {
    username,
    star,
    date,
    chapterRead,
    content,
    like,
    reply,
    report
  } = props;

  return (
    <div className="review">
      <div className="review-header">
        <img src="favicon.ico" alt="Avatar" />
        <div className="review-header-info">
          <h4>{username} MemoEO</h4>
          <div className="star-date">
            <div className="review-header-stars">
              {star}
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="review-header-date">
              {date} 5 ngày trước
            </div>
            <div className="review-body-chapter">
            Chapter {chapterRead}
          </div>
          </div>
        </div>
      </div>
      <div className="review-body">
        <div className="review-body-info">

          <div className="review-body-content">
            {content} Nulla aute nisi quis nostrud reprehenderit nisi cillum mollit anim amet duis non esse.
            Eu laborum fugiat magna reprehenderit reprehenderit tempor aliquip nisi officia irure qui ad. Labore pariatur ex ut aliqua ad
            exercitation deserunt eu nisi do velit mollit consequat in quis. Adipisicing magna
          </div>
        </div>
        <div className="review-body-actions">
          <div className="review-body-likes">
            {like} <i class="fa-solid fa-heart"></i> 120
          </div>
          <div className="review-body-reply">
            {reply}  <i class="fa-sharp fa-solid fa-reply"></i> Trả lời
          </div>
          <div className="review-body-report">
            {report} <i class="fa-solid fa-flag"></i> Báo xấu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review