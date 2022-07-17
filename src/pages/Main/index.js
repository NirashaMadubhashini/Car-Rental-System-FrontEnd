import React from 'react'
import Header from "../../component/header/appBar";

const Main = ({ children }) => {
    return(
        <React.Fragment>
            <Header/>
            {children}
        </React.Fragment>
        )
}
export default Main