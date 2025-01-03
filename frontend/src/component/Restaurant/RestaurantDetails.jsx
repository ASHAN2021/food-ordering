import { Divider, Grid } from '@mui/material';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const RestaurantDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/India/Indian Fast Food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover'
                             src='https://cdn.pixabay.com/photo/2013/12/31/21/47/restaurant-237060_1280.jpg' alt='' />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                             src='https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_960_720.jpg' alt='' />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                             src='https://cdn.pixabay.com/photo/2022/02/10/05/45/lantern-7004643_960_720.jpg' alt='' />
                    </Grid>

                </Grid>
                
                
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>
                Indian fast food is a vibrant blend of flavors and textures, offering quick, delicious options like crispy samosas, spicy pav bhaji, tangy pani puri, and savory chaat. These dishes are packed with aromatic spices, fresh herbs, and bold sauces, making them a popular choice for a quick, flavorful bite.
                </p>
                <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flex items-center gap-3'>
                <LocationOnIcon/>
                <span>
                    Mumbai, Mahastra
                </span>
            </p>
            <p className='text-gray-500 flex items-center gap-3'>
                <CalendarTodayIcon/>
                <span>
                    Mon-Sun: 9:00 AM - 9:00 PM (Today)
                </span>
            </p>
                </div>
            </div>
            
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
                Filter
            </div>
            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                menu
            </div>
        </section>
    </div>
  )
}

export default RestaurantDetails;