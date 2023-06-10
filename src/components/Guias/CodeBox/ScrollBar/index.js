import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css';


const ReactDomAntiguoFuncional = () => {
    const code = 
`::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-track {
  border-radius: 6px;
  background-color: rgb(136, 89, 156);
  border: solid 2px black;
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  border: solid 2px black;
  background-color: rgb(55, 137, 44);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(76, 190, 60);
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
