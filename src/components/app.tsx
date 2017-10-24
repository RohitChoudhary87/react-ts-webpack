import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class App extends React.Component<HelloProps, {}> {
    render() {
        return <i>{this.props.compiler}   {this.props.framework} </i>;
    }
}