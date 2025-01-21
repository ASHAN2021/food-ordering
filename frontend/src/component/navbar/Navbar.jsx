import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <Box className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#E6B325] lg:px-20 flex justify-between'>

<div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
<li className='logo font-semibold text-gray-500 text-2xl'>
Food Master
</li>
</div>
<div className='flex items-center space-x-2 lg:space-x-10'>
<div>
  <IconButton>
    <SearchIcon sx={{fontSize:"1.5rem"}}/>
  </IconButton>
</div>
<div>
  {false?<Avatar sx={{bgcolor:"white",color:pink.A400}}>A</Avatar>:
  <IconButton onClick={()=>navigate("/account/login")}>
    <Person2Icon/>
  </IconButton>
  }
</div>
<div>
  <IconButton>
    <Badge badgeContent={4} color="secondary">
      <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
    </Badge>
    
  </IconButton>
</div>
</div>
    </Box>
  )
}

export default Navbar