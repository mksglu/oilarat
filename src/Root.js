//Core Modules
import React, { Component } from "react"
import { Provider } from "react-redux"

import store from "./Store";

//Containers
import App from './Containers/App'

export default class Root extends Component{
    render(){
        return (
            <Provider store={store}>
                {/*Normally routes goes here.*/}
                <App />
            </Provider>
        )
    }
}