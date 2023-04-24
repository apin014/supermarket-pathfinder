import React from "react";
import { Container } from "react-bootstrap";
import {ReactComponent as FloorPlan} from "../resources/Sample_1.svg";
import { Fab } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./Components.css";

function FloorPlanComponent() {
    return (
        <Container className="svg-container mw-100 p-1">
            <FloorPlan className="svg"></FloorPlan>
            <Fab
            aria-label="Widgets"
            sx={{ position: 'fixed', bottom: '16px', right: '16px', backgroundColor: '#ffaf5a', width: '4.5rem', height: '4.5rem' }}
            >
                <SearchIcon sx={{color: '#d75028', fontSize: '2.5rem'}} />
            </Fab>
        </Container>
    )
}

export default FloorPlanComponent;