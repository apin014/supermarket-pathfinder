import React from "react";
import { Container } from "react-bootstrap";
import {ReactComponent as FloorPlan} from "../resources/Sample_1.svg";
import { motion } from "framer-motion";
import FAB from "./FAB";
import Path from "./Path";
import "./Components.css";

function FloorPlanComponent() {
    // const startPoint = { x: 1068, y: 329 };
    // const endPoint = { x: 226, y: 720 };
    const coordinates = [
        [1068, 329],
        [855, 400],
        [646, 503],
        [499, 659],
        [226, 720]
    ];

    const pathRef = React.useRef(null);
    const floorPlanRef = React.useRef(null);

    const handleResize = () => {
        const floorPlanWidth = floorPlanRef.current.offsetWidth;
        const floorPlanHeight = floorPlanRef.current.offsetHeight;

        pathRef.current.setAttribute('viewBox', `0 0 ${floorPlanWidth} ${floorPlanHeight}`);
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

    // const pathVariants = {
    //     initial: {
    //     d: `M${startPoint.x} ${startPoint.y} L${startPoint.x} ${startPoint.y}`,
    //     stroke: "red",
    //     },
    //     animate: {
    //     d: `M${startPoint.x} ${startPoint.y} L${endPoint.x} ${endPoint.y}`,
    //     stroke: "blue",
    //     transition: {
    //         duration: 3,
    //         ease: "easeInOut",
    //         repeat: Infinity, // Set repeat property to Infinity for infinite loop
    //         repeatType: "loop", // Set repeatType property to "loop" for infinite loop
    //         repeatDelay: 1,
    //     },
    //     },
    // };

    return (
        <div className="canvas">
            <Container className="svg-container mw-100 p-1" style={{position:'relative', zIndex:1}}>
                <motion.svg ref={pathRef} style={{ position: "absolute", top: 0, left: 0, zIndex: 3, width:"100%", height:"100%", overflow:'visible'}}>
                    {/* <motion.path
                        d={`M${startPoint.x} ${startPoint.y} L${startPoint.x} ${startPoint.y}`}
                        fill="transparent"
                        stroke="red"
                        strokeWidth="5"
                        strokeDasharray="8"
                        animate="animate"
                        variants={pathVariants}
                    /> */}
                    <Path coordinates={coordinates} />
                </motion.svg>
                <div style={{position:'relative', zIndex:2}} ref={floorPlanRef}>
                    <FloorPlan className="svg"></FloorPlan>
                </div>
                <FAB/>
            </Container>
        </div>
    )
}

export default FloorPlanComponent;