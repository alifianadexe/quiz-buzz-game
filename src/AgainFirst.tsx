import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { ListGroup, Row, Col } from 'react-bootstrap'; // Import Bootstrap components


const AgainFirst = (props: any) => {
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
                    <StyledLogoLetter>Kalimat Utama Pada Akhir Paragraf  </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>(Paragraf Induktif)</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={8}>
                    <ListGroup style={{ fontSize: '20px', fontWeight: '600' }} as="ul">
                        <ListGroup.Item as="li">Paragraf deduktif adalah paragraf yang letak kalimat utamanya berada di akhir paragraf. Kalimat-kalimat sebelum kalimat utama disebut kalimat penjelas.
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Ciri paragraf induktif adalah adanya kata atau kalimat konjungsi seperti 'jadi', 'oleh karena itu', 'maka dari itu', dan 'akhirnya'.
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={8}>
                    <div className="border p-4 m-4">
                        <p className='text-center' style={{ fontSize: '22px', fontWeight: '600' }}>Contoh</p>
                        <p className="text-justify" style={{ fontSize: '20px', fontWeight: '600' }}>
                            Kementrian Lingkungan Hidup mencatat pada 2016 jumlah komodo sebanyak 2.430 ekor, pada 2017 sebanyak 2.884 ekor, sedangkan 2018 sebanyak 2.879 ekor. Monitoring terus dilakukan setiap tahun. Hal ini agar populasi komodo tidak punah. Jumlah populasi komodo dipengaruhi erat oleh iklim dan perilaku manusia.<b><mark>Maka dari itu, meski populasi komodo dapat dikatakan stabil, namun kita harus tetap menjaga kelestarian alam dan habitat komodo.</mark></b>
                        </p>
                        <p className="text-justify" style={{ fontSize: '20px', fontWeight: '600', color: 'brown' }}>
                            Kalimat yang dicetak tebal dari paragraf di atas menunjukkan kalimat utamanya. Sedangkan kalimat-kalimat di belakangnya merupakan kalimat penjelas
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center m-4">
                <Col md={6}>
                    <div className={'buttonContainer'}>
                        <Link to="/again">
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
                        <Link to="/again2">
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

export default AgainFirst