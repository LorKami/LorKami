import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css';

const LibreriasMasUsadas = () => {
    const code = 
`git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LorKami/Proyecto.git
git push -u origin main`;

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
