import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import Dialogs from "./components/dialogs/dialogs";
import {Routes, Route} from "react-router";

class App extends React.Component {
    render() {
        return (
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                    <Routes>
                        <Route exact={true} path="/" element={<Content/>}/>
                        <Route exact={true} path="/dialogs/*" element={<Dialogs/>} />
                        <Route path="*" element={<h2>Ресурс не найден</h2>} />
                    </Routes>

                <Footer/>
            </div>
        );
    }
}

export default App;
