import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css'

const LibreriasMasUsadas = () => {
    const code = 
`.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.gallery-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s linear;
}

.gallery-image:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .gallery-image {
      width: 240px;
      height: 240px;
    }
}

@media screen and (max-width: 425px) {
  .AboutAbout h2 {
      font-size: 3rem;
  }
}

@media screen and (max-width: 375px) {
  .AboutAbout h2 {
      font-size: 2.8rem;
  }
}

@media screen and (max-width: 320px) {
  .AboutAbout h2 {
      font-size: 2.5rem;
  }
  .gallery-image {
      width: 120px;
      height: 120px;
    }
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
