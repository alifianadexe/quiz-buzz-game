import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components


const Guide = (props: any) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()


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
                    <StyledLogoLetter>Capaian </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Pembelajaran</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={6}>
                    <div className="border p-4">
                        <p className="text-center" style={{ fontSize: '18px', fontWeight: '600' }}>
                            Peserta didik mampu mengidentifikasi ide pokok dari teks deskripsi, narasi dan eksposisi, serta nilai-nilai yang terkandung dalam teks sastra (prosa dan pantun, puisi) dari teks dan/atau audiovisual.
                        </p>
                    </div>
                </Col>
            </Row>
            <div className={'buttonContainer'}>
                <Link to="/learning-goal">
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

export default Guide