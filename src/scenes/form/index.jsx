import React, { useState } from "react";
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [formType, setFormType] = useState("user");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const renderFormFields = (formikProps) => {
    const { values, errors, touched, handleBlur, handleChange } = formikProps;
    switch (formType) {
      case "user":
        return (
          <>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Contact Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Room Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.room}
              name="room"
              error={!!touched.room && !!errors.room}
              helperText={touched.room && errors.room}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Floor Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.floor}
              name="floor"
              error={!!touched.floor && !!errors.floor}
              helperText={touched.floor && errors.floor}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address}
              name="address"
              error={!!touched.address && !!errors.address}
              helperText={touched.address && errors.address}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="City"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.city}
              name="city"
              error={!!touched.city && !!errors.city}
              helperText={touched.city && errors.city}
              sx={{ gridColumn: "span 4" }}
            />
          </>
        );
      case "floor":
        return (
          <>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Floor Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.floorNumber}
              name="floorNumber"
              error={!!touched.floorNumber && !!errors.floorNumber}
              helperText={touched.floorNumber && errors.floorNumber}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Total Rooms"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.totalRooms}
              name="totalRooms"
              error={!!touched.totalRooms && !!errors.totalRooms}
              helperText={touched.totalRooms && errors.totalRooms}
              sx={{ gridColumn: "span 2" }}
            />
          </>
        );
      case "room":
        return (
          <>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Floor Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.floornumber}
              name="floornumber"
              error={!!touched.floornumber && !!errors.floornumber}
              helperText={touched.floornumber && errors.floornumber}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Room Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.roomNumber}
              name="roomNumber"
              error={!!touched.roomNumber && !!errors.roomNumber}
              helperText={touched.roomNumber && errors.roomNumber}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Capacity"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.capacity}
              name="capacity"
              error={!!touched.capacity && !!errors.capacity}
              helperText={touched.capacity && errors.capacity}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Number of Renter"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.renter}
              name="renter"
              error={!!touched.renter && !!errors.renter}
              helperText={touched.renter && errors.renter}
              sx={{ gridColumn: "span 2" }}
            />
          </>
        );
      case "furniture":
        return (
          <>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Furniture Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.furnitureName}
              name="furnitureName"
              error={!!touched.furnitureName && !!errors.furnitureName}
              helperText={touched.furnitureName && errors.furnitureName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Quantity"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.quantity}
              name="quantity"
              error={!!touched.quantity && !!errors.quantity}
              helperText={touched.quantity && errors.quantity}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Cost"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.cost}
              name="cost"
              error={!!touched.cost && !!errors.cost}
              helperText={touched.cost && errors.cost}
              sx={{ gridColumn: "span 2" }}
            />
          </>
        );
      case "payment":
        return (
          <>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={!!touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="E-mail"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Payment Amount"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.paymentAmount}
              name="paymentAmount"
              error={!!touched.paymentAmount && !!errors.paymentAmount}
              helperText={touched.paymentAmount && errors.paymentAmount}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Date"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.date}
              name="date"
              error={!!touched.date && !!errors.date}
              helperText={touched.date && errors.date}
              sx={{ gridColumn: "span 2" }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE FORM" subtitle="Create a New Entry" />
      
      <FormControl fullWidth variant="filled" sx={{ mb: 2 }}>
        <InputLabel>Form Type</InputLabel>
        <Select
          value={formType}
          onChange={(e) => setFormType(e.target.value)}
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="floor">Floor</MenuItem>
          <MenuItem value="room">Room</MenuItem>
          <MenuItem value="furniture">Furniture</MenuItem>
          <MenuItem value="payment">Payment</MenuItem>
        </Select>
      </FormControl>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues[formType]}
        validationSchema={validationSchemas[formType]}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {renderFormFields({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
              })}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                {`Create New ${formType.charAt(0).toUpperCase() + formType.slice(1)}`}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchemas = {
  user: yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  }),
  floor: yup.object().shape({
    floorNumber: yup.string().required("required"),
    totalRooms: yup.string().required("required"),
  }),
  room: yup.object().shape({
    roomNumber: yup.string().required("required"),
    capacity: yup.string().required("required"),
  }),
  furniture: yup.object().shape({
    furnitureName: yup.string().required("required"),
    quantity: yup.number().required("required"),
    cost: yup.number().required("required"),
  }),
  payment: yup.object().shape({
    paymentAmount: yup.number().required("required"),
    date: yup.date().required("required"),
  }),
};

const initialValues = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  },
  floor: {
    floorNumber: "",
    totalRooms: "",
  },
  room: {
    roomNumber: "",
    capacity: "",
  },
  furniture: {
    furnitureName: "",
    quantity: "",
    cost: "",
  },
  payment: {
    paymentAmount: "",
    date: "",
  },
};

export default Form;
