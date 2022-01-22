import React from "react";
import styles from "./content.module.css";
import Profile from "./profile/profile";
import Post from "./posts/post";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentClassName: styles.content,
        };
    }

    render() {
        return (
            <div className={this.state.contentClassName}>
                <Profile />
                <Post />
            </div>
        );
    }
}

export default Content;
