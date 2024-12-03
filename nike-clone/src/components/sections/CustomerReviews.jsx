import React from "react";
import { reviews } from "../../constants";
import { ReviewCard } from "../../components";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-center text-4xl">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-center items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
