import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Card/Cart';
import Profile from './component/Profile/Profile';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div>
     
      <CssBaseline/>
      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <Cart /> */}
      <Profile />
    </div>
    </ThemeProvider>
  );
}

export default App;
