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
                    <StyledLogoLetter>Kalimat Utama Pada Awal Paragraf </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>(Paragraf Deduktif)</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={8}>
                    <ListGroup style={{ fontSize: '22px', fontWeight: '600' }} as="ul">
                        <ListGroup.Item as="li">Paragraf deduktif adalah paragraf yang letak kalimat utamanya berada di awal paragraf. Kalimat-kalimat setelah kalimat utama disebut kalimat penjelas.
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={8}>
                    <div className="border p-4 m-4">
                        <p className='text-center' style={{ fontSize: '24px', fontWeight: '600' }}>Contoh</p>
                        <p className="text-justify" style={{ fontSize: '22px', fontWeight: '600' }}>
                            <b><mark>Komodo merupakan hewan langka dilindungi.</mark></b> Kementrian Lingkungan Hidup dan Kehutanan mencatat, per 2017 tercatat 2.884 ekor komodo di Taman Nasional Komodo. Kadal terbesar di dunia ini termasuk dalam daftar hewan dilindungi karena jumlahnya sedikit. Penyebab langkanya komodo akibat habitat komodo yang semakin hari semakin tercemar.

                        </p>
                        <p className="text-justify" style={{ fontSize: '22px', fontWeight: '600', color: 'brown' }}>
                            Kalimat yang dicetak tebal dari paragraf di atas menunjukkan kalimat utamanya. Sedangkan kalimat-kalimat di belakangnya merupakan kalimat penjelas
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center m-4">
                <Col md={6}>
                    <div className={'buttonContainer'}>
                        <Link to="/remember">
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
                        <Link to="/again1">
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

export default Again