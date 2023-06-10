import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css'

const LibreriasMasUsadas = () => {
    const code = 
`///// --------------------- Import --------------------- /////
import image1 from '../../images/Grid/example1.png';

///// --------------------- Const --------------------- /////
const images = [
  image1, image2, image4, image5, image6, image7, image8, image9, image10
];
///// ------- Debajo de const Pagina = () => { ------- /////

///// --------------------- Codigo --------------------- /////
<div className="gallery">
{images.map((image, index) => {{
  return <img key={index} className="gallery-image" src={image} alt={\`Image \${index + 1}\`} />;
}})}
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
