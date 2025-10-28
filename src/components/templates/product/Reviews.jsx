"use client";

import Review from "@/components/modules/product/Review";
import React from "react";
import ReviewForm from "./ReviewForm";

function Reviews({ product, comments: initialComments }) {
  console.log("productId: ", product._id);

  const [comments, setComments] = React.useState(initialComments || []);

  const handleAddComment = (newComment) => {
    console.log("New comment added: ", newComment);
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const GetCommentCount = () => {
    return comments.filter((comment) => comment.isAccepted).length;
  };

  console.log("comments-Reviews: ", comments);
  return (
    <main dir="rtl" className="text-black flex w-full pt-5 mb-10">
      <div className="w-1/2 ">
        <h2 className="font-bold text-sm">
          {GetCommentCount()} دیدگاه برای {product.name}
        </h2>
        <div className="pl-4 pt-4 ">
          {comments.map(
            (comment) =>
              comment.isAccepted && <Review key={comment._id} {...comment} />
          )}
        </div>
      </div>
      <div className="pr-4">
        <h2 className="font-bold text-sm mb-5">دیدگاه خود را بنویسید</h2>
        <ReviewForm productId={product._id} onAddComment={handleAddComment} />
      </div>
    </main>
  );
}

export default Reviews;
