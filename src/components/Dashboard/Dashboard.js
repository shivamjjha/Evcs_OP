
import React, { useState, useEffect } from 'react';
// import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
// import {withRouter } from 'react-router'
import { useLocation } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import myStyles from './myStyles'
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import LoginAppbar from './LoginAppbar'
import LoginDrawer from './LoginDrawer';
import MainPage from './MainPage';
import Sign from '../Sign'
import FileAndLocation from '../FileAndLocation'
import UserProfile from './UserProfile';
// import AlertDialogueSlide from './AlertDialogueSlide'
import './styles.css'

// const color = "#f00";
// const black = "#000000";
// const theme = createMuiTheme({
//   palette: {
//     common: { black: color, white: color },
//     primary: { main: color, dark: color, light: color },
//     text: { primary: black, secondary: black },
//   },
// });

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        EVCS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Dashboard(
  {
    state,
    theme,
    handleChange,
    handleSubmit,
    changeState,
    setProfileUpdateToTrue,
    handleEmail,
    handleName,
    setState,
    showAadhar,
    handleGSTIN,
    handleAadhar,
    disabled,
    onClick,
    handleAccountHolder,
    handleAccountNumber,
    handleifsc,
    handleLocation,
    handlePlace,
    handleUseGPS,
    handleCharger
  }
) {
  // let location = useLocation();
  // let { id } = location.state || { from: { pathname: "/" } }
  const classes = myStyles();

  let profileReady =
    !isNaN(state.mobileNo)
    && state.aadharNumber.length === 12
    && state.gstin.length === 15
    && (
      state.accountHolder.length > 0 &&
      state.accountNumber.length > 0 &&
      state.ifsc.length === 11
    )
    && state.place.length > 0
    && Object.values(state.chargers).some(v => v);

  console.log('profile ready: ', profileReady);

  const [open, setOpen] = useState(false);
  const [online, setOnline] = useState(true);
  const [counter, setCounter] = useState(0);
  // const [firstTimeLogin, setFirstTimeLogin] = useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   if ()
  //     setShowconfirm(true);
  //   // console.log(id);
  //   // console.log(`Props:`, JSON.stringify(location));
  // }, [profileReady]);

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const toggleView = () => {
    switch (counter) {
      case 0:
        return (
          <MainPage
            confirm={!profileReady}
            setCounter={setCounter}
          />
        );

      case 1:
        return (
          <UserProfile
            state={state}
            theme={theme}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            changeState={changeState}
            activelog={state.activelog}
            profileUpdated={state.profileUpdated}
            setProfileUpdateToTrue={setProfileUpdateToTrue}
            email={state.email}
            handleEmail={handleEmail}
            name={state.name}
            handleName={handleName}
            showAadhar={showAadhar}
            handleGSTIN={handleGSTIN}
            handleAadhar={handleAadhar}
            disabled={disabled}
            onClick={onClick}
            handleAccountHolder={handleAccountHolder}
            handleAccountNumber={handleAccountNumber}
            handleifsc={handleifsc}
            setState={setState}
            handleLocation={handleLocation}
            handlePlace={handlePlace}
            useGPS={state.useGPS}
            handleUseGPS={handleUseGPS}
            chargers={state.chargers}
            handleCharger={handleCharger}
          />
        );

      default:
        break;
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <LoginAppbar
        open={open}
        online={online}
        setOnline={setOnline}
        handleDrawerOpen={handleDrawerOpen}
      />
      <LoginDrawer
        open={open}
        setCounter={setCounter}
        handleDrawerClose={handleDrawerClose}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {toggleView()}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
export default (Dashboard);
