import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const initialValues={
    fullName:"",
    emails:"",
    password:"",
    role:"ROLE_CUSTOMER"
}
const RegisterForm = () => {
    const navigate = useNavigate();
    const handleSubmit=(values)=>{
        console.log("form values",values);

    }
  return (
    <div>
    <Typography variant='h5' className='text-center'>
        Register
    </Typography>
    <Formik  initialValues={initialValues} onSubmit={handleSubmit}>

        <Form>
            <Field
                as={TextField}
                name="fullName"
                label="fullName"
                variant="outlined"
                fullWidth 
                margin="normal"
                          />
            <Field
                as={TextField}
                name="email"
                label="email"
                variant="outlined"
                fullWidth 
                margin="normal"
                          />
            <Field 
                
                as={TextField}
                name="password"
                label="password"
                variant="outlined"
                fullWidth 
                margin="normal"
                type="password"
                          />
                         
                                <Field
                                    fullWidth
                                    as={Select}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    name="role"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                                    
                                </Field>
                            
            <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained' >Register</Button>              
        </Form>
    </Formik>
    <Typography variant='body2' align='center' sx={{mt:3}}>
        if  have an account already?
        <Button size='small' onClick={()=>navigate("/account/login")}>
            login
        </Button>
    </Typography>
</div>
  )
}

export default RegisterForm