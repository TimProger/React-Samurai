import React from 'react';
import styles from "./post.module.css";

class Post extends React.Component {
    constructor(props) {
        super(props);
        const posts = [
            {
                name: "Bob",
                text: "It's our new program! Hey!!"
            },
            {
                name: "Tom",
                text: "Let's play some videogames!!"
            }
        ];
        this.state = {
            PostContainerClassName: styles.main,
            createPostClassName: styles.create,
            PostsClassName: styles.posts,
            avatarClassName: styles.avatar,
            postClassName: styles.post,
            posts: posts
        }
    }

    render(){
        return(
            <div className={this.state.PostContainerClassName}>
                <div className={this.state.createPostClassName}>
                    <input type="text" placeholder="Введите текст"/>
                    <button type="submit">Отправить</button>
                </div>
                <div className={this.state.PostsClassName}>
                    {this.state.posts.map((post, index) => (
                        <div key={index} className={this.state.postClassName}>
                            <div className={this.state.avatarClassName}></div>
                            <div>{post.name}</div>
                            <div>{post.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Post