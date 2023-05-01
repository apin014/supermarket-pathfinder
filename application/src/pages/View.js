import React from "react";
import MyNavbar from "../components/Navbar";
import FloorPlanComponent from "../components/FloorPlan";
import { useParams } from "react-router-dom";
import './Pages.css'

const View = () => {
    const { loc } = useParams();
    return (
        <div className="view">
            <MyNavbar />
            <FloorPlanComponent loc={loc} />
        </div>
    )
}

export default View;