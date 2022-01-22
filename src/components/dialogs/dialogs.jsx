import React from "react";
import styles from "./dialogs.module.css";
import {NavLink, Routes, Route, useParams} from "react-router-dom";

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: this.props.message,
            index: this.props.index
        }
    }

    render() {
        return <div className={styles.message}>{this.state.message}</div>;
    }
}

class Dialogue extends React.Component {
    constructor(props) {
        super(props);

        this.setActive = this.setActive.bind(this)

        this.state = {
            item: this.props.item,
            index: this.props.index
        }
    }

    setActive(isActive){
        return isActive ? `${styles.dialog} ${styles.active}` : `${styles.dialog}`;
    }

    render() {
        return <NavLink to={`${this.state.index}`} key={this.state.index} className={({isActive}) => this.setActive(isActive)}>{this.state.item}</NavLink>
    }
}

const Messages = (props) => {
    const { id } = useParams();

    const messageArray = [
        {
            id: 0,
            msg: ['Ку', 'Не знаешь, что нам задали?']
        },
        {
            id: 1,
            msg: ['Погнали в доту?', 'Шо молчим?']
        }
    ]
    console.log(id)
    const state = {
        messages: messageArray.find(msg => msg.id === +id)
    }
    console.log(state)

    return <div className={styles.messages_container}>
                {state.messages.msg.map((msg, index) => {
                    return <Message message={msg} index={index} key={index}/>
                })}
            </div>
}

class Dialogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogs: ['Артемий', 'Диана', 'Рома', 'Harem']
        }
    }

    render() {
        return (
            <div className={styles.dialogs}>
                <div className={styles.dialogs_dialog}>
                    {
                        this.state.dialogs.map((item, index)=>{
                            return <Dialogue index={index} item={item} key={index} />
                        })
                    }
                </div>
                <div className={styles.dialogs_messages}>
                    <Routes>
                        <Route exact={true} path="/" element={
                            <div className={styles.messages_container}>
                                Выберите чат для просмотра сообщений
                            </div>
                        }/>
                        <Route exact={true} path=":id" element={<Messages />}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default Dialogs;
