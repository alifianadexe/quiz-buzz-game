import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components


const LearningGoal = (props: any) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const onButtonClick = () => {
        navigate("");
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
                    <StyledLogoLetter>Tujuan </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Pembelajaran</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={8}>
                    <div className="border p-4">
                        <p className="text-center" style={{ fontSize: '18px', fontWeight: '600' }}>
                            <ol>
                                <li>Melalui media game edukasi, peserta didik mampu menelaah informasi mengenai ide pokok dan cara mengidentifikasinya.</li>
                                <li>Melalui game edukasi dan LKPD, peserta didik mampu menemukan ide pokok dalam sebuah paragraf</li>
                            </ol>
                        </p>
                    </div>
                </Col>
            </Row>
            <div className={'buttonContainer'}>
                <Link to="/hint">
                    <input
                        className={'inputButton'}
                        type="button"
                        value="Selanjutnya"
                    />
                </Link>
            </div>
        </div>
    )
}

export default LearningGoal