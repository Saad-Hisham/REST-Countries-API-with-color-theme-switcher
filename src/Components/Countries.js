import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, showDetails } from '../Redux Components/Redux';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Countries() {
    // define use dispatch hook
    const dispatch = useDispatch();

    // store the data from api in redux store
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    // calling data from redux store
    const { data, loading, error } = useSelector(state => state);
    const filtered = useSelector((state) => state.filteredData);

    if (loading) {
        return <div className='loading'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="countries-parent-container">
            <Container>
                <Row className='countries-row'>
                    {filtered.map((x) => {
                        // using regex to add , after every number field
                         const value = x.population.toString().replace(/[^0-9]/g, 's');
                         const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        return (
                           
                            <Col lg={3} className='country-container' key={x.name.common} onClick={()=>{dispatch(showDetails(x))}}>
                                 <Link to ="/details">
                                <Image src={x != undefined ? x.flags.png : null} fluid alt={x.name.common + " flag"} maxwidth="100%" />
                                <div>
                                    <div>

                                    </div>
                                    <div className='country-info'>
                                        <div><h5>{x != undefined ? x.name.common : null}</h5></div>
                                        <div className='info-block'><span className='head'>Population:</span> {x != undefined ? formattedValue : null}</div>
                                        <div className='info-block'><span className='head'>Region:</span> {x != undefined ? x.region : null}</div>
                                        <div className='info-block'><span className='head'>Capital:</span> {x != undefined ? x.capital : null}</div>
                                    </div>
                                </div>


                                </Link>
                            </Col>
                          
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default Countries