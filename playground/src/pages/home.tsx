import React from 'react';
import ConnectWalletButton from './../components/common/buttons/connectWallet';
import { useEffect, useState } from 'react';
function Home() {
 
  const directoryPath:string = "D:/Arufa/junokit/playground_temp/src/hooks";
  return ( 
    <div>
      <div className='wallet'>
      <ConnectWalletButton></ConnectWalletButton>
       </div>
    </div>
  )
}

export default Home;
