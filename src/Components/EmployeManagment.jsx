import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEmployees from "./AddEmployees";
import EmployeeData from "./EmployeeData";

const EmployeManagment = () => {
  const [flag, setflag] = useState([]);

  const [sendForEdit, setSendForEdit] = useState({});
  const [emps, setemps] = useState([]);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = (id) => {
    setOpen3(false);
  };
  const getData = async () => {
    try {
      handleClickOpen1();
      const response = await axios.get(
        "https://backend-99b9.onrender.com/employes"
      );
      setemps(response.data);
      handleClose1();
    } catch (error) {
      handleClose1();
      console.error(error);
    }
  };
  const handelDelete = (id) => {
    console.log("handelDelete  id", id);
    handleClickOpen1();
    axios
      .delete(`https://backend-99b9.onrender.com/employes/${id}`)
      .then((res) => {
        handleClose1();
        handleClose3();
      })
      .catch((err) => {
        console.log("error", err);
        handleClose1();
      });
  };

  useEffect(() => {
    getData();
  }, [open, flag, open3]);

  //   const [flag, setFlag] = useState(false);
  //   useEffect(() => {}, [flag]);

  return (
    <div className="employess">
      <AddEmployees
        open1={open1}
        setOpen1={setOpen1}
        handleClickOpen1={handleClickOpen1}
        handleClose1={handleClose1}
        // flag={flag}
        setflag={setflag}
        setemps={setemps}
        emps={emps}
      />
      <EmployeeData
        emps={emps}
        open2={open2}
        open3={open3}
        open={open}
        open1={open1}
        handleClickOpen={handleClickOpen}
        handleClickOpen1={handleClickOpen1}
        handleClickOpen2={handleClickOpen2}
        handleClickOpen3={handleClickOpen3}
        handleClose={handleClose}
        handleClose1={handleClose1}
        handleClose2={handleClose2}
        handleClose3={handleClose3}
        handelDelete={handelDelete}
        sendForEdit={sendForEdit}
        setSendForEdit={setSendForEdit}
      />
    </div>
  );
};

export default EmployeManagment;
