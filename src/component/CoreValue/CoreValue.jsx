import styles from "./CoreValue.module.css";
import Elegance from "../../assets/elegance.svg";
import Diamond from "../../assets/diamond.svg";
import Holistic from "../../assets/holistic.svg";
import { Grid2 } from "@mui/material";
import Button from "../Button/Button";
import CarouselOne from "../../assets/carousel1.png";
import CarouselTwo from "../../assets/carousel2.png";
import CarouselThree from "../../assets/carousel3.png";
import CarouselFour from "../../assets/carousel4.png";
import CarouselFive from "../../assets/carousel5.png";
import CarouselSix from "../../assets/carousel6.png";
import CarouselSeven from "../../assets/carousel7.png";
import CarouselEight from "../../assets/carousel8.png";
import CarouselNine from "../../assets/carousel9.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CoreValue = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className={styles.valuecont}>
      <div className={styles.valuemargin}>
        <div className={styles.marginonly}>
          <div className={styles.valueheader}>
            <h4>OUR CORE VALUE</h4>
            <p>
              We are committed to nurturing an environment where elegance and
              serenity converge to embrace your well-being.
            </p>
          </div>
          <div className={styles.corevaluebcg}>
            <Grid2 container spacing={2}>
              <Grid2 item lg={4} md={6} sm={12} xs={12}>
                <div className={styles.avaluecont}>
                  <img src={Elegance} alt="" />
                  <h4>Elegance in Every Detail</h4>
                  <p>
                    We believe that elegance resides in the finest details. From
                    the carefully curated décor to the precision of our
                    treatments, we infuse elegance into every aspect of your
                    experience.
                  </p>
                </div>
              </Grid2>
              <Grid2 item lg={4} md={6} sm={12} xs={12}>
                <div className={styles.avaluecont}>
                  <img src={Diamond} alt="" />
                  <h4>Serenity as a Sanctuary</h4>
                  <p>
                    Serenity is more than just a state of mind its a sanctuary
                    we provide for your soul. Our tranquil ambiance and soothing
                    therapies are designed to transport you to a realm of calm.
                  </p>
                </div>
              </Grid2>
              <Grid2 item lg={4} md={6} sm={12} xs={12}>
                <div className={styles.avaluecont}>
                  <img src={Holistic} alt="" />
                  <h4>Holistic Wellness Fusion</h4>
                  <p>
                    We view wellness as a holistic journey encompassing body,
                    mind, and spirit. Our approach fuses beauty with wellness,
                    offering treatments that rejuvenate not only your skin but
                    also your senses.
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
          <div className={styles.carousel}>
            <Carousel responsive={responsive}>
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
            </Carousel>
          </div>
          <div className={styles.unveil}>
            <h4>
              Ready to unveil your true radiance? Look no further than Unlimite
              d Beauty Empire, your oasis of elegance & serenity. Our array of
              curated services is designed to elevate your spirit.
            </h4>
            <div className={styles.unveilbtn}>
              <Button title="BOOK YOUR VISIT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
