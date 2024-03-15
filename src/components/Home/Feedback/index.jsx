import React from "react";
import classNames from "./feedback.module.scss";

const Feedback = () => {
  return (
    <div className={classNames.feedback}>
      <div className={classNames.wrapper}>
        <div className={classNames.allReviews}>
          <div className={classNames.eachReview}>
            <div className={classNames.review}>
              “ Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eveniet at quo minus omnis consectetur. Error sunt laboriosam
              inventore in magnam dolor! ”
            </div>
            <div className={classNames.dividerBoxes}></div>
            <div className={classNames.profileImage}></div>
            <div className={classNames.profileName}>Sam altman</div>
          </div>
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
            <input type="text" placeholder="Your Name" />
            <textarea type="text" placeholder="Message" />
            <div className={classNames.submitBtn}>Submit</div>
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
                <div>Thursday - Friday - Saturday</div>
                <div>8.00 am to 10.00 pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
