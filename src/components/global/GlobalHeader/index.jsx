import React from 'react';
import { css } from '@emotion/core';
//import { Link } from 'react-router-dom';
import GLink from '../../atoms/GLink';

const GlobalHeader = () => {
  const NAV_TITLE = ['HOME', 'TAMA', 'CONTACT'];
  return (
    <header>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 20px;
        `}
      >
        <div
          css={css`
            width: 200px;
          `}
        >
          <img
            css={css`
              width: 100%;
              height: 100%;
              object-fit: fill;
            `}
            src="https://lh3.googleusercontent.com/proxy/RC7RJoB5GkFMcDA8eW3c-QnrRWzxG2b8YbaobQ2sPSGfKdYMHCN2FYCBBIKuE-SSkrQihlnFJG1fMOn5t_nnsaCYGJb-0BeEy_h-JQ"
            alt="logoImage"
          />
        </div>
        <nav
          css={css`
            display: flex;
          `}
        >
          {NAV_TITLE.map(title => (
            <GLink
              key={title}
              linkTitle={title}
              css={css`
                margin-right: 15px;
              `}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};
export default GlobalHeader;
