import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { ListGroup, Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import Image from "react-bootstrap/Image";


const Profile = (props: any) => {
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
                    <StyledLogoLetter>Profil </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Pengembang</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col xs={2} md={2}>
                    <div className="border p-4">
                        <Image
                            src="p1.png"
                            thumbnail
                        />
                        <ListGroup style={{ fontSize: '14px', fontWeight: '600' }} as="ul" >
                            <ListGroup.Item as="li">Drs. Sukardi, M.Pd.</ListGroup.Item>
                            <ListGroup.Item as="li">NIP : 195905111987031001</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col xs={2} md={2}>
                    <div className="border p-4">
                        <Image
                            src="p2.jpg"
                            thumbnail
                        />
                        <ListGroup style={{ fontSize: '14px', fontWeight: '600' }} as="ul" >
                            <ListGroup.Item as="li">Zirly Fiera Qonitattsani</ListGroup.Item>
                            <ListGroup.Item as="li">NIM : 1401420199</ListGroup.Item>
                            <ListGroup.Item as="li">Pendidikan Guru Sekolah Dasar Universitas Negeri Semarang</ListGroup.Item>
                        </ListGroup>
                    </div>

                </Col>
            </Row>
            <Row className="justify-content-md-center m-4">
                <Col md={6}>
                    <div className={'buttonContainer'}>
                        <Link to="/">
                            <input
                                className={'inputButton'}
                                type="button"
                                value="Kembali"
                            />
                        </Link>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={'buttonContainer'}>
                        <Link to="/guide">
                            <input
                                className={'nextButton'}
                                type="button"
                                value="Selanjutnya"
                            />
                        </Link>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Profile