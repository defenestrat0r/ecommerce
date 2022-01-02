import { React, useState } from "react";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as DownArrow } from "../assets/chevron-down.svg";
import { ReactComponent as InfoIcon } from "../assets/info.svg";
import { ReactComponent as UserIcon } from "../assets/user.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Left>
        <Language lang='EN' />
        <Title title='Dum-E' />
      </Left>

      <Right>
        <NavItem link='#' icon={<UserIcon />} />
        <NavItem link='#' icon={<InfoIcon />} />
        <NavItem link='#' icon={<CartIcon />} />
        {/*DropDown menu here* */}
        <NavItem icon={<DownArrow />}>
          <DropDownMenu>
            <DropDownItem></DropDownItem>
          </DropDownMenu>
        </NavItem>
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

function NavItem(props) {
  /** Using state to manage the dropdown
   ** The state is 'open'. It's a boolean that tells us whether or not the dropdown is open
   ** The function 'setOpen' is used to change the state
   ** We want the dropdown to be closed by default so it's set to false
   */
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      {/** The onclick is a toggle for the dropdown.
       *** It sets the open value to whatever the opposite it currently is */}
      <a
        href={props.link}
        className='icon-button'
        onClick={() => setOpen(!!!open)}
      >
        {props.icon}
      </a>

      {/** If the open property is true, we show the children */}
      {open && props.children}
    </li>
  );
}

function DropDownMenu() {
  return (
    <div className='dropdown'>
      <DropDownItem>Test1</DropDownItem>
      <DropDownItem leftIcon='x' rightIcon='Y'>
        Test2
      </DropDownItem>
      <DropDownItem leftIcon='?'>Test3</DropDownItem>
      <DropDownItem rightIcon='>'>Test4</DropDownItem>
    </div>
  );
}

function DropDownItem(props) {
  return (
    <a href='#' className='dropdown-menu-item'>
      <span className='icon-button'>{props.leftIcon}</span>
      {props.children}
      <span className='icon-right'>{props.rightIcon}</span>
    </a>
  );
}

export default Navbar;
