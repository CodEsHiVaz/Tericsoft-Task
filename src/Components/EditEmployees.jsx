import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Button, FormLabel, Radio, RadioGroup } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import axios from "axios";
const EditEmployees = (props) => {
  const [gender, setGender] = useState(props.sendForEdit.gender);
  const [hobbies, sethobbies] = useState([]);
  const [hbl, sethbl] = useState(props.sendForEdit.hobbies);
  const [dob, setDob] = useState(props.sendForEdit.date_of_birth);
  const [name, setName] = useState(props.sendForEdit.full_name);
  const [phone, setPhone] = useState(props.sendForEdit.phone);
  const [email, setEmail] = useState(props.sendForEdit.email);
  const handelcheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      sethobbies((prev) => [...prev, value]);
    } else if (!checked) {
      const newdatad = hobbies.filter((elem) => elem !== value);
      sethobbies(() => newdatad);
    }
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    props.handleClickOpen1();
    axios
      .patch(`${process.env.REACT_APP_API_URL}/${props.sendForEdit.id}`, {
        full_name: name,
        phone: phone,
        email: email,
        gender: gender,
        date_of_birth: dob,
        hobbies: hobbies.length ? hobbies : hbl,
      })
      .then((res) => {
        console.log(res);
        props.handleClose1();
        props.handleClose();
      })
      .catch((err) => {
        alert("update failed");
        props.handleClose1();
        props.handleClose();
      });
  };
  return (
    <>
      <form onSubmit={(e) => handelSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              value={name}
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              label="Email id"
              type="email"
              value={email}
              fullWidth
              autoComplete="email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => setPhone(e.target.value)}
              id="mobileNumber"
              name="mobile"
              label="mobile"
              value={phone}
              fullWidth
              autoComplete="mobile number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disableFuture
                label="Select Date of Birth"
                openTo="year"
                views={["year", "month", "day"]}
                value={dob}
                onChange={(newValue) => {
                  setDob(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            {hbl[0] ? (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handelcheckbox}
                    color="secondary"
                    name="saveAddress"
                    value={hbl[0]}
                  />
                }
                label={hbl[0]}
              />
            ) : (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handelcheckbox}
                    color="secondary"
                    name="saveAddress"
                    value="cricket"
                  />
                }
                label="cricket"
              />
            )}
            {hbl[1] ? (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handelcheckbox}
                    color="secondary"
                    name="saveAddress"
                    value={hbl[1]}
                  />
                }
                label={hbl[1]}
              />
            ) : (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handelcheckbox}
                    color="secondary"
                    name="saveAddress"
                    value="traveling"
                  />
                }
                label="traveling"
              />
            )}
            {hbl[2] ? (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handelcheckbox}
                    color="secondary"
                    name="saveAddress"
                    value={hbl[2]}
                  />
                }
                label={hbl[2]}
              />
            ) : (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handelcheckbox}
                    color="secondary"
                    name="saveAddress"
                    value="swiming"
                  />
                }
                label="swiming"
              />
            )}
            {hbl[3] ? (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handelcheckbox}
                    color="secondary"
                    name="saveAddress"
                    value={hbl[3]}
                  />
                }
                label={hbl[3]}
              />
            ) : (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handelcheckbox}
                    color="secondary"
                    name="saveAddress"
                    value="reading"
                  />
                }
                label="reading"
              />
            )}
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Submit Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default EditEmployees;
