import React from "react";
import { css } from "@emotion/react";
import { SyncLoader } from "react-spinners";
import "./Loading.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Loading() {
  return (
    <>
      <div className="loading_screen_container">
        <SyncLoader
          color={"blueviolet"}
          loading={true}
          css={override}
          size={35}
        />
        <p className="loading_text">Please Wait....</p>
      </div>
    </>
  );
}

export default Loading;
