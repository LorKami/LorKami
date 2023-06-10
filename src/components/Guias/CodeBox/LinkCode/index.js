import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css';


const ReactDomAntiguoFuncional = () => {
    const code = 
`///// --------------------- Import --------------------- /////
import { Link, animateScroll as scroll } from "react-scroll";

///// --------------------- Const --------------------- /////
const [activeSection, setActiveSection] = useState(null);
const handleSetActive = (to) => {
  setActiveSection(to);
};
///// ------- Debajo de const Pagina = () => { ------- /////

///// --------------------- Codigo --------------------- /////
<Link to="PasoUno" smooth={true} duration={700} spy={true} exact="true" offset={14} activeClass="active" onSetActive={handleSetActive}><a>CREAR PROYECTO</a></Link>
`;

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

export default ReactDomAntiguoFuncional;
