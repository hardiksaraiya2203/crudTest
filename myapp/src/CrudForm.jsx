import React, { useEffect, useState, useFormik } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as Yup from "yup";

const CrudForm = (props) => {
  const Emp = Yup.object().shape({
    firstname: Yup.string().required("firstname is required"),
    lastname: Yup.string().required("lastname is required"),
    cpntactnumber: Yup.string().required("cpntactnumber is required"),
    email: Yup.string()
      .required("email is required")
      .email("enter a proper email"),
  });

  //   const formik = useFormik({
  //     initialValues: {
  //       id: "",
  //       firstname: "",
  //       lastname: "",
  //       cpntactnumber: "",
  //       email: "",
  //     },
  //     validationSchema: Emp,
  //     onSubmit: (values) => {
  //       console.log(values);
  //     },
  //   });

  const { handleClose, open, d } = props;
  const [data, setData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    cpntactnumber: "",
    email: "",
  });

  useEffect(() => {
    if (d) {
      setData({
        ...d,
        id: d.id,
        firstname: d.firstname,
        lastname: d.lastname,
        cpntactnumber: d.cpntactnumber,
        email: d.email,
      });
    }
  }, [d]);

  const handleSave = () => {
    // let method1 = d ? "PUT" : "POST";
    let url = d
      ? `https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee/${data.id}`
      : "https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee";
    fetch(url, {
      method: d ? "PUT" : "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((y) => y.json())
      .then((y) => {
        setData({
          id: "",
          firstname: "",
          lastname: "",
          cpntactnumber: "",
          email: "",
        });
        handleClose();
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Employee</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="id"
          name="id"
          label="id"
          type="text"
          fullWidth
          value={data?.id}
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="firstname"
          name="firstname"
          label="firstname"
          type="text"
          fullWidth
          value={data?.firstname}
          variant="standard"
          onChange={handleChange}
          //   error={
          //     formik.touched.firstname && Boolean(formik.errors.firstname)
          //   }
          //   helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="lastname"
          name="lastname"
          label="lastname"
          type="text"
          value={data?.lastname}
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="cpntactnumber"
          name="cpntactnumber"
          label="cpntactnumber"
          type="text"
          value={data?.cpntactnumber}
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="email"
          type="email"
          value={data?.email}
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="button" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CrudForm;
