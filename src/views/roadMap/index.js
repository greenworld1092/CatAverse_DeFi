import { Col, Row } from "react-bootstrap";
import { IMAGES } from "../../utils/images";
import './roadmap.css';

const RoadMap = () => {
    return (
        <section id="roadmap" className="roadMap-section">
            <div className="container">
                <div className="title_h2 text-center">
                    <h2>Roadmap</h2>
                </div>
                <p>Our plans moving forward into 2022.</p>
                <Row className="g-0 progress-container">
                    <Col md="5" >
                        <Row className="g-0 left-container text-md-right">
                            <Col md="12" className="top-content" >
                                <h2 className="col-heading">25%</h2>
                                <p className="right-content">10 Spoiled Catas released and find  random owners from holders. </p>
                            </Col>
                            <Col md="12" className="top-content d-md-none" >
                                <h2 className="col-heading">50%</h2>
                                <p className="left-content">Cataverse Merch Store unlocked. Discount for holders. T-Shirts giveaway to 50 exclusive members.</p>
                            </Col>
                            <Col md='12' className="bottom-content" >
                                <h2 className="col-heading">75%</h2>
                                <p>Prepare to setup Cataverse in reality to give stray cats  a home. Started  from local to international.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2" className="mob_none">
                        <div className="center_col">
                            <img src={IMAGES.PROGRESS_BAR} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md="5" >
                        <Row className="g-0 right-container text-md-left">
                            <Col md="12" className="top-content mob_none">
                                <h2 className="col-heading">50%</h2>
                                <p className="left-content">Cataverse Merch Store unlocked. Discount for holders. T-Shirts giveaway to 50 exclusive members.</p>
                            </Col>
                            <Col md='12' className="bottom-content" >
                                <h2 className="col-heading">100%</h2>
                                <p className="left-content">Breeding unlocked. Cata’s owners can breed their Catas to create a 2nd Generation Cata.
<br/> At the same time, we would buy a land in Metaverse to build up our community.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="bottom-text-container">
                    <h2>THE FUTURE, THE BETTER CATAVERSE</h2>
                    <p>Collaborate with famous talented artists to grow the Cataverse even further<br />
                        Massive marketing by crossover with celebrties and big ad in real world Cata figure collection exclusive for holder
                        Cata Art Exhibition in real-life and Metaverse ... etc!</p>
                    <figure className="future-cat" >
                        <img alt="" src={IMAGES.FUTURE_CAT} />
                    </figure>
                </div>
            </div>
        </section>
    )
}
export default RoadMap;