import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { ListGroup, Row, Col } from 'react-bootstrap'; // Import Bootstrap components


const AgainSecond = (props: any) => {
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
                    <StyledLogoLetter>Kalimat Utama Pada Awal  dan Akhir Paragraf </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>(Paragraf Campuran)</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={8}>
                    <ListGroup style={{ fontSize: '22px', fontWeight: '600' }} as="ul">
                        <ListGroup.Item as="li">Paragraf campuran atau deduktif-induktif adalah paragraf yang letak kalimat utamanya berada di awal dan akhir paragraf, gagasan utama di akhir berfungsi untuk mempertegas gagasan utama di awal paragraf.
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={8}>
                    <div className="border p-4 m-4">
                        <p className='text-center' style={{ fontSize: '24px', fontWeight: '600' }}>Contoh</p>
                        <p className="text-justify" style={{ fontSize: '22px', fontWeight: '600' }}>
                            <b><mark>Hutan mangrove memiliki karakteristik tertentu.</mark></b> Tumbuhan di dalam hutan semacam ini didominasi dengan tumbuhan oleh tumbuhan bakau, maka orang sering menyebutnya hutan bakau. Hutan mangrove terdapat di perairan payau (campuran air asin dan air tawar). Akibatnya hutan mangrove dipengaruhi oleh pasang surut laut.<b><mark>Itulah beberapa ciri yang dimiliki hutan mangrove. </mark></b>
                        </p>

                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center m-4">
                <Col md={6}>
                    <div className={'buttonContainer'}>
                        <Link to="/again1">
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
                        <Link to="/again3">
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

export default AgainSecond