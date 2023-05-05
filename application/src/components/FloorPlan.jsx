import React from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as FloorPlan } from '../resources/Denah.svg'
import { motion } from "framer-motion";
import FAB from "./FAB";
import Path from "./Path";
import "./Components.css";

function FloorPlanComponent(props) {
    const [data, setData] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasRequested, setHasRequested] = React.useState(false);

    const fetchData = (loc, query) => {
        setIsLoading(true);
        fetch(`https://supermarketpathfinder.apin014.repl.co/pathfind/${loc}?dest=${query}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setIsLoading(false);
            console.log(data);
        });
    };

    React.useEffect(() => {
        if (hasRequested) {
            fetchData(props.loc, query);
        }
    }, [hasRequested, props.loc, query]);

    const makeRequest = (query) => {
        setQuery(query);
        setHasRequested(true);
    }

    const pathRef = React.useRef(null);
    const floorPlanRef = React.useRef(null);

    return (
        <div className="canvas">
            <Container className="svg-container mw-100 p-0" style={{position:'relative', zIndex:1}}>
                <motion.svg 
                ref={pathRef} 
                style={{ position: "absolute", top: 0, left: 0, zIndex: 3, width:"100%", height:"100%", overflow:'visible'}}
                >
                    {!isLoading && <Path coordinates={data.path} />}
                </motion.svg>
                <div style={{position:'relative', zIndex:2}} >
                    {props.loc === 'A' && 
                    <FloorPlan className="svg" ref={floorPlanRef} />
                    }
                    {props.loc === 'B' && 
                    <FloorPlan className="svg" ref={floorPlanRef} />
                    }
                </div>
                <FAB clickAction={makeRequest} />
            </Container>
        </div>
    )
}

export default FloorPlanComponent;