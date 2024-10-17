import Footer from "../../component/Footer/Footer";
import SubHero from "../../component/SubHero/SubHero";
import styles from "./Contact.module.css";
import Call from "../../assets/call.png";
import WaxTools from "../../assets/waxtools.png";
import Instagram from "../../assets/insta.png";
import Gmail from "../../assets/gmail.png";
import Location from "../../assets/location.png";

const Contact = () => {
  return (
    <div>
      <SubHero title="Contact Us" />
      <div className={styles.contactcont}>
        <div className={styles.contactmargin}>
          <div className={styles.contactmain}>
            <div className={styles.contactflex}>
              <div className={styles.mainimg}>
                <img src={WaxTools} alt="" />
              </div>
              <div>
                <div className={styles.textinfo}>
                  <div><img src={Call} alt="" /></div>
                  <p>+1 (317) 222-4515</p>
                </div>
                <div className={styles.textinfo}>
                  <div><img src={Instagram} alt="" /></div>
                  <p>@unlimitedbeautyempire</p>
                </div>
                <div className={styles.textinfo}>
                  <div className={styles.gmailimg}><img src={Gmail} alt="" /></div>
                  <div className={styles.decsription}>
                    <p>bookings@unlimitedbeautyempire.com</p>
                  </div>
                </div>
                <div className={styles.textinfo}>
                  <div><img src={Location} alt="" /></div>
                  <p>7106 Woodland Dr, Indianapolis, IN 46278</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
