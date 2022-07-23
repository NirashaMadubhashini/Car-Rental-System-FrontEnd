import React from 'react';
import ride from '../../assets/img/car4.jpg';
import MainPanel from "../Main";
import {Box} from "@mui/material";
import {styleSheet} from "./style";
import withStyles from "@mui/styles/withStyles";


const LogingSection = ({}) => {

    return (
        <section className="about-section">
            <MainPanel>
                <Box>
                    <img src={ride} className="img-fluid" alt="ride" width="1519"/>
                    <div className="Auth-form-container">
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign In</h3>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Box>

            </MainPanel>
        </section>
    );
}

export default withStyles(styleSheet)(LogingSection)