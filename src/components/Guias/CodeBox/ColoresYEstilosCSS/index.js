import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css';


const LibreriasMasUsadas = () => {
    const code = 
`.ReactIconsSec {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}

.ReactIconsSec a {
  text-decoration: none;
  color: white;
  transition: 0.5s;
}

.BTNTwitEje:hover {
  transform: scale(1.2) rotate(7deg);
  color: #1DA1F2;
  cursor: pointer;
}

.BTNDiscEje:hover {
  color: #7289DA;
  transform: scale(1.2) rotate(7deg);
}

.Bloqueado {
  cursor: not-allowed;
}

.BTNTeleje:hover {
  color: #7a7a7a;
}`;

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
