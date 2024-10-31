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
            <div><img src="/img/intro.png" alt=""/></div>
            <div><img src="/img/first.png" alt=""/></div>
            <div><img src="/img/game.png" alt=""/></div>
            <div><img src="/img/map.png" alt=""/></div>
            <div><img src="/img/video.png" alt=""/></div>
            <div><iframe src="https://uploads.knightlab.com/storymapjs/a34d00df6a6590f5bcdd4fd5a1e75f43/navigatsiia/draft.html" width="100%" height="800"></iframe></div>
        </div>
    }
}
