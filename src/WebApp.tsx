import React, { ReactNode } from "react";
import "./WebApp.css";
export interface IWebAppProps {
}
export interface IWebAppState {
    voted: string | null;
}
export default class WebApp extends React.Component <IWebAppProps, IWebAppState> {
    state: IWebAppState = {
        voted: localStorage.getItem("voted")
    }
    onClick(event: any) {
        localStorage.setItem("voted", event.currentTarget.innerHTML);
        this.setState({voted:event.currentTarget.innerHTML});
    }
    render(): ReactNode {
        return <div className="webapp-container">
            <div className="header">Добро пожаловать в МИСИС!</div>
            <div><img src="game.png"/></div>
            <div><img src="history.png"/></div>
            <div><img src="video.png"/></div>
            <div><iframe src="https://uploads.knightlab.com/storymapjs/1ae305a744ae7e34e716eda34da8ee2d/misis/index.html" width="100%" height="800"></iframe></div>
            <div><img src="footer.png"/></div>
        </div>
    }
}
