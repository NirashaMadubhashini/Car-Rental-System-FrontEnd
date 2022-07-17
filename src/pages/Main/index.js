import React from 'react'
import Header from "../../component/header/appBar";

const MainPanel = ({ children }) => {
    return(
        <React.Fragment>
            <Header/>
            {children}
        </React.Fragment>
        )
}
export default MainPanel