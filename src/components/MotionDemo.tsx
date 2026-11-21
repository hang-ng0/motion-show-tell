import {motion, AnimatePresence} from 'motion/react';
import {useState} from 'react';
import styled from "styled-components";

const StyledDiv1 = styled.div`
    padding: 60px;
    text-align: center;
    font-family: "Dubai Medium",serif;
    font-size: calc(2px + 1.4vw);
`;

const SaveButton = styled.button`
    padding: 1%;
    background-color: steelblue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: calc(2px + 1vw);
`;

const Button2 = styled.button`
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-size: calc(2px + 1vw);
`;

export default function MotionDemo() {
    const [notification, setNotification] = useState(false);
    return(
        <StyledDiv1>
            <h1>Motion Demo</h1>
            <p>Click below to save your changes.</p>
            <SaveButton
                onClick={() => setNotification(true)}
            >
                Save Changes
            </SaveButton>

            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial = {{
                            opacity: 0,
                            x: 100,
                            scale: 0.8
                        }}
                        animate = {{
                            opacity: 1,
                            x: 0,
                            scale: 1
                        }}
                        exit = {{
                            opacity: 0,
                            x: 100,
                            scale: 0.8
                        }}
                        transition = {{
                            duration: 0.5,
                            ease: "easeOut"
                        }}

                        style={{
                            position: "fixed",
                            top: "30px",
                            right: "30px",
                            backgroundColor: "#16a34a",
                            color: "white",
                            padding: "20px 30px",
                            borderRadius: "12px",
                            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                            display: "flex",
                            alignItems: "center",
                            gap: "15px"
                        }}
                    >
                        <span>✓</span>
                        <div>
                            <p>Success!</p>
                            <p>Your changes have been saved.</p>
                        </div>

                        <Button2
                            onClick = {() => setNotification(false)}
                        >
                            x
                        </Button2>

                    </motion.div>
                )}
            </AnimatePresence>

        </StyledDiv1>
    )
}