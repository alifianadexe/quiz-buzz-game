import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import useSound from 'use-sound';

const End = (props: any) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const onButtonClick = () => {
        navigate("guide");
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
                    <StyledLogoLetter>Terima</StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Kasih</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <div><h4>Telah Bermain Game Edukasi Ide Pokok</h4></div>
            <div className={'buttonContainer'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? 'End' : 'End'}
                />
                {loggedIn ? <div>Your email address is {email}</div> : <div />}
            </div>
        </div>
    )
}

export default End