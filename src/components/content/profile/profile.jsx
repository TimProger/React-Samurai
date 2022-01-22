import React from "react";
import styles from "./profile.module.css";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileClassName: styles.profile,
            imgClassName: styles.profile__image,
            contentClassName: styles.profile__content,
            avatarSrc: "https://sun9-9.userapi.com/impg/CJ_bDRE7cs1EeyBMTCwfiWEXKt78Ktc7MVh4Ww/YnLewEPGeQ4.jpg?size=932x1024&quality=96&sign=5ee088bf6f0e83d884ad7498839085ef&type=album",
            name: "Bob",
            age: 19,
            about: `I do love anime and videogames. 
            I hate math and school at all. My mom thinks that 
            I'm stupid, but I'm not! One day I've donated 100$ 
            to my favorite streamer's onlyfans and he said my 
            name!!`,
        };
    }

    render() {
        return (
            <div className={this.state.profileClassName}>
                <img
                    className={this.state.imgClassName}
                    src={this.state.avatarSrc}
                    alt="avatar"
                />
                <div className={this.state.contentClassName}>
                    <div>Name: {this.state.name}</div>
                    <div>Age: {this.state.age}</div>
                    <div>About me: {this.state.about}</div>
                </div>
            </div>
        );
    }
}

export default Profile;
