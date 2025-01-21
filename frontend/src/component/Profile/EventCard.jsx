import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia 
            sx={{height:345}}
            image='https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_640.jpg'
            />

            <CardContent>
                <Typography variant='h5'>
                        Indian Fast Food
                </Typography>
                <Typography variant='body2'>
                        50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500'>March 15, 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>March 16, 2024 12:00 AM</p>
                </div>
            </CardContent>
            {false  && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}

export default EventCard