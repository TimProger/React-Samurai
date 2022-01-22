import React from "react";
import styles from "./footer.module.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footerClassName: styles.app__footer,
        };
    }
    render() {
        return <div className={this.state.footerClassName}>Footer</div>;
    }
}

export default Footer;
