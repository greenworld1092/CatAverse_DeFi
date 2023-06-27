import { Col, Row } from "react-bootstrap";
import { TeamData } from "../../utils/team";
import './team.css';

const Team = () => {
    return (
        <section id="team" className="team-section">
        <div className="container">
            <div className="h2 text-center">
                <h2>Team</h2>
            </div>
            <Row>
                {TeamData.map((item, index) => (
                    <Col md="4" sm="12" xs="12" key={index}>
                        <div className="team_col">
                            <em><img src={item.image} alt="" className="img-fluid" /></em>
                            <h6>{item.name}</h6>
                            <p>{item.about}</p>
                        </div>
                    </Col>
                ))}
            </Row>
            </div>
        </section>
    )
}
export default Team;