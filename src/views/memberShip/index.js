import { Col, Row } from "react-bootstrap";
import { memberShipData } from "../../utils/memberShip";
import './member.css';

const MemberShip =() => {
    return(
        <section id="membership" className="member-section">
            <div className="container">
                <div className="text-center mem_title">
                    <h2>Membership</h2>
                    <p>When you buy a Cata, you’re not simply buying a simple NFT, you are getting access to a community where benefits will increase with the time and add meaningful value of your life.</p>
                </div>
                
                <Row>
                    {memberShipData.map((item, index) => (
                        <Col key={index} md="4">
                            <div className="member_col">
                                <em><img alt=""  src={item.image} className="img-fluid" /></em>
                                <h6>{item.heading}</h6>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}
export default MemberShip;