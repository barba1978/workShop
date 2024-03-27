
import React, { useState } from 'react';
import { TextField, Button, Box, Container,InputAdornment } from '@mui/material';

export const Host=()=>{


    const [formData, setFormData] = useState({
        title:"",
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        description: '',
        numberOfGuest:'',
        price:'',
        duration:'',
        location:'',
        date:'',
      });
      const [workshops, setWorkshops] = useState(() => {
        const savedWorkshops = localStorage.getItem('workshops');
        return savedWorkshops ? JSON.parse(savedWorkshops) : [];
      });

    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      // Step 3: Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); // For demonstration; replace with your send data logic
       

        const newWorkshops = [...workshops, formData];
        localStorage.setItem('workshops', JSON.stringify(newWorkshops));
        setWorkshops(newWorkshops); 
      setFormData({
        title:"",
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        description: '',
        numberOfGuest:'',
        price:'',
        duration:'',
        location:'',
        date:'',
    
      });
      };

      
      console.log(workshops);
    return(
        <Container maxWidth="sm">
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         <TextField
            label="Title"
            variant="outlined"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            label="First Name"
            variant="outlined"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
       
           <TextField
            label="Number Of Guest"
            variant="outlined"
            name="numberOfGuest"
            type="number"
            inputProps={{ min: 1, max: 20, step: 1 }}
            value={formData.numberOfGuest}
            onChange={handleChange}
          />
           
          <TextField
            label="Price"
            variant="outlined"
            name="price"
            type="tel"
            value={formData.price}
            onChange={handleChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₪</InputAdornment>
                ),
                inputProps: { min: 0 } // Optionally, ensure non-negative values
              }}
          />
           <TextField
            label="Duration"
            variant="outlined"
            name="duration"
            type="tel"
            value={formData.duration}
            onChange={handleChange}
          />
           <TextField
            label="Location"
            variant="outlined"
            name="location"
            type="tel"
            value={formData.location}
            onChange={handleChange}
          />
          <TextField
            label=""
            variant="outlined"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
             <TextField
            label="Description"
            variant="outlined"
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Container>
    )
}