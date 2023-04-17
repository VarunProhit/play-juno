import React, { useState } from 'react';
import ConnectWalletButton from './../components/common/buttons/connectWallet';
// import { useEffect, useState } from 'react';
import Headlines from './headlines';
import contractName from "../../src/contracts.json";
import Instantiate from './instantiate';
import Execute from './execute';
import Query from './query';
import './home.css'

function Home() {
  
  
    const [activeSection, setActiveSection] = useState<string | null>(null);
  
    const handleNavClick = (sectionName: string) => {
      setActiveSection(sectionName);}
  
  
  return ( 
    <>
    <div className='home-page'>
      {/* <div className='container'> */}
      <div className='sidebar'>
      <ConnectWalletButton></ConnectWalletButton>

           <ul>
          {contractName.map((name, index) => (
           <li key={index}>
               {name}
            </li>
           ))}
             </ul>
      </div>
      {/* <div className='navbar-container'> */}
        <div className='navbar'>
          <div className='description'> <Headlines heading='Contract Name' subheading='contract description'></Headlines></div>
       <button onClick={() => handleNavClick('instantiate')} className={`navbar-item ${activeSection !== 'query' && activeSection !== 'execute'? 'active' : ''}`}>
      <div className='instantiate'>
        
        <Headlines heading='Instantiate' subheading='ewibaa. ne'></Headlines>
       
      </div>
      </button>
      <button onClick={() => handleNavClick('query')} className={`navbar-item ${activeSection === 'query' ? 'active' : ''}`}>
      <div className='query'>
    
      <Headlines heading='Query' subheading='ewibaa. ne'></Headlines>
 
      </div>
      </button>
      <button onClick={() => handleNavClick('execute')} className={`navbar-item ${ activeSection === 'execute'? 'active' : ''}`}>

      <div className='execute'>
     
      <Headlines heading='Execute' subheading='ewibaa. ne'></Headlines>
      
      </div>
      </button>
      </div>
      {/* </div> */}
      <div className='playground'>
        {(activeSection !== 'instantiate' && activeSection !== 'execute' && activeSection !== 'query' )&& <Instantiate />}
        {activeSection === 'instantiate' && <Instantiate />}
        {activeSection === 'execute' && <Execute />}
        {activeSection === 'query' && <Query />}
      </div>
    </div>
      {/* </div> */}
  
    </>
  )
}

export default Home;
