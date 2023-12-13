import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import headShot from './images/john.jpeg';
import {Link} from 'react-scroll'
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <Container className="text-center p-3">
            <Row>
                <Col md={{span: 6, order: 'first'}} xs={{ order: 'last' }} className="my-auto">
                    <h1 className="fw-bold py-5 display-2">John Chrosniak</h1>
                    <h4 className="display-6">Self-Driving + Robotics Researcher</h4>
                    <h4 className="fw-light">Master's Student at the University of Virginia</h4>
                    <Button variant="outline-primary m-3" size="lg"><Link to="research" spy={true} smooth={true}>Portfolio</Link></Button>
                </Col>
                <Col md={6}>
                    <Image src={headShot} style={{height: "40rem"}}roundedCircle/>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;