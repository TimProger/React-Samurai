import React from "react";
import styles from "./navbar.module.css";
import {NavLink} from "react-router-dom";

class Link extends React.Component {
    constructor(props) {
        super(props);

        this.setActive = this.setActive.bind(this)

        this.state = {
            text: this.props.text,
            link: this.props.link,
        };
    }

    setActive(isActive){
        return isActive ? `${styles.item} ${styles.active}` : `${styles.item}`;
    }

    render() {
        return (
            <NavLink to={this.state.link} className={({isActive}) => this.setActive(isActive)}>
                {this.state.text}
            </NavLink>
        );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navClassName: styles.app__nav,
        };
    }

    render() {
        return (
            <nav className={this.state.navClassName}>
                <Link text="Профиль" link="/" />
                <Link text="Сообщения" link="/dialogs" />
            </nav>
        );
    }
}

export default Navbar;
