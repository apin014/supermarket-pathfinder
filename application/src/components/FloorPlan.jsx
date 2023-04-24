import React from "react";
import { Container } from "react-bootstrap";
import {ReactComponent as FloorPlan} from "../resources/Sample_1.svg";
import { Fab } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { motion } from "framer-motion";
import "./Components.css";

function FloorPlanComponent() {
    const startPoint = { x: 0, y: 0 };
    const endPoint = { x: 700, y: 50 };

    const pathRef = React.useRef(null);

    const handleResize = () => {
        const containerWidth = pathRef.current.parentElement.clientWidth;
        const containerHeight = pathRef.current.parentElement.clientHeight;

        pathRef.current.setAttribute('viewBox', `0 0 ${containerWidth} ${containerHeight}`);
    }

    React.useEffect(() => {
        // Add event listener for resize on component mount
        window.addEventListener('resize', handleResize);
    
        // Call handleResize initially to set initial coordinates
        handleResize();
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pathVariants = {
        initial: {
        d: `M${startPoint.x} ${startPoint.y} L${startPoint.x} ${startPoint.y}`,
        stroke: "red",
        },
        animate: {
        d: `M${startPoint.x} ${startPoint.y} L${endPoint.x} ${endPoint.y}`,
        stroke: "blue",
        transition: {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity, // Set repeat property to Infinity for infinite loop
            repeatType: "reverse", // Set repeatType property to "loop" for infinite loop
        },
        },
    };
    return (
        <Container className="svg-container mw-100 p-1" style={{position:'relative'}}>
            <motion.svg ref={pathRef} style={{ position: "absolute", top: 0, left: 0, zIndex: 2, width:"100%", height:"100%", overflow:'visible'}}>
                <motion.path
                    d={`M${startPoint.x} ${startPoint.y} L${startPoint.x} ${startPoint.y}`}
                    fill="transparent"
                    stroke="red"
                    strokeWidth="5"
                    animate="animate"
                    variants={pathVariants}
                />
            </motion.svg>
            <div style={{position:'relative', zIndex:1}}>
                <FloorPlan className="svg"></FloorPlan>
            </div>
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