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
                    <StyledLogoLetter>Ide </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>Pokok</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={8}>
                    <ListGroup style={{ fontSize: '22px', fontWeight: '600' }} as="ul">
                        <ListGroup.Item as="li">Ide pokok adalah ide atau gagasan yang menjadi pokok pengembangan paragraf (gagasan utama). Ide pokok terdapat di kalimat utama dan setiap satu paragraf hanya ada satu ide pokok
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={8}>
                    <div className="border p-4 m-4">
                        <p className='text-center' style={{ fontSize: '24px', fontWeight: '600' }}>Contoh</p>
                        <p className="text-justify" style={{ fontSize: '22px', fontWeight: '600' }}>
                            <b><mark>Korban virus Covid 19 di Indonesia terus bertambah seiring dengan meningkatnya mobilitas masyarakat</mark></b> saat hari raya Idul Fitri dan Idul Adha. Pemerintah terus berupaya menekan laju mobilitas masyarakat dengan melakukan banyak pembatasan dan penyekatan.
                        </p>
                        <p className="text-justify" style={{ fontSize: '16px', fontWeight: '600', color: 'blue' }}>
                            Sumber : https://mamikos.com/info/contoh-soal-ide-pokok-paragraf-pljr/
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center m-4">
                <Col md={6}>
                    <div className={'buttonContainer'}>
                        <Link to="/hint">
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
                        <Link to="/again">
                            <input
                                className={'nextButton'}
                                type="button"
                                value="Selanjutnya"
                            />
                        </Link>
                    </div>
                </Col>
            </Row>

        </div >
    )
}

export default Remember