import styles from "./CoreValue.module.css";
import Elegance from "../../assets/elegance.svg";
import Diamond from "../../assets/diamond.svg";
import Holistic from "../../assets/holistic.svg";
import TourImg from "../../assets/tour.png";
import { Grid2, Box } from "@mui/material";
import Button from "../Button/Button";
import { useState } from "react";
import CarouselOne from "../../assets/carousel1.png";
import CarouselTwo from "../../assets/carousel2.png";
import CarouselThree from "../../assets/carousel3.png";
import CarouselFour from "../../assets/carousel4.png";
import CarouselFive from "../../assets/carousel5.png";
import CarouselSix from "../../assets/carousel6.png";
import CarouselSeven from "../../assets/carousel7.png";
import CarouselEight from "../../assets/carousel8.png";
import CarouselNine from "../../assets/carousel9.png";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../Modal";
import { Icon } from "@iconify-icon/react";

const CoreValue = () => {
  const [loading, setLoading] = useState(true);
  const [scheduleModal, setScheduleModal] = useState(false);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleSchduleModal = () => {
    setScheduleModal(!scheduleModal);
  };

  const handleCloseModal = () => {
    setScheduleModal(false);
  };
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <div className={styles.valuecont}>
      <div className={styles.valuemargin}>
        <div className={styles.marginonly}>
          <div className={styles.elevateheader}>
            <h4>ELEVATE YOUR JOURNEY</h4>
            <p>
              Every detail in our newly built space—from our
              luxurious stations to our comfortable waiting areas—was designed with your experience in mind.
            </p>
          </div>
          <div className={styles.aboutplayer}>
            <img src={TourImg} alt="image player" />
          </div>
          <div className={styles.valueheader}>
            <h4>WHAT SETS US APART?</h4>
            {/* <p>
              We are committed to nurturing an environment where elegance and
              serenity converge to embrace your well-being.
            </p> */}
          </div>
          <div className={styles.corevaluebcg}>
            <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
              <Grid2 item lg={4} md={4} sm={4} xs={12}>
                <div className={styles.avaluecont}>
                  <img src={Elegance} alt="" />
                  <h4>CONVENIENCE</h4>
                  <p>
                    No more multiple appointments at different locations—enjoy
                    all your beauty services in one day, under one roof.
                  </p>
                </div>
              </Grid2>
              <Grid2 item lg={4} md={4} sm={4} xs={12}>
                <div className={styles.avaluecont}>
                  <img src={Diamond} alt="" />
                  <h4>EXPERT TEAM</h4>
                  <p>
                    Our experienced professionals are passionate,
                    highly skilled, and committed to quality.
                  </p>
                </div>
              </Grid2>
              <Grid2 item lg={4} md={4} sm={4} xs={12}>
                <div className={styles.avaluecont}>
                  <img src={Holistic} alt="" />
                  <h4>LUXURY EXPERIENCE</h4>
                  <p>
                    From the moment you walk in, you’ll feel the difference. We offer a high-end, personalized experience with every visit. We invite you to experience beauty without limits.
                     At Unlimited Beauty Empire, we’re here to bring your vision to life with ease, luxury, and convenience.
                  </p>
                </div>
              </Grid2>
            </Grid2>
          </div>
          {/* <Grid2 container spacing={2}>
            <Grid2 item lg={4} md={6} sm={12} xs={12}>
              <img src="" alt="" />
            </Grid2>
          </Grid2> */}

          <div className={styles.logos}>
            <div className={styles.logos_slide}>
              <img src={CarouselOne} />
              <img src={CarouselTwo} />
              <img src={CarouselThree} />
              <img src={CarouselFour} />
              <img src={CarouselFive} />
              <img src={CarouselSix} />
              <img src={CarouselSeven} />
              <img src={CarouselEight} />
              <img src={CarouselNine} />
            </div>
            <div className={styles.logos_slide}>
              <img src={CarouselOne} />
              <img src={CarouselTwo} />
              <img src={CarouselThree} />
              <img src={CarouselFour} />
              <img src={CarouselFive} />
              <img src={CarouselSix} />
              <img src={CarouselSeven} />
              <img src={CarouselEight} />
              <img src={CarouselNine} />
            </div>
          </div>
          {/* <div className={styles.scroll_container}>
            <div className={styles.scroll_content}>
              <div className={styles.carouselitem}>
                <img src={CarouselOne} />
              </div>
              <div className={styles.carouselitem}>
                <img src={CarouselTwo} />
              </div>
              <div className={styles.carouselitem}>
                <img src={CarouselThree} />
              </div>
              <div className={styles.carouselitem}>
                <img src={CarouselFour} />
              </div>
              <div className={styles.carouselitem}>
                <img src={CarouselFive} />
              </div>
              <div className={styles.carouselitem}>
                <img src={CarouselSix} />
              </div>
              <div className={styles.carouselitem}>
                <img src={CarouselSeven} />
              </div>
              <div className={styles.carouselitem}>
                <img src={CarouselEight} />
              </div>
              <div className={styles.carouselitem}>
                <img src={CarouselNine} />
              </div>
            </div>
          </div> */}
          <div className={styles.unveil}>
            <h4>
              Ready to unveil your true radiance? Look no further than Unlimite
              d Beauty Empire, your oasis of elegance & serenity. Our array of
              curated services is designed to elevate your spirit.
            </h4>
            <div className={styles.unveilbtn}>
              <Button
                onClick={handleSchduleModal}
                title="BOOK YOUR VISIT"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title=""
        modalContent={
          <>
            <Box sx={{ textAlign: "center", marginTop: "50px" }}>
              <a
                href="https://www.schedulicity.com/scheduling/UBE45J9"
                title="Online scheduling"
                target="_blank"
              >
                <img
                  src="https://cdn.schedulicity.com/images/user-widget-buttons/schedule-btn-huckleberry-med-v2.svg"
                  alt="Online scheduling"
                  title="Online scheduling"
                  border="0"
                />
              </a>
              <div
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  width: "100%",
                  height: "100%",
                }}
              >
                {loading && (
                  <Icon
                    icon="svg-spinners:tadpole"
                    width="60"
                    height="60"
                    style={{ color: "#FF69B4", marginTop: "100px" }}
                  />
                )}
                <iframe
                  title="Schedulicity Widget"
                  src="//www.schedulicity.com/scheduling/UBE45J9/services?embed=true"
                  style={{
                    border: "none",
                    width: "100%",
                    height: "100%",
                    minHeight: "480px",
                    padding: "0",
                    margin: "20px 0px 0px 0px",
                    zIndex: "1",
                    opacity: loading ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                  onLoad={handleIframeLoad}
                  // eslint-disable-next-line react/no-unknown-property
                  allowTransparency="true"
                  frameBorder="0"
                />
              </div>
            </Box>
          </>
        }
        modalFooter={
          <>
          </>
        }
        isopen={scheduleModal}
        closeModal={handleCloseModal}
      />
    </div>
  );
};

export default CoreValue;
