import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import { Typography, styled } from "@mui/material";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, Paper, Button, Menu, MenuItem } from "@mui/material";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FormHelperText } from "@mui/material";
import { createTheme } from "@mui/material";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#ff0055",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Home = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box sx={{ background: "black", padding: "40px" }}>
        <Box sx={{ background: "white", padding: "40px" }}>
          <Box sx={{ background: "black", height: "100%" }}>
            <Box
              sx={{
                background: "#ff0055",
                width: "fit-content",
                margin: "auto",
                textAlign: "center",
                padding: "17px",
                borderRadius: "0px 0px 5px 5px",
              }}
            >
              <Typography sx={{ color: "white" }}>
                <h5>Your Current Plan</h5>
              </Typography>
              <Typography sx={{ color: "white" }}>
                <h4>Starter Trial &#8226; 500 MAUs</h4>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
              }}
            >
              <Typography sx={{ color: "white", fontFamily: "Inter" }}>
                <h1>Choose a plan</h1>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                fontWeight: "400",
              }}
            >
              <FormControl component="fieldset">
                <FormGroup
                  aria-label="position"
                  row
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <FormControlLabel
                    value="start"
                    label="Billed Monthly"
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    labelPlacement="start"
                  />
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "17px", fontWeight: "200" }}
                  >
                    Billed Anually
                  </Typography>
                </FormGroup>
              </FormControl>
            </Box>
            <Container maxWidth="md">
              <Grid container spacing={4}>
                <Grid
                  item
                  lg={4}
                  xs={12}
                  sx={{ marginBottom: "50px", marginTop: "57px" }}
                >
                  <Box
                    sx={{
                      fontFamily: "Inter",
                      color: "white",
                      background: "#191920",
                      height: "400px",
                      padding: "14px",
                      textAlign: "center",
                      borderRadius: "6px",
                      "@media (max-width:400px)": {
                        padding: "3px",
                        height: "430px",
                      },
                      "@media (max-width:360px)": {
                        padding: "3px",
                        height: "450px",
                      },
                      "@media (max-width:335px)": {
                        padding: "3px",
                        height: "470px",
                      },
                      "@media (max-width:320px)": {
                        padding: "3px",
                        height: "510px",
                      },
                      "@media (max-width:301px)": {
                        padding: "3px",
                        height: "560px",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontSize: "20px", fontWeight: "600" }}
                    >
                      Starter
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "40px",
                        fontWeight: "600",
                        paddingTop: "15px",
                      }}
                    >
                      $19
                    </Typography>
                    <List
                      sx={{
                        fontSize: "15px",
                        fontWeight: "400",
                        pt: 4,
                        li: {
                          listStyle: "disc",
                          "&::marker": { color: "#ff0055" },
                        },
                      }}
                    >
                      <ListItem>
                        <li />
                        500 MAUs
                      </ListItem>
                      <ListItem>
                        <li />3 Projects
                      </ListItem>
                      <ListItem>
                        <li />
                        Unlimited Guides
                      </ListItem>
                      <ListItem>
                        <li />
                        Unlimited Flows
                      </ListItem>
                      <ListItem>
                        <li />
                        Unlimited Branded Themes
                      </ListItem>
                      <ListItem>
                        <li />
                        Email Support
                      </ListItem>
                    </List>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{
                        "@media (max-width:350px)": {
                          padding: "2px",
                        },
                      }}
                    >
                      Choose Plan
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={4}
                  xs={12}
                  sx={{ marginBottom: "50px", marginTop: "57px" }}
                >
                  <Box
                    sx={{
                      fontFamily: "Inter",
                      color: "white",
                      background: "#191920",
                      height: "400px",
                      padding: "14px",
                      textAlign: "center",
                      borderRadius: "6px",
                      "@media (max-width:400px)": {
                        padding: "3px",
                        height: "430px",
                      },
                      "@media (max-width:360px)": {
                        padding: "3px",
                        height: "470px",
                      },
                      "@media (max-width:335px)": {
                        padding: "3px",
                        height: "540px",
                      },
                      "@media (max-width:320px)": {
                        padding: "3px",
                        height: "560px",
                      },
                      "@media (max-width:301px)": {
                        padding: "3px",
                        height: "580px",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Pro
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "40px",
                        fontWeight: "600",
                        paddingTop: "15px",
                      }}
                    >
                      $99
                      <span
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        / month
                      </span>
                    </Typography>
                    <FormControl
                      sx={{
                        m: 1,
                        minWidth: 120,
                      }}
                    >
                      <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&:focus, &:hover": {
                              color: "secondary",
                              outlineColor: "secondary !important",
                            },
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "#FFF",
                            padding: "6px 21px",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>2500 MAUs</em>
                        </MenuItem>
                        <MenuItem value={10}>First</MenuItem>
                        <MenuItem value={20}>Second</MenuItem>
                        <MenuItem value={30}>Third</MenuItem>
                      </Select>
                    </FormControl>
                    <List
                      sx={{
                        fontSize: "15px",
                        fontWeight: "400",
                        pt: "3",
                        li: {
                          listStyle: "disc",
                          "&::marker": { color: "#ff0055" },
                        },
                      }}
                    >
                      <ListItem>
                        <li />
                        All Starter Features
                      </ListItem>
                      <ListItem>
                        <li />
                        Unlimited Projects
                      </ListItem>
                      <ListItem>
                        <li />
                        Unlimited fully customizable themes
                      </ListItem>
                      <ListItem>
                        <li />A dedicated customer success manager
                      </ListItem>
                    </List>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        "@media (max-width:350px)": {
                          padding: "2px",
                        },
                      }}
                    >
                      Choose Plan
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={4}
                  xs={12}
                  sx={{ marginBottom: "50px", marginTop: "57px" }}
                >
                  <Box
                    sx={{
                      fontFamily: "Inter",
                      color: "white",
                      background: "#191920",
                      padding: "14px",
                      height: "400px",
                      textAlign: "center",
                      borderRadius: "6px",
                      "@media (max-width:418px)": {
                        padding: "3px",
                        height: "480px",
                      },
                      "@media (max-width:360px)": {
                        padding: "3px",
                        height: "530px",
                      },
                      "@media (max-width:335px)": {
                        padding: "3px",
                        height: "560px",
                      },
                      "@media (max-width:320px)": {
                        padding: "3px",
                        height: "590px",
                      },
                      "@media (max-width:301px)": {
                        padding: "3px",
                        height: "610px",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontSize: "20px", fontWeight: "600" }}
                    >
                      Enterprise
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "40px",
                        fontWeight: "600",
                        paddingTop: "15px",
                      }}
                    >
                      Let's Talk!
                    </Typography>
                    <List
                      sx={{
                        fontSize: "15px",
                        fontWeight: "400",
                        pt: 6,
                        li: {
                          listStyle: "disc",
                          "&::marker": { color: "#ff0055" },
                        },
                      }}
                    >
                      <ListItem>
                        <li />
                        All Pro Features
                      </ListItem>
                      <ListItem>
                        <li />
                        Unlimited MAUs
                      </ListItem>
                      <ListItem>
                        <li />
                        Dedicated Environment
                      </ListItem>
                      <ListItem>
                        <li />
                        Enterprise Account Administration
                      </ListItem>
                      <ListItem>
                        <li />
                        Premium Support & Services
                      </ListItem>
                    </List>
                    <Button variant="outlined" color="secondary">
                      Contact Us
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
