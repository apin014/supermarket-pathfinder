import React from "react";
import { Fab } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { motion, AnimatePresence } from "framer-motion";
import "./Components.css";

function FAB() {
    const [isClicked, setIsClicked] = React.useState(false);
    const fabRef = React.useRef(null); // Ref to FAB element

    React.useEffect(() => {
        // Event listener for clicks outside of the FAB
        const handleOutsideClick = (event) => {
        if (!fabRef.current.contains(event.target)) {
            setIsClicked(false);
        }
        };

        // Add event listener on mount
        document.addEventListener('click', handleOutsideClick);

        // Cleanup event listener on unmount
        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleFabClick = () => {
        setIsClicked(true);
    };

    // Example data structure for clickable elements
    const clickableElements = [
        { id: 1, backgroundColor: '#77b178', label: 'Product 1' },
        { id: 2, backgroundColor: '#77b178', label: 'Product 2' },
        { id: 3, backgroundColor: '#77b178', label: 'Product 3' },
        { id: 4, backgroundColor: '#77b178', label: 'Product 4' },
        { id: 5, backgroundColor: '#77b178', label: 'Product 5' },
        { id: 6, backgroundColor: '#77b178', label: 'Product 6' }
    ].reverse();

    return (
        <div style={{ position: 'fixed', height: '100vh', zIndex: 4 }}>
            <AnimatePresence>
            {isClicked && (
                <motion.div>
                    <motion.div
                    style={{
                        position: 'fixed',
                        bottom: '80px',
                        right: '16px',
                    }}
                    >
                    {/* Map through the data array to generate clickable elements */}
                    {clickableElements.map((element) => (
                        <motion.div
                        key={element.id}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto auto',
                            gap: '8px',
                            alignItems: 'center',
                        }}>
                            <motion.div 
                            style={{
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                            }}
                            initial={{ opacity: 0, x: '100%' }} // Set initial scale to 0 to make elements appear one at a time
                            animate={{ opacity: 1, x: '0%' }} // Animate scale to 1 for appearing effect
                            exit={{ opacity: 0, transition: {delay: (clickableElements.length-element.id) * 0.07}, type: 'spring', stiffness: 175, damping: 10 }}
                            transition={{ delay: (element.id) * 0.07, type: 'spring', stiffness: 175, damping: 12}}
                            >
                                {element.label}
                            </motion.div>
                            <motion.div
                            style={{
                                width: '3.5rem',
                                height: '3.5rem',
                                borderRadius: '50%',
                                backgroundColor: element.backgroundColor,
                                marginBottom: '8px',
                            }}
                            initial={{ opacity: 0, scale: 0 }} // Set initial scale to 0 to make elements appear one at a time
                            animate={{ opacity: 1, scale: 1 }} // Animate scale to 1 for appearing effect
                            exit={{ opacity:0, scale: 0, transition: {delay: (clickableElements.length-element.id) * 0.07}, type: 'spring', stiffness: 175, damping: 10 }}
                            transition={{ delay: (element.id) * 0.07, type: 'spring', stiffness: 175, damping: 12}} // Set transition duration for the appearing effect
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                <ShoppingBasketIcon sx={{marginTop:'16px'}} />
                            </motion.div>
                        </motion.div>
                    ))}
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        <Fab
            aria-label="options"
            sx={{ position: 'fixed', bottom: '16px', right: '16px', backgroundColor: '#ffaf5a', width: '4rem', height: '4rem' }}
            onClick={handleFabClick}
            ref={fabRef}
        >
            <ShoppingBasketIcon sx={{color:'black'}}/>
        </Fab>
        </div>
    );
};

export default FAB;