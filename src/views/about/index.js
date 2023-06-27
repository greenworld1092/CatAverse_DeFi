import { Col, Row } from "react-bootstrap";
import { SocialData } from "../../utils/social";
import { IMAGES } from "../../utils/images";
import './about.css';

const About = () => {
    return (
        <section id="about" className="about-section common-section">
            <div className="container">
                <Row className="align-items-start">
                    <Col md="3" xs="12">
                        <figure className="frame-cate-pic"><img className="w-100" src={IMAGES.ABOUT_SECTION} alt="" /></figure>
                    </Col>
                    <Col md="9" xs="12" sm="12">
                        <div className="about_content">
                            <h2>About Cataverse</h2>
                            <p>Cataverse is a collectible NFT project for cat lovers. All Cataverse’s cats (CATAs) come in a joyful range of colors, traits and sizes with a collection size of 10,000 which are programmatically, randomly generated on the Ethereum blockchain. Cool Cata owners can participate in exclusive events and physical collectibles such as figures and other products.</p>
                            <p>Our goal aims to share the love with cats in reality and build the cat lovers’ community in metaverse by raising funds to help stray cats but not only a profile pic without any contribution to the society. We are building the community of earn-and-share with art and technology.</p>
                            
                            <div className="row">
                                <div className="col-md-3 col-5"><strong>PRE-SALE DATE:</strong></div>
                                <div className="col-md-4 col-6"><span>February 20th</span></div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-5"><strong>PRE-SALE COST:</strong></div>
                                <div className="col-md-4 col-6"> <span>0.04 ETH + gas fees</span></div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-5"><strong>MINT DATE:</strong></div>
                                <div className="col-md-4 col-6"><span>TBA</span></div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-5"><strong>MINT COST:</strong></div>
                                <div className="col-md-4 col-6"> <span>0.05 ETH + gas fees</span></div>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container-fluid px-0 pt-5">
                <Row className="g-0 align-items-center about_sec_2">
                    <Col md="6" xs="12" sm="12">
                        <figure className="m-0"><img className="w-100" src={IMAGES.ABOUT_SECTION_SECOND} /></figure>
                    </Col>
                    <Col md="6" xs="12" sm="12">
                        <div className="about-cat-content">
                            <h2>Mint with physical gift!</h2>
                            <p>We express our true appreciations to the initial supporters who mint our cataverse NFTs by sending out an unique high quality printing artwork with photo frame, all would have the founder signature and unique number.
                            </p>
                            <p>Don’t wait until it’s too late. Check out our Discord, Twitter or Instagram about how to get into the whitelist for pre-sale!</p>
                            <ul className="list-unstyled social_icons ms-0 text-start">
                                {SocialData.map((item, index) => (
                                    <li key={index}><a href={item.href} target="_blank"><img src={item.image}  alt={item.alt} /></a></li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
export default About;