import { Button, TextField, Typography } from '@mui/material'
import { Field, Formik , Form} from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Form } from 'react-router-dom'

const initialValues={
    emails:"",
    password:""
}

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit=(values)=>{
        // console.log("login",values);

    }
  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Login
        </Typography>
        <Formik  initialValues={initialValues} onSubmit={handleSubmit}>

            <Form>
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
                              />
                <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained' >Login</Button>              
            </Form>
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            Don't have an account?
            <Button size='small' onClick={()=>navigate("/account/register")}>
                register
            </Button>
        </Typography>
    </div>
  );
};

export default LoginForm;