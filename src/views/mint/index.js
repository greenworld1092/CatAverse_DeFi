import React, { useState, useEffect } from 'react';
import { BigNumber } from 'ethers';
import { Col, Row } from "react-bootstrap";
import { IMAGES } from "../../utils/images";
import { SocialData } from "../../utils/social";
import { getContract } from '../../web3/interact';
import './style.css';

const Mint = (props) => {

    const { setStatus, mintLoading, walletAddress, setMintLoading, pubsalePrice, presalePrice, totalSupply, addrWhiteList } = props
    const [mintCount, setMintCount] = useState(1);
    const [tokenPrice, setTokenPrice] = useState(0)
    const offset = (new Date().getTimezoneOffset()) * 60 * 1000
    console.log(new Date().getTimezoneOffset())
    const presaleTime = new Date("February 20, 2022 00:00:00").getTime() - offset
    const pubsaleTime = new Date("February 21, 2030 00:00:00").getTime() - offset

    useEffect(() => {
        let price = new Date().getTime() < pubsaleTime ? presalePrice : pubsalePrice
        setTokenPrice(price)
    }, [pubsalePrice, presalePrice])

    function onChangeCountInput(e) {  
        if (!e.target.validity.patternMismatch) {
          if(e.target.value == "") {
            e.preventDefault()
            return
          }
          let inputVal = parseInt(e.target.value)
          if (inputVal > 10 || inputVal < 1) {
            e.preventDefault()
            return
          }
          setMintCount(inputVal)  
        }
      }

    const onClickIncrement = () => {
        if(mintCount < 10) {
            setMintCount(mintCount+1)
        }else {
            setMintCount(10)
        }
    }

    const onClickdecrement = () => {
        if(mintCount > 1) {
            setMintCount(mintCount-1)
        }else {
            setMintCount(1)
        }
    }

    async function onMint(event) {
        let occupied_list, total_list, available_list;
        let curTime = new Date().getTime()

        if (!walletAddress) {
            setStatus('Please connect your Wallet')
            return
        }
        const contract = getContract(walletAddress)
        // Get already Occupied Token List from contract
        try {
            let ol = await contract.occupiedList()
            occupied_list = ol.map( bn => BigNumber.from(bn).toNumber() );
        } catch (err) {
            let errorContainer =  (err.error && err.error.message)  ? err.error.message : ''
            let errorBody = errorContainer.substr(errorContainer.indexOf(":")+1)
            let status = "Transaction failed because you have insufficient funds or sales not started"
            errorContainer.indexOf("execution reverted") === -1 ? setStatus(status) : setStatus(errorBody)
        }
        // Get available list 
        total_list = Array.from(Array(10001).keys())
        total_list.shift()
        available_list = total_list.filter(id => !occupied_list.includes(id))
        // Mint token using contract function

        if(curTime < presaleTime) {
            setStatus('Please wait for the private sale time')
            return
        }
        // Check user is whitelisted for pre-sale
        if(curTime>=presaleTime && curTime<pubsaleTime && Array.isArray(addrWhiteList) && walletAddress != null) {
            if(!addrWhiteList.includes(walletAddress.toString().toLowerCase())) {
                setStatus('Please wait for the public sale time')
                return
            } else {
                setTokenPrice(presalePrice)
            }
        }
        if(curTime >= pubsaleTime) {
            setTokenPrice(pubsalePrice)
        }

        setMintLoading(true)
        setStatus('Minting, please wait for a moment...')
        try {
            let shuffled = available_list.sort(function(){return .5 - Math.random()});
            let mint_list = shuffled.slice(0, mintCount);

            if (tokenPrice == pubsalePrice) {
                let tx = await contract.mintToken(mint_list, { value: BigNumber.from(1e9).mul(BigNumber.from(1e4)).mul(tokenPrice).mul(mintCount), from: walletAddress })
                let res = await tx.wait()
                if (res.transactionHash) {
                    setStatus(`You minted ${mintCount} CATA Successfully`)
                    setMintLoading(false)
                }
            } else if (tokenPrice == presalePrice) {
                let tx = await contract.preSaleToken(mint_list, { value: BigNumber.from(1e9).mul(BigNumber.from(1e4)).mul(tokenPrice).mul(mintCount), from: walletAddress })
                let res = await tx.wait()
                if (res.transactionHash) {
                    setStatus(`You minted ${mintCount} CATA Successfully`)
                    setMintLoading(false)
                }
            }
        } catch (err) {
            let errorContainer =  (err.error && err.error.message)  ? err.error.message : ''
            let errorBody = errorContainer.substr(errorContainer.indexOf(":")+1)
            let status = "Transaction failed because you have insufficient funds or sales not started"
            errorContainer.indexOf("execution reverted") === -1 ? setStatus(status) : setStatus(errorBody)
            setMintLoading(false)
        }
    }

    return (
        <>
            <div className="top_header">
                <div className="container">
                    <figure><img className="img-fluid" src={IMAGES.LOGO} alt="" /></figure>
                </div>
            </div>

            <section id="mint" className="mint-section">
                
                <div className="container">
                    <ul className="list-unstyled social_icons my-4">
                        {SocialData.map((item, index) => (
                            <li key={index}><a href={item.href} target="_blank"><img src={item.image}  alt={item.alt} /></a></li>
                        ))}
                    </ul>

                    <div className="row align-items-start mt-5">
                        
                        <Col md="3" xs="12">
                            <figure className="frame-cate-pic"><img className="w-100" src={IMAGES.CATE_FRAME} alt="" /></figure>
                        </Col>
                        
                        <Col md="9" xs="12">
                            <div className="logo-content">
                                
                                <div className="sec_title">
                                    <h2><em><img src={IMAGES.CAT_LOGO} alt="" /></em> Mint a Cataverse’s CATA</h2>
                                    <span> {10000 - totalSupply} / 10000 cata left</span>
                                </div>

                                <div className="input_group">
                                    <div className="d-flex align-items-center flex-wrap justify-content-center justify-content-md-start text_data">
                                        <div className="d-flex align-items-center input_label">
                                            <button onClick={()=>onClickdecrement()}>-</button>
                                            <input value={mintCount || ''} pattern="^[0-9]*$" onChange={e => onChangeCountInput(e)} />
                                            <button onClick={()=>onClickIncrement()} >+</button>
                                        </div>
                                        {
                                            mintLoading ? 
                                            <button className="btn btn-md btn-blue" onClick={e => e.preventDefault()}>Minting</button>
                                            :
                                            <button className="btn btn-md btn-blue" onClick={e => onMint(e)}>Mint Now!</button>
                                        }
                                    </div>
                                    <p>Total Mint Cost: {parseFloat(mintCount * tokenPrice / 100000).toFixed( 2 )} ETH + gas fees</p>
                                </div>

                            </div>
                        </Col>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Mint;