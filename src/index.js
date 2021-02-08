import "./_req";
import "babel-polyfill";
import React from "react"
import ReactDOM from "react-dom"
import HelloWorld from "./components/HelloWorld";

ReactDOM.render(
    <div>
        <HelloWorld/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();