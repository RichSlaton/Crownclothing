import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

/*Connect is a higer-order component that lets us modify our component to
have access to things related to Redux. Higher-order functions that take components
as arguments and return you a new suped up component */

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown/> }
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden,
});

/* Destructuring nested values(user: {currentUser}, ) = Get me the currentUser
value from the user.*/

//mapStateToProps function we want the value of null. Return is an state object.

export default connect(mapStateToProps)(Header);

/*Connect we are going to pass it two functions. The second one is optional
and it will give us another higher component that pass into our Header*/

/*1st argument of Connect -a function that allows us to access the state which is
our Root-reducer*/