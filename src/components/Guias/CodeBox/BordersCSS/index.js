import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css'

const LibreriasMasUsadas = () => {
    const code = 
`p.Border1 {
  border-color: #2e2e2e;
  border-image: repeat;
  border-image-slice: 20;
  border-image-source: url(../../images/Borders/border1.png);
  border-style: solid;
  border-width: 17px;
}

p.Border2 {
  border-color: #2e2e2e;
  border-image: repeat;
  border-image-slice: 14;
  border-image-source: url(../../images/Borders/border2.png);
  border-style: solid;
  border-width: 17px;
}

p.Border3 {
  border-color: #2e2e2e;
  border-image: repeat;
  border-image-slice: 30;
  border-image-source: url(../../images/Borders/border3.png);
  border-style: solid;
  border-width: 17px;
}

p.Border4 {
  border-color: #2e2e2e;
  border-image: repeat;
  border-image-slice: 120;
  border-image-source: url(../../images/Borders/border4.png);
  border-style: solid;
  border-width: 67px;
}

p.Border5 {border-style: dotted;}
p.Border6 {border-style: dashed;}
p.Border7 {border-style: solid;}
p.Border8 {border-style: double;}
p.Border9 {border-style: groove;}
p.Border10 {border-style: ridge;}
p.Border11 {border-style: inset;}
p.Border12 {border-style: outset;}
p.Border13 {border-style: dotted dashed solid double;}`;

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
