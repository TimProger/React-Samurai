import React from "react";
import styles from "./header.module.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerClassName: styles.app__header,
            logoClassName: styles.app__header__logo,
        };
    }

    render() {
        return (
            <header className={this.state.headerClassName}>
                <div className={this.state.logoClassName}>Logo</div>
            </header>
        );
    }
}

export default Header;
