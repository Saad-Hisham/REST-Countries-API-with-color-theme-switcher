import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
// {Object.values(country.name.nativeName)[0].official}
function DetailsPage() {
    const country = JSON.parse(localStorage.getItem("details"));
    const value = country.population.toString().replace(/[^0-9]/g, 's');
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const Languages = Object.values(country.languages).join(', ');
    const borders = country.borders!=undefined? Object.values(country.borders).join(','):null
    return (
        <Container>
            <Row>

                <Col sm={12} className='back-arrow-contianer'>

                    <Link to="/">
                        <button className='back-arrow'>
                            <span><FontAwesomeIcon icon={faArrowLeft} className="back-arrow" /></span>
                            back
                        </button>
                    </Link>
                </Col>
                <Col sm={12} md={6}>
                    <Image src={country.flags.png} height="402" width="560" fluid/>
                </Col>
                <Col sm={12} md={6}>
                    <h2>{country.name.common}</h2>

                    <Row>
                        <Col sm={12} md={6}>
                            <div className='block-info-details'><span className='head'>Native Name:</span> {Object.values(country.name.nativeName)[0].common}</div>
                            <div className='block-info-details'><span className='head'>Population:</span> {formattedValue}</div>

                            <div className='block-info-details'><span className='head'>Region:</span> {country.region}</div>

                            <div className='block-info-details'><span className='head'>Sub Region:</span> {country.subregion}</div>

                            <div className='block-info-details'><span className='head'>Capital:</span> {country.capital}</div>

                        </Col>

                        <Col sm={12} md={6}>
                            <div className='block-info-details'><span className='head'>Top Level Domain:</span> {country.tld}</div>
                            <div className='block-info-details'><span className='head'>Currencies:</span> {Object.values(country.currencies)[0].name}</div>
                            <div className='block-info-details'><span className='head'>Languages:</span>
                              <span> {Languages}</span>
                             
                             </div>

                        </Col>

                        <Col sm={12} >
                            <div className='block-info-details'><span className='head'>Border Countries: </span><div className='borders-container'>{country.borders!=undefined
                             ? country.borders.map((x,key)=>{
                               return <span className='border-country'key={x}> {x}</span>
                             })
                             :null}</div></div>
                           
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}

export default DetailsPage;
