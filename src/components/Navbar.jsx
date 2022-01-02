import React from "react";
import "./Navbar.css";
import theme from "./Theme";
import CustomButton from "./CustomButton";
/*-----Material UI imports */
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Left>
        <Language lang='EN' />
        <Title title='Dum-E.' />
      </Left>

      <Center>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete='off'
        >
          <FormControl sx={{ m: 1, width: "25ch" }}>
            <InputLabel>Search</InputLabel>
            <Input
              id='outlined-search-with-icon'
              type='search'
              endAdornment={
                <InputAdornment position='end'>
                  <SearchIcon aria-label='search icon' edge='end' />
                </InputAdornment>
              }
              label='search'
            />
          </FormControl>
        </Box>
      </Center>

      <Right>
        <ThemeProvider theme={theme}>
          <CustomButton variant='text' size='large' color='textBlack'>
            Register
          </CustomButton>

          <CustomButton variant='text' size='large' color='primary'>
            Sign In
          </CustomButton>

          <IconButton aria-label='cart'>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlinedIcon color='action' />
            </Badge>
          </IconButton>
        </ThemeProvider>
      </Right>
    </NavbarContainer>
  );
};

// Navbar functional component
// props is basically passing a parameter into the component
function NavbarContainer(props) {
  return (
    // For JSX, it's classname, and not just class
    <nav className='navbar-container'>{props.children}</nav>
  );
}

function Right(props) {
  return <div className='right'>{props.children}</div>;
}

function Center(props) {
  return <div className='center'>{props.children}</div>;
}

function Left(props) {
  return <div className='left'>{props.children}</div>;
}

function Language(props) {
  return (
    <a href='#' className='language'>
      {props.lang}
    </a>
  );
}

function Title(props) {
  return (
    <a href='#' className='title'>
      {props.title}
    </a>
  );
}

export default Navbar;
