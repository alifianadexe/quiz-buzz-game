import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { ListGroup, Row, Col } from 'react-bootstrap'; // Import Bootstrap components


const Again = (props: any) => {
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
                    <StyledLogoLetter>Masih Ingat </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Caranya?</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={10}>
                    <ListGroup style={{ fontSize: '18px', fontWeight: '600' }} as="ol" numbered>
                        <ListGroup.Item as="li">Baca seluruh paragraf dengan cermat</ListGroup.Item>
                        <ListGroup.Item as="li">Cermati kalimat pertama hingga akhir</ListGroup.Item>
                        <ListGroup.Item as="li">Baca dan maknai tiap kalimatnya</ListGroup.Item>
                        <ListGroup.Item as="li">Tandai info penting yang dapat ditarik menjadi ide pokok</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <div className={'buttonContainer'}>
                <Link to="/quiz">
                    <input
                        className={'inputButton'}
                        type="button"
                        value="Mainkan"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Again