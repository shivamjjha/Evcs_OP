import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import MobileNumber from "../MobileNumber";
import FirstForm from '../FirstForm';
import BankingDetails from '../BankingDetails';
import ChooseOptions from '../ChooseOptions';
import TypeOfChargers from '../TypeOfChargers';

export default function UserProfile(
  {
    state,
    theme,
    handleChange,
    handleSubmit,
    changeState,
    setProfileUpdateToTrue,
    handleEmail,
    handleName,
    showAadhar,
    handleGSTIN,
    handleAadhar,
    disabled,
    onClick,
    handleAccountHolder,
    handleAccountNumber,
    handleifsc,
    setState,
    handleLocation,
    handlePlace,
    handleUseGPS,
    handleCharger
  }
) {
  return (
    <>
      <Grid container spacing={3}>
        <Divider variant="middle" />
        <Grid item xs={12}>
          <MobileNumber
            theme={theme}
            mobileNo={state.mobileNo}
            handleChange={handleChange}
            login={state.login}
            handleSubmit={handleSubmit}
            changeState={changeState}
            activelog={state.activelog}
            profileUpdated={state.profileUpdated}
            setProfileUpdateToTrue={setProfileUpdateToTrue}
            email={state.email}
            handleEmail={handleEmail}
            name={state.name}
            handleName={handleName}
            onProfilePage={state.onProfilePage}
          />
        </Grid>
        <hr />
        <Grid item xs={12}>
          <FirstForm
            theme={theme}
            showAadhar={showAadhar}
            gstin={state.gstin}
            handleGSTIN={handleGSTIN}
            handleAadhar={handleAadhar}
            aadharNumber={state.aadharNumber}
            changeState={changeState}
            onProfilePage={state.onProfilePage}
          />
        </Grid>
        <hr />
        <Grid item xs={12}>
          <BankingDetails
            theme={theme}
            disabled={disabled}
            name={state.accountHolder}
            ifsc={state.ifsc}
            accountNumber={state.accountNumber}
            handleName={handleAccountHolder}
            handleAccountNumber={handleAccountNumber}
            handleifsc={handleifsc}
            setState={setState}
            changeState={changeState}
            onClick={onClick}
            onProfilePage={state.onProfilePage}
          />
        </Grid>
        <hr />
        <Grid item xs={12}>
          <ChooseOptions
            changeState={changeState}
            theme={theme}
            place={state.place}
            onProfilePage={state.onProfilePage}
            location={state.location}
            handleLocation={handleLocation}
            handlePlace={handlePlace}
            useGPS={state.useGPS}
            handleUseGPS={handleUseGPS}
          />
        </Grid>
        <hr />
        <Grid item xs={12}>
          <TypeOfChargers
            theme={theme} changeState={changeState}
            onProfilePage={state.onProfilePage}
            handleCharger={handleCharger}
            chargers={state.chargers}
          />
        </Grid>
      </Grid>
    </>
  );
}
