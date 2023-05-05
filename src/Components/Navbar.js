import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../Redux Components/Redux';
function Navbar() {
    const dispatch = useDispatch()
    return (
        <div className="nav-bar-parent-container"> {/*main parent for navbar */}
        <Container>
            <Row>
                 {/* heading col */}

                <Col xs={6} className='heading-section'> 
                    <h1>Where in the world?</h1>
                </Col>

                {/* dark mode icon call */}

                <Col xs={6} className='dark-mode-section'>
                    <button onClick={()=>{dispatch(changeTheme())}}><FontAwesomeIcon icon={faMoon} /> Dark mode</button>
                </Col>

            </Row>
            </Container>
        </div>
    )
}
export default Navbar