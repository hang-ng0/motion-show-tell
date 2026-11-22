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
    cursor: pointer; //change the cursor so that when it's on top of the button, it changes to a hand pressing it 
    font-size: calc(2px + 1vw);
`;

const Button2 = styled.button`
    background: transparent;
    color: white;
    border: none;
    cursor: pointer; 
    font-size: calc(2px + 2vw);
    text-align: right;
`;

const StyledMotion = styled(motion.div)`
    position: fixed;
    top: 5%;
    right: 1%;
    background-color: #16a34a;
    color: white;
    padding: 2%;
    border-radius: 15px;
    align-items: center;
    gap: 5%;
    box-shadow: dimgray;
    display: flex;
    width: 28%; 
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
                    <StyledMotion
                        initial = {{
                            opacity: 0,
                            x: 100,
                            scale: 0.8
                        }}
                        animate = {{
                            opacity: 1, //show the box
                            x: 0, //have a little left motion
                            scale: 1 //increase scale to make it seem like a pop up
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
                    >
                        <div>
                            <p>Success!</p>
                            <p>Your changes have been saved.</p>
                        </div>

                        <Button2
                            onClick = {() => setNotification(false)}
                        >
                            x
                        </Button2>

                    </StyledMotion>
                )}
            </AnimatePresence>

        </StyledDiv1>
    )
}