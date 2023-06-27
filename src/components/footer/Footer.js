import { IMAGES } from "../../utils/images";
import { SocialData } from "../../utils/social";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <div className="f_sec">
                            <em><img src={IMAGES.FOOTER_LOGO} className="img-fluid" alt=""/></em>
                            <p>Copyright © 2022 Cataverse All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-md-end f_sec">
                        <ul className="list-unstyled social_icons ms-0 my-2 text-center text-md-end">
                            {SocialData.map((item, index) => (
                                <li key={index}><a href={item.href} rel="noreferrer" target="_blank"><img src={item.image}  alt={item.alt} /></a></li>
                            ))}
                        </ul>
                        <p> 0x66EEA2458AE5FbAaB35070B57f7D08368E014b23 </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;