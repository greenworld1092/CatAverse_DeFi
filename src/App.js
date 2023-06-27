import React, { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers'
import { ToastContainer, toast } from 'react-toastify';

// External Link
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/nabBar';
import { IMAGES } from './utils/images';
import About from './views/about';
import FAQ from './views/faq';
import MemberShip from './views/memberShip';
import Mint from './views/mint';
import RoadMap from './views/roadMap';
import Team from './views/team';
import 'react-toastify/dist/ReactToastify.css';
import { connectWallet, getCurrentWalletConnected, getContract } from './web3/interact';
import { whiteList } from "./constants/whitelist";


function App() {

  const [walletAddress, setWalletAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [mintLoading, setMintLoading] = useState(false)
  const [tokenPrice, setTokenPrice] = useState(null);
  const [pubsalePrice, setPubsalePrice] = useState(null)
  const [presalePrice, setPresalePrice] = useState(null)
  const [totalSupply, setTotalSupply] = useState(null);
  const [addrWhiteList, setAddrWhiteList] = useState(null)

  const notify = () => toast.info(status, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
  });

  useEffect(() => {
    let whitelist = whiteList.map(addr => addr.toString().toLowerCase());
    setAddrWhiteList(whitelist)
  }, []);

  useEffect(() => {
      ( async () => {
          const { address, status } = await getCurrentWalletConnected()
          setWalletAddress(address)
          setStatus(status)
      })();
  }, [])

  useEffect(() => {
      ( async () => {
      if ( !mintLoading ) {
          let contract = getContract()
          let ts = await contract.totalSupply()
          let pub = await contract.tokenPrice()
          let pre = await contract.presaleTokenPrice()
          setTotalSupply( parseInt(BigNumber.from(ts).toString()) )
          setPubsalePrice( (BigNumber.from(pub).div(BigNumber.from(1e9).mul(BigNumber.from(1e4))).toString() ) )  // original value * 1e5
          setPresalePrice( (BigNumber.from(pre).div(BigNumber.from(1e9).mul(BigNumber.from(1e4))).toString() ) )  // original value * 1e5
      }
      })();
  }, [mintLoading, walletAddress])  

  useEffect(() => {
      if (status) {
          notify()
          setStatus(null)
      }
  }, [status])

  const onClickConnectWallet = async () => {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWalletAddress(walletResponse.address);
    }
  
  const onClickDisconnectWallet = async () => {
      setWalletAddress(null)
  }



  return (
    < >
     <NavBar onClickDisconnectWallet={onClickDisconnectWallet} onClickConnectWallet={onClickConnectWallet} walletAddress={walletAddress} />
     <Mint totalSupply={totalSupply} mintLoading={mintLoading} walletAddress={walletAddress} setStatus={setStatus} setMintLoading={setMintLoading} pubsalePrice={pubsalePrice} presalePrice={presalePrice} addrWhiteList={addrWhiteList} />
     <About/>
     <MemberShip/>
     <RoadMap/>
     <Team />
     <FAQ />
     <Footer />
     <ToastContainer />
    </>
  );
}

export default App;
