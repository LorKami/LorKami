import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css';


const ReactDomAntiguoFuncional = () => {
    const code = 
`<head>
<meta charset="utf-8" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<meta name="description" content="CHANGE"/>
<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<title>CHANGE</title>

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@CHANGE">
<meta name="twitter:title" content="CHANGE">
<meta name="twitter:description" content="CHANGE">
<meta name="twitter:image" content="https://CHANGE.xyz/card.png">

<meta property="og:title" content="CHANGE">
<meta property="og:type" content="website">
<meta property="og:url" content="https://CHANGE.xyz">
<meta property="og:image" content="https://CHANGE.xyz/card.png">
<meta property="og:description" content="CHANGE">
</head>
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
