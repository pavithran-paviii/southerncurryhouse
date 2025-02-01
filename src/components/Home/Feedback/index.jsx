import React, { useState } from "react";
import classNames from "./feedback.module.scss";
import axios from "axios";
import { Toastify } from "../../Custom";
import { BACKENDURL } from "../../../assets/constant";
import FeedbackCarousal from "./sub/FeedbackCarousal";

const Feedback = () => {
  const [reviewData, setReviewData] = useState({});

  async function submitReview() {
    try {
      let response = await axios.post(`${BACKENDURL}/review`, reviewData);
      Toastify(response?.data?.message, "success");
      setTimeout(() => {
        window?.location?.reload();
      }, 1500);
    } catch (error) {
      console.log(error?.message, "Submit review server error");
      Toastify(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
        "error",
        "error"
      );
    }
  }

  return (
    <div className={classNames.feedback}>
      <div className={classNames.wrapper}>
        <div className={classNames.allReviews}>
          <FeedbackCarousal />
        </div>
        <div className={classNames.newReview}>
          <div className={classNames.writeReview}>
            <div className={classNames.title}>
              Write about us
              <div className={classNames.desc}>
                Each <span>review</span> counts which helps us improve for
                <span> better</span>
              </div>
            </div>
            <input
              type="text"
              placeholder="Your Name"
              onChange={(event) => {
                setReviewData((prev) => {
                  return { ...prev, name: event?.target?.value };
                });
              }}
            />
            <textarea
              type="text"
              placeholder="Message"
              onChange={(event) => {
                setReviewData((prev) => {
                  return { ...prev, message: event?.target?.value };
                });
              }}
            />
            <div className={classNames.submitBtn} onClick={submitReview}>
              Submit
            </div>
          </div>
          <div className={classNames.contactBox}>
            <div className={classNames.title}>Contact Us</div>
            <div className={classNames.phone}>
              <div className={classNames.title}>Queries</div>
              <div className={classNames.value}>+12506832178</div>
            </div>
            <div className={classNames.divider}></div>
            <div className={classNames.otherDetails}>
              <div className={classNames.title}>Location</div>
              <div className={classNames.value}>
                <div>416 2nd Street</div>
                <div>West(W) Revelstoke BC V0E 2S0</div>
              </div>
            </div>
            <div className={classNames.otherDetails}>
              <div className={classNames.title}>Timings</div>
              <div className={classNames.value}>
                <div>Thursday - Friday - Saturday - Sunday - Monday</div>
                <div>05.00 pm to 08.00 pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
