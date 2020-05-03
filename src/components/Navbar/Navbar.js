import React from 'react';
import './Navbar.scss'
import {NavLink} from "react-router-dom";
import {deleteUser} from "../../redux/actions/deleteUser"
import {connect} from "react-redux"

const Navbar = ({deleteUser}) => {
    const outHandler = () => {
        deleteUser()
    }

    return (
        <ul className='header__navbar navbar'>
            <li className='navbar__item'>
                <NavLink to="/private" className='navbar__link'>Закртые чаты</NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink to="/common" className='navbar__link'>Общий чат</NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink to="/auth" className='navbar__link' onClick={outHandler}>Выход</NavLink>
            </li>
        </ul>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: () => dispatch(deleteUser())
    }
}


export default connect(null, mapDispatchToProps)(Navbar)