import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BACKENDURL } from "../../../../assets/constant";
import classNames from "../feedback.module.scss";
import "./feedbackSub.scss";
import { Toastify } from "../../../Custom";
import axios from "axios";

const FeedbackCarousal = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [allReviewsAvailable, setAllReviewsAvailable] = useState([]);

  function getAllReviews() {
    axios
      .get(BACKENDURL + `/review`)
      .then((response) => {
        if (response?.data?.data?.length > 0) {
          let approved = response?.data?.data?.filter((eachItem) => {
            return eachItem?.approved === "true";
          });
          setAllReviewsAvailable(approved);
        }
      })
      .catch((error) => {
        console.log(error, "all reviews error");
        Toastify(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
          "error",
          "error"
        );
      });
  }

  useEffect(() => {
    getAllReviews();
  }, []);
  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {Array.isArray(allReviewsAvailable) && allReviewsAvailable?.length > 0
            ? allReviewsAvailable?.map((eachItem, index) => {
                return (
                  <div className={`${classNames.eachReview} embla__slide`}>
                    <div className={classNames.review}>
                      “ {eachItem?.message} ”
                    </div>
                    <div className={classNames.dividerBoxes}></div>
                    <div className={classNames.profileImage}>
                      {eachItem?.name?.charAt(0)}
                    </div>
                    <div className={classNames.profileName}>
                      {eachItem?.name}
                    </div>
                  </div>
                );
              })
            : ""}
          {/* <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div> */}
        </div>
      </div>
    </>
  );
};

export default FeedbackCarousal;
