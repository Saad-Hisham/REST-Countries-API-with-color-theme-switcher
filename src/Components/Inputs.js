import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { filterByName,filterByContinent} from '../Redux Components/Redux';
function Inputs() {
    const dispatch = useDispatch()

    return (
        <div className="Inputs-section-parent" > {/*main parent for inputs section */}
            <Container>
                <Row>
                    {/* search input col */}

                    <Col md={6} className='search-input-section' onChange={(e) => { dispatch(filterByName(e.target.value)) }}>
                        <input type='text' placeholder='Search for a country...' />
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    </Col>

                    {/* filter list  col */}

                    <Col md={6} className='select-input-section'>
                        <select name="continent" onClick={(e)=>{dispatch(filterByContinent(e.target.value))}}>
                            <option value="All">All</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>

                        </select>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Inputs