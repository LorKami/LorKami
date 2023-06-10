import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../CodeBox.css';


const LibreriasMasUsadas = () => {
    const code = 
`///// --------------------- Codigo --------------------- /////
<section className='column column--right'>
<div className='card'>
<div className='skills'>
<div className="skills__header">
  <span className="skills__start-label stats">0</span>
  <span className="skills__end-label stats">25</span>
  <span className="skills__end-label stats">50</span>
  <span className="skills__end-label stats">75</span>
  <span className="skills__end-label stats">100</span>
</div>
<div className='skills__item'>
<p className='skills__tech'>DAÑO</p>
<div className='skills__bar skills__bar--55'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
</div>

<div className='skills__item'>
<p className='skills__tech'>ALCANCE</p>
<div className='skills__bar skills__bar--50'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
</div>

<div className='skills__item'>
<p className='skills__tech'>CADENCIA</p>
<div className='skills__bar skills__bar--50'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
</div>

<div className='skills__item'>
<p className='skills__tech'>RECARGA</p>
<div className='skills__bar skills__bar--70'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
</div>

<div className='skills__item'>
<p className='skills__tech'>PRECISIÓN</p>
<div className='skills__bar skills__bar--75'></div> {/* 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 */}
</div>

</div>
</div>
</section>

///// --------------------- CSS --------------------- /////

.column {
  display: grid;
  /* gap: 0.5em; */
  width: 100%;
  /* border: 2px solid rgb(123, 255, 0); */
}

@media screen and (min-width: 720px) {
  .column--left,
  .column--right {
    grid-template-rows: repeat(3, min-content) 1fr;
  }

  .column--right {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}

.skills {
  padding: 1em 0;
}

.skills__header {
  position: relative;
  width: 175px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  /* border: 2px solid rgb(255, 102, 0); */
}

.skills__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.3em;
  /* border: 2px solid rgb(251, 255, 0); */
}

.skills__tech {
  font-size: 0.9rem;
  margin: 0;
  /* border: 2px solid rgb(0, 255, 98); */
}

.skills__bar,
.skills__bar::after {
  position: relative;
  width: 178px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.815);
  background-image: url(../../images/segment.png);
  overflow: hidden;
  /* border: 2px solid rgb(0, 255, 221); */
}

.skills__bar::after {
  content: '';
  position: absolute;
  left: -178px;
  background-image: url(../../images/bar.png);
  transition: var(--transition);
  animation: skill-bar 2s forwards ease-in-out;
  /* border: 2px solid rgb(0, 162, 255); */
}

.skills__bar--5::after {
  --skill-bar-length: 5%;
}
.skills__bar--10::after {
  --skill-bar-length: 10%;
}
.skills__bar--15::after {
  --skill-bar-length: 15%;
}
.skills__bar--20::after {
  --skill-bar-length: 20%;
}
.skills__bar--25::after {
  --skill-bar-length: 25%;
}
.skills__bar--30::after {
  --skill-bar-length: 30%;
}
.skills__bar--35::after {
  --skill-bar-length: 35%;
}
.skills__bar--40::after {
  --skill-bar-length: 40%;
}
.skills__bar--45::after {
  --skill-bar-length: 45%;
}
.skills__bar--50::after {
  --skill-bar-length: 50%;
}
.skills__bar--55::after {
  --skill-bar-length: 55%;
}
.skills__bar--60::after {
  --skill-bar-length: 60%;
}
.skills__bar--65::after {
  --skill-bar-length: 65%;
}
.skills__bar--70::after {
  --skill-bar-length: 70%;
}
.skills__bar--75::after {
  --skill-bar-length: 75%;
}
.skills__bar--80::after {
  --skill-bar-length: 80%;
}
.skills__bar--85::after {
  --skill-bar-length: 85%;
}
.skills__bar--90::after {
  --skill-bar-length: 90%;
}
.skills__bar--95::after {
  --skill-bar-length: 95%;
}
.skills__bar--100::after {
  --skill-bar-length: 100%;
}


@keyframes skill-bar {
  to {
    transform: translateX(var(--skill-bar-length));
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
