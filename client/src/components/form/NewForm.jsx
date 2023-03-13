// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Stack,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";
// import { productData } from "../../data/rowData";
// import CustomeButton from "../CustomButton";

// const NewForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     serviceType: "",
//     date: "",
//     time: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(
//       `Submitted data: ${formData.firstName}, ${formData.lastName}, ${formData.email},
//        ${formData.serviceType}, ${formData.date}, ${formData.time}`
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
//       <Stack spacing={3}>
//         <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//           <TextField
//             name="firstName"
//             label="Frist Name"
//             variant="outlined"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <TextField
//             name="lastName"
//             label="Last Name"
//             variant="outlined"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </Stack>
//         <TextField
//           name="email"
//           label="Email"
//           variant="outlined"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="service-type-label">Service Type</InputLabel>
//           <Select
//             labelId="service-type-label"
//             name="serviceType"
//             value={formData.serviceType}
//             onChange={handleInputChange}
//           >
//             {productData.map((item) => (
//               <MenuItem key={item.id} value={item.name}>
//                 {item.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//           <TextField
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//           <TextField
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleInputChange}
//           />
//         </Stack>
//         <CustomeButton
//           text={"Proceed"}
//           variant={"contained"}
//           handleClick={handleSubmit}
//         />
//       </Stack>
//     </form>
//   );
// };

// export default NewForm;
