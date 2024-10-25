import SubHero from "../../component/SubHero/SubHero";
import Footer from "../../component/Footer/Footer";
import { useState } from "react";
import styles from "./Getstarted.module.css";
import { Icon } from "@iconify-icon/react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const steps = [
  "Categories",
  "Select Schedule",
  "Input Personal Information",
];

const Getstarted = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  //   const handleSkip = () => {
  //     if (!isStepOptional(activeStep)) {
  //       // You probably want to guard against something like this,
  //       // it should never occur unless someone's actively trying to break something.
  //       throw new Error("You can't skip a step that isn't optional.");
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped((prevSkipped) => {
  //       const newSkipped = new Set(prevSkipped.values());
  //       newSkipped.add(activeStep);
  //       return newSkipped;
  //     });
  //   };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <SubHero title="Book Your Appointment" />
      <div className={styles.getstartedcont}>
        <div className={styles.getstartedmargin}>
          <h1>Please Select Appointment Details</h1>
          <Box
            sx={{
              width: "100%",
              padding: isSmallScreen ? "16px" : "32px", // Padding adjusts based on screen size
              boxSizing: "border-box",
            }}
          >
            <Stepper
              activeStep={activeStep}
              orientation={isSmallScreen ? "vertical" : "horizontal"}
            >
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption"></Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {activeStep === steps.length ? (
              <>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - Thank You
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </>
            ) : (
              <div className={styles.stepitem}>
                {activeStep === 0 && (
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <div className={styles.hairstyling}>
                        <div className={styles.aboutservice}>
                          <h4>Hair Styling</h4>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <div className={styles.face}>
                        <div className={styles.aboutservice}>
                          <h4>Facial Treatment</h4>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <div className={styles.nails}>
                        <div className={styles.aboutservice}>
                          <h4>Nails</h4>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <div className={styles.waxing}>
                        <div className={styles.aboutservice}>
                          <h4>Waxing</h4>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <div className={styles.massage}>
                        <div className={styles.aboutservice}>
                          <h4>Body Massage</h4>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <div className={styles.eyebrow}>
                        <div className={styles.aboutservice}>
                          <h4>Eyebrows</h4>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                )}

                {/* Conditionally render different content for steps other than the first */}
                  {activeStep === 1 && (
                    <Box sx={{ textAlign: "center", marginTop: "50px" }}>
                      {/* <Typography>Book your Schedule</Typography> */}
                      <a href="https://www.schedulicity.com/scheduling/UBE45J9" title="Online scheduling" target="_blank"><img src="https://cdn.schedulicity.com/images/user-widget-buttons/schedule-btn-huckleberry-med-v2.svg" alt="Online scheduling" title="Online scheduling" border="0" /></a>
                      <div style={{ position: "relative", backgroundColor: "white", width: "100%", height: "100%" }}>
                          {loading && (
                            <Icon icon="svg-spinners:tadpole" width="60" height="60"  style={{color:  "#FF69B4", marginTop: "100px" }} />
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
                              opacity: loading ? 0 : 1,  // Initially hidden until loading completes
                              transition: "opacity 0.3s ease" // Fade-in effect for smoothness
                            }}
                            onLoad={handleIframeLoad}
                            // eslint-disable-next-line react/no-unknown-property
                            allowTransparency="true"
                            frameBorder="0"
                          />
                        </div>
                    </Box>
                  )}
                {activeStep === 2 && (
                  <Typography>Contact Information</Typography>
                )}
                {/* Add more steps as needed */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    width: "250px",
                    margin: "auto",
                    alignItems: "center",
                    pt: 2,
                  }}
                >
                  <Button
                    onClick={handleNext}
                    sx={{
                      backgroundColor: "#897A64",
                      marginBlock: "30px",
                      paddingBlock: "16px",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#6e634e",
                      },
                      "& button": {
                        color: "#FFF !important",
                      },
                    }}
                    variant="contained"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Proceed"}
                  </Button>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      mr: 1,
                      display: activeStep > 0 ? "block" : "none",
                      backgroundColor: "transparent",
                      border: "1px solid #897A64",
                      padding: "16px 24px",
                      color: "black",
                    }}
                  >
                    Back
                  </Button>
                </Box>
              </div>
            )}
          </Box>
        </div>
      </div>
      {/* <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className={styles.hairstyling}>
            <div className={styles.aboutservice}>
              <h4>Hair Styling</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className={styles.face}>
            <div className={styles.aboutservice}>
              <h4>Facial Treatment</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className={styles.nails}>
            <div className={styles.aboutservice}>
              <h4>Nails</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className={styles.waxing}>
            <div className={styles.aboutservice}>
              <h4>Waxing</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className={styles.massage}>
            <div className={styles.aboutservice}>
              <h4>Body Massage</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className={styles.eyebrow}>
            <div className={styles.aboutservice}>
              <h4>Eyebrows</h4>
            </div>
          </div>
        </Grid>
      </Grid> */}
      <Footer />
    </div>
  );
};

export default Getstarted;
