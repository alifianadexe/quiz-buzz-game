import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { ListGroup, Row, Col } from 'react-bootstrap'; // Import Bootstrap components


const AgainThird = (props: any) => {
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
                    <StyledLogoLetter>Kalimat Utama Pada Tengah Paragraf </StyledLogoLetter>
                    <StyledLogoLetter buzzfeed>(Paragraf Ineratif)</StyledLogoLetter>
                </StyledLogoContainer></div>
            </div>
            <Row className="justify-content-md-center m-4">
                <Col md={8}>
                    <ListGroup style={{ fontSize: '22px', fontWeight: '600' }} as="ul">
                        <ListGroup.Item as="li">Paragraf ineratif adalah paragraf yang letak kalimat utamanya berada di tengah paragraf. Kalimat penjelasnya mengapit kalimat utama </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={8}>
                    <div className="border p-4 m-4">
                        <p className='text-center' style={{ fontSize: '24px', fontWeight: '600' }}>Contoh</p>
                        <p className="text-justify" style={{ fontSize: '22px', fontWeight: '600' }}>
                            Meskipun sudah kedaluwarsa, kandungan bahan kimia pada obat-obatan yang kita konsumsi tidak akan pernah hilang dan justru akan menimbulkan bahaya jika obat-obatan tersebut dibuang di sembarang tempat. <b><mark>Oleh karena itu, sebaiknya kita tidak membuang obat-obatan ke sembarang tempat. </mark></b>Sebagai gantinya, kita dapat mengembalikan obat-obatan tersebut ke pihak apotek atau rumah sakit untuk dihancurkan.

                        </p>
                        <p className="text-justify" style={{ fontSize: '16px', fontWeight: '600', color: 'blue' }}>
                            Sumber : https://bobo.grid.id/read/082839420/jenis-jenis-paragraf-berdasarkan-letak-kalimat-utama-mulai-dari-deduktif-hingga-ineratif-beserta-contohnya?page=all
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center m-4">
                <Col md={6}>
                    <div className={'buttonContainer'}>
                        <Link to="/again2">
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
                        <Link to="/quiz">
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

export default AgainThird