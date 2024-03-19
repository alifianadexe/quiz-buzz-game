import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import useSound from 'use-sound';

const Play = (props: any) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const [playSound] = useSound('background.mp3');

    const onButtonClick = () => {
        playSound();
        navigate("profile");
    }

    useEffect(() => {
        // Play music when the component mounts

    }, []);

    const containerStyle = {
        backgroundImage: `url('backgif.gif')`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
    };


    return (
        <div className="mainContainer" style={containerStyle}>
            <div className={'titleContainer'}>
                <div><StyledLogoContainer>
                    <StyledLogoLetter>Game</StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Edukasi</StyledLogoLetter>
                    <StyledLogoLetter>Anak</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <div><h4>Quiz Game Edukasi Tentang Ide Pokok</h4></div>
            <div className={'buttonContainer'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? 'Mulai' : 'Mulai'}
                />
                {loggedIn ? <div>Your email address is {email}</div> : <div />}
            </div>
        </div>
    )
}

export default Play