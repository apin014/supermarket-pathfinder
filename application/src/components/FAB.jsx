import React from "react";
import { Fab } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from "framer-motion";
import debounce from 'lodash.debounce';
import "./Components.css";

function FAB(props) {
    const [isClicked, setIsClicked] = React.useState(false);
    const fabRef = React.useRef(null); // Ref to FAB element
    const scrollRef = React.useRef(null);

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

    React.useEffect(() => {
        if (isClicked && scrollRef.current) {
            const container = scrollRef.current;
            container.scrollTop = container.scrollHeight;
        }
    }, [isClicked]);

    const handleFabClick = React.useCallback(() => {
        setIsClicked(!isClicked);
    }, [isClicked]);

    const debouncedFabHandler = React.useMemo(
        () => debounce(handleFabClick, 300), [handleFabClick]
    );

    const clickableElements = [
        {id: 1, label: 'Bakery', backgroundColor: '#ff604a' },
        {id: 2, label: 'Prepared Foods', backgroundColor: '#31c62e'},
        {id: 3, label: 'Dairy', backgroundColor: '#2ec6bd'},
        {id: 4, label: 'Frozen Food', backgroundColor: '#b0c62e'},
        {id: 5, label: 'Meat & Seafood', backgroundColor: '#ce6e9c'},
        {id: 6, label: 'Bulk', backgroundColor: '#876ece'},
        {id: 7, label: 'Toys', backgroundColor: '#609fa3'},
        {id: 8, label: 'Stationery', backgroundColor: '#ffda58'},
        {id: 9, label: 'Pharmacy', backgroundColor: '#ffa858'},
        {id: 10, label: 'Toiletries', backgroundColor: '#c5c5c5'},
        {id: 11, label: 'Household Equipment', backgroundColor: '#c5c5c5'},
        {id: 12, label: 'Snacks', backgroundColor: '#c5c5c5'},
        {id: 13, label: 'Instant Foods', backgroundColor: '#c5c5c5'},
        {id: 14, label: 'Room Equipment', backgroundColor: '#c5c5c5'},
        {id: 15, label: 'Clothing Equipment', backgroundColor: '#c5c5c5'},
        {id: 16, label: 'Front Counter', backgroundColor: '#ffcfcf'},
        {id: 17, label: 'Cashier', backgroundColor: '#ffcfcf'},
        {id: 18, label: 'Exit', backgroundColor: '#d9d9d9'}
    ].reverse();

    const handleOption = (element) => {
        let query;
        switch(element.label) {
            case 'Bakery':
                query = 'bakery';
                break;
            case 'Prepared Foods':
                query = 'prepared_foods';
                break;
            case 'Dairy':
                query = 'dairy';
                break;
            case 'Frozen Food':
                query = 'frozen_food';
                break;
            case 'Meat & Seafood':
                query = 'meat_and_seafood';
                break;
            case 'Bulk':
                query = 'bulk';
                break;
            case 'Toys':
                query = 'toys';
                break;
            case 'Stationery':
                query = 'stationery';
                break;
            case 'Pharmacy':
                query = 'pharmacy';
                break;
            case 'Toiletries':
                query = 'toiletries';
                break;
            case 'Household Equipment':
                query = 'household_equipment';
                break;
            case 'Snacks':
                query = 'snacks';
                break;
            case 'Instant Foods':
                query = 'instant_foods';
                break;
            case 'Room Equipment':
                query = 'room_equipment';
                break;
            case 'Clothing Equipment':
                query = 'clothing_equipment';
                break;
            case 'Cashier':
                query = 'cashier';
                break;
            case 'Front Counter':
                query = 'front_counter';
                break;
            default:
                query = 'exit';
        }
        props.clickAction(query);
    }

    return (
        <div style={{ position: 'fixed', height: '100vh', zIndex: 100 }}>
            <AnimatePresence>
            {isClicked && (
                <motion.div>
                    <motion.div 
                    ref={scrollRef}
                    style={{
                        position: 'fixed',
                        bottom: '80px',
                        right: '16px',
                        height: '73.5vh',
                        overflowY: 'scroll',
                    }}
                    >
                    {/* Map through the data array to generate clickable elements */}
                    {clickableElements.map((element) => (
                        <motion.div
                        key={element.id}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto max-content',
                            gap: '8px',
                            height: 'fit-content',
                            alignItems: 'center',
                            justifyContent: 'right',
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
                            className='option'
                            style={{backgroundColor: element.backgroundColor}}
                            onClick={() => handleOption(element)}
                            initial={{ opacity: 0, scale: 0 }} // Set initial scale to 0 to make elements appear one at a time
                            animate={{ opacity: 1, scale: 1 }} // Animate scale to 1 for appearing effect
                            exit={{ opacity:0, scale: 0, transition: {delay: (clickableElements.length-element.id) * 0.07}, type: 'spring', stiffness: 175, damping: 10 }}
                            transition={{ delay: (element.id) * 0.07, type: 'spring', stiffness: 175, damping: 12}} // Set transition duration for the appearing effect
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, backgroundColor: '#595959', transition: {duration: 0.1} }}
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
            sx={{ position: 'fixed', bottom: '16px', right: '16px', width: '4rem', height: '4rem', '&.MuiFab-root':{backgroundColor: isClicked ? '#d75028' : '#ffaf5a'}}}
            onClick={debouncedFabHandler}
            ref={fabRef}
        >
            {isClicked ? <CloseIcon sx={{color: 'black'}} />: <ShoppingBasketIcon sx={{color:'black'}}/>}
            {console.log(isClicked)}
            
        </Fab>
        </div>
    );
};

export default FAB;