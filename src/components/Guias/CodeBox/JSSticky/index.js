import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css'

const LibreriasMasUsadas = () => {
    const code = 
`///// --------------------- Import --------------------- /////
import React, { useEffect, useState } from 'react';

///// --------------------- Const --------------------- /////
function handleNavClick(section) {
  animateScroll.scrollTo(section);
}

const Monitor = () => {

  const [activeSection, setActiveSection] = useState(null);

const handleSetActive = (to) => {
  setActiveSection(to);
};
///// ------- Debajo de const Pagina = () => { ------- /////

///// --------------------- Codigo --------------------- /////
<div className='MenuSection'>
<div className='MenuBtn'>
  <Link to="Home" smooth={true} spy={true} activeClass="MenActive" offset={0} duration={500} onSetActive={handleSetActive}><p className='BtnMenu'>Home</p></Link>
  <Link to="About" smooth={true} spy={true} activeClass="MenActive" offset={0} duration={500} onSetActive={handleSetActive}><p className='BtnMenu'>About</p></Link>
  <Link to="Tokenomics" smooth={true} spy={true} activeClass="MenActive" offset={0} duration={500} onSetActive={handleSetActive}><p className='BtnMenu'>Tokenomics</p></Link>
  <a href='https://twitter.com/Twitter' target='_blank' ><p className='BtnMenu'>Twitter</p></a>
</div>
</div>`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="code-box">
      <SyntaxHighlighter language="jsx" style={nord}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button>{copied ? 'Copiado!' : 'Copiar'}</button>
      </CopyToClipboard>
    </div>
  );
};

export default LibreriasMasUsadas;
