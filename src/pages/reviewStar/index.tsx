import Star from "public/images/icon-star-rating.svg";
import React, { useState } from "react";
import { COLOR } from "src/shared/constants";

const ReviewPage = () => {
  const [hoverRating, setHoverRating] = useState(0);

  const readOnly = false;
  const rating = 2;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentRating = e.currentTarget.dataset.rating ?? 0;
    if (+currentRating === rating) {
      // setRating?.(0);
    } else {
      // setRating?.(+currentRating);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentRating = e.currentTarget.dataset.rating ?? 0;
    setHoverRating(+currentRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <button
          key={`${index}+item`}
          type="button"
          data-rating={index + 1}
          disabled={readOnly}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Star
            fill={index < (hoverRating || rating) ? COLOR.main : COLOR.black}
          />
        </button>
      ))}
    </div>
  );
};

export default ReviewPage;
