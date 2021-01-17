import React, { useState } from 'react';
import { css } from '@emotion/react';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background-color: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.2rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};
export default Wave;
