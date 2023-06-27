import { useState } from "react";
import { NAVBAR } from "../../utils/navBar";
import { GiHamburgerMenu } from 'react-icons/gi';
import './nav.css';

// GiHamburgerMenu
const NavBar = (props) => {

    const { onClickConnectWallet, onClickDisconnectWallet, walletAddress } = props
    const [selectedId, setSelectedId] = useState("")
    const [show, setShow] = useState(false)

    const onclickItem = (data) => {
        setSelectedId(data)
        setShow(false)
    }

    const onClickMobile = () => {
        setShow(!show)
    }
    function scrollToTargetAdjusted(){
        var element = document.getElementById('faq');
        var headerOffset = 245;
        var elementPosition = element.getBoundingClientRect().top-70;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }

    return (
        <>
        <section className="nav-bar-container">
            <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between' }} >
                <div className={`nav-bar desktop-nav-bar`}>
                    {NAVBAR.map((item, index) => (
                        <div className={`${selectedId === item.id && 'active'}`} key={index}>
                            <span onClick={() => onclickItem(item.id)}>
                                <a href={`#${item.id}`}>
                                    {item.name}
                                </a>
                            </span>
                        </div>
                    ))}
                </div>
                {
                    walletAddress ? 
                    <button className="btn btn-md btn-red btn-wallet desktop-nav-bar" onClick={onClickDisconnectWallet}>{ walletAddress.slice(0, 11) }...</button>
                    :
                    <button className="btn btn-md btn-red btn-wallet desktop-nav-bar" onClick={onClickConnectWallet}>Connect</button>
                }
            </div>
            <div className="mobile-nav-bar">
                Menu <GiHamburgerMenu onClick={() => onClickMobile()} />
            </div>
            {show ?
                <div className={`nav-bar mob-nav-bar`} >
                    {NAVBAR.map((item, index) => (
                        <div className={`${selectedId === item.id && 'active'}`} key={index} >
                            <span onClick={() => onclickItem(item.id)}>
                                <a href={`#${item.id}`}>
                                    {item.name}
                                </a>
                            </span>
                        </div>
                    ))}

                {
                    walletAddress ? 
                    <div className="false"><span onClick={onClickDisconnectWallet}><a>{ walletAddress.slice(0, 11) }...</a></span></div>
                    :
                    <div className="false"><span onClick={onClickConnectWallet}><a>Connect</a></span></div>
                }

                </div>
                : null
            }
        </section>
        </>
    )
}

export default NavBar;