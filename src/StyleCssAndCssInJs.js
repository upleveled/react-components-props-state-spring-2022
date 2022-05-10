import './styleCssAndCssInJs.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const myDivStyles = (isYellow) => css`
  border-radius: 5px;
  background-color: ${isYellow ? 'yellow' : 'red'};
  color: ${isYellow ? '#000000' : '#ffffff'};
  width: 50vw;
  margin: 10px auto;
`;

export default function StyleCssAndCssInJs() {
  const [isYellow, setIsYellow] = useState(false);

  // 2. Components return JSX
  return (
    <div>
      <div
        style={{
          borderRadius: '5px',
          backgroundColor: 'aquamarine',
          width: '50vw',
          margin: '0 auto',
        }}
      >
        StyleProp
      </div>
      <div className="myCssDiv">Old friend CSS</div>
      <div css={myDivStyles(isYellow)}>Using Emotion CSS in JS</div>

      <button
        onClick={() => {
          setIsYellow(!isYellow);
        }}
      >
        Toggle Yellow
      </button>
    </div>
  );
}
