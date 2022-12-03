import React, { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PreviewIcon from "@mui/icons-material/Preview";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import EditEmployees from "./EditEmployees";
import { Grid, Typography } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const EmployeeData = ({
  emps,

  open,
  open1,
  open2,
  open3,
  handleClickOpen,
  handleClickOpen1,
  handleClickOpen2,
  handleClickOpen3,
  handleClose,
  handleClose1,
  handleClose2,
  handleClose3,
  handelDelete,
  sendForEdit,
  setSendForEdit,
}) => {
  return (
    <Grid container spacing={3} marginTop="20px">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Employes List
        </Typography>
      </Grid>
      <TableContainer
        className={"cst_pad"}
        component={Paper}
        sx={{ maxHeight: "450px", overflow: "scroll" }}
      >
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="left">Full name</StyledTableCell>
              <StyledTableCell align="right">View</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emps &&
              emps.map((row, ind) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell scope="row">{ind + 1}</StyledTableCell>
                  <StyledTableCell scope="row">{row.full_name}</StyledTableCell>

                  <StyledTableCell align="right">
                    <PreviewIcon
                      onClick={() => {
                        setSendForEdit(row);
                        handleClickOpen2();
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <BorderColorIcon
                      onClick={() => {
                        setSendForEdit(row);
                        handleClickOpen();
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <DeleteForeverIcon
                      onClick={() => {
                        setSendForEdit(row);
                        handleClickOpen3();
                      }}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <DialogTitle fontSize={"40px"}> Employee Edit form</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To update userdata change given data and press submit button
            </DialogContentText>

            <EditEmployees
              sendForEdit={sendForEdit}
              handleClose={handleClose}
              handleClose1={handleClose1}
              handleClickOpen1={handleClickOpen1}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {/* <Button onClick={handleClose}>Submit Changes</Button> */}
          </DialogActions>
        </Dialog>

        <Dialog
          open={open2}
          onClose={handleClose2}
          TransitionComponent={Transition}
        >
          <DialogTitle fontSize={"40px"}> Employee Details</DialogTitle>
          <DialogContent>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>Name</TableCell>
                    <TableCell> {sendForEdit.full_name}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>Gender</TableCell>
                    <TableCell> {sendForEdit.gender}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>Gender</TableCell>
                    <TableCell> {sendForEdit.date_of_birth}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>Phone number</TableCell>
                    <TableCell> {sendForEdit.phone}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>Email</TableCell>
                    <TableCell> {sendForEdit.email}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>Hobbies:-</TableCell>
                    {sendForEdit.hobbies && (
                      <TableCell>{sendForEdit.hobbies[0]}</TableCell>
                    )}
                  </TableRow>
                  {sendForEdit.hobbies && (
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>{sendForEdit.hobbies[1]}</TableCell>
                    </TableRow>
                  )}
                  {sendForEdit.hobbies && (
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>{sendForEdit.hobbies[2]}</TableCell>
                    </TableRow>
                  )}
                  {sendForEdit.hobbies && (
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>{sendForEdit.hobbies[3]}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open3}
          onClose={handleClose3}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"This user will be deleted, are you sure ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose3}>Cancel</Button>
            <Button
              variant="contained"
              onClick={() => {
                handelDelete(sendForEdit.id);
              }}
              autoFocus
            >
              Yes, Delete
            </Button>
          </DialogActions>
        </Dialog>

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
      </TableContainer>
    </Grid>
  );
};

export default EmployeeData;
