import React from "react";
import "../App.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import axios from "axios";

const AddEmployees = ({
  open1,
  setflag,
  handleClickOpen1,
  handleClose1,
  setemps,
  emps,
}) => {
  const [gender, setGender] = useState("male");
  const [hobbies, sethobbies] = useState([]);
  const [dob, setDob] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
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
    handleClickOpen1();
    axios
      .post(
        "https://fake-restful-api-production-aa88.up.railway.app/employes",
        {
          full_name: name,
          phone: phone,
          email: email,
          gender: gender,
          date_of_birth: dob,
          hobbies: hobbies,
        }
      )

      .then((res) => {
        setemps([...emps, res.data]);

        handleClose1();
      })
      .catch((err) => handleClose1());

    e.setdefault();
  };

  return (
    <>
      <form onSubmit={(e) => handelSubmit(e)}>
        <Grid container spacing={3} marginTop="20px" className="cst_pad">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Employes Registration form
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
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
              label="Mobile"
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
              <FormControlLabel value="Fale" control={<Radio />} label="Male" />
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
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Submit
            </Button>
          </Grid>
          <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Loadding...
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Grid>
      </form>
    </>
  );
};

export default AddEmployees;
