import React from 'react';
import "../App.css";
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {Container} from "@mui/material";

const VerticalMenu = () => {
    return (
        <div className="verticalMenu">
            <Container>
                <Nav>
                    <NavLink className="nav-link" style={{color: "darkslategray", fontSize: "20px"}} to={"/dataTableEx"}>
                        DataTableEx
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className="nav-link" style={{color: "darkslategray", fontSize: "20px"}} to={"/slides"}>
                        Slides
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className="nav-link" style={{color: "darkslategray", fontSize: "20px"}} to={"/excelCrud"}>
                        ExcelCrud
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className="nav-link" style={{color: "darkslategray", fontSize: "20px"}} to={"/ImageWidget"}>
                        ImageWidget
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className="nav-link" style={{color: "darkslategray", fontSize: "20px"}} to={"/uploadImages"}>
                        UploadImages
                    </NavLink>
                </Nav>
            </Container>
        </div>
    );
}

export default VerticalMenu;