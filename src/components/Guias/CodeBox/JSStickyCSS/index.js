import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css'

const LibreriasMasUsadas = () => {
    const code = 
`.MenuSection {
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  /* border: 2px solid red; */
}

.MenuBtn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid yellow; */
  height: 100%;
  width: 40%;
}

.MenuBtn .BtnMenu {
  cursor: pointer;
  color: white;
  font-size: 1.6rem;
}

.MenActive p {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #ffffff;
  transition: 0.1s ease-in-out;
}

@media screen and (max-width: 1024px) {
  .MenuBtn {
      width: 70%;
  }
}

@media screen and (max-width: 425px) {
  .MenuBtn {
      width: 90%;
  }
  .MenuBtn .BtnMenu {
      font-size: 1.2rem;
  }
}

@media screen and (max-width: 425px) {
  .MenuBtn .BtnMenu {
      font-size: 1rem;
  }
}

@media screen and (max-width: 320px) {
  .MenuBtn .BtnMenu {
      font-size: 0.9rem;
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
