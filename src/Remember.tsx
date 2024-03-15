import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { ListGroup, Row, Col } from 'react-bootstrap'; // Import Bootstrap components


const Remember = (props: any) => {
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
                    <StyledLogoLetter>Kalian </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Harus</StyledLogoLetter>
                    <StyledLogoLetter>Ingat </StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={8}>
                    <ListGroup style={{ fontSize: '18px', fontWeight: '600' }} as="ol" numbered>
                        <ListGroup.Item as="li">Ide pokok adalah ide atau gagasan yang menjadi pokok pengembangan paragraf. Makadari itu, nama lain ide pokok adalah gagasan utama. Ide pokok terdapat di kalimat utama dan setiap satu paragraf hanya ada satu ide pokok.</ListGroup.Item>
                        <ListGroup.Item as="li">Satu hal yang perlu kamu ingat adalah, kalimat utama ≠ kalimat pertama. Kalimat utama bisa ada di kalimat pertama, bisa pada kalimat terakhir, atau bahkan kalimat pertama dan terakhir.</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <div className={'buttonContainer'}>
                <Link to="/again">
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

export default Remember