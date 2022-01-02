import "./Navbar.css";
import theme from "./Theme";
import AuthButton from "./AuthButton";
/*-----Material UI imports */
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
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
    <ThemeProvider theme={theme}>
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
              <InputLabel color='secondary'>Search</InputLabel>
              <Input
                id='outlined-search-with-icon'
                type='search'
                label='search'
                color='secondary'
                endAdornment={
                  <InputAdornment position='end'>
                    <SearchIcon
                      aria-label='search icon'
                      edge='end'
                      color='secondary'
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Center>

        <Right>
          <AuthButton variant='text' size='large' color='textBlack'>
            Register
          </AuthButton>

          <AuthButton variant='text' size='large' color='secondary'>
            Sign In
          </AuthButton>

          <IconButton aria-label='cart'>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlinedIcon color='textBlack' />
            </Badge>
          </IconButton>
        </Right>
      </NavbarContainer>
    </ThemeProvider>
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
