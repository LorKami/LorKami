import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css';


const ReactDomAntiguoFuncional = () => {
    const code = 
`@media screen and (max-width: 1440px) {

}

@media screen and (max-width: 1024px) {

}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 425px) {

}

@media screen and (max-width: 375px) {

}

@media screen and (max-width: 320px) {

}
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
