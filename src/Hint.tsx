import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { ListGroup, Row, Col } from 'react-bootstrap'; // Import Bootstrap components


const Hint = (props: any) => {
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
                    <StyledLogoLetter>Petunjuk </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Pembelajaran</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={8}>
                    <ListGroup style={{ fontSize: '18px', fontWeight: '600' }} as="ol" numbered>
                        <ListGroup.Item as="li">Bacalah dengan seksama paragraf yang disajikan</ListGroup.Item>
                        <ListGroup.Item as="li">Temukan ide pokok pada pargraf yang telah kalian baca</ListGroup.Item>
                        <ListGroup.Item as="li">Pilih satu jawaban yang menurut kalian benar</ListGroup.Item>
                        <ListGroup.Item as="li"><b>Ingat!</b> Dalam satu bacaan paragraf hanya ada satu kali kesempatan pengerjaan</ListGroup.Item>
                        <ListGroup.Item as="li">Tiap jawaban yang benar maka kalian akan mendapat score!</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <div className={'buttonContainer'}>
                <Link to="/remember">
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

export default Hint