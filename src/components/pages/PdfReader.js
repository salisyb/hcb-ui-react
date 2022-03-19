import React from "react";

function PdfReader() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe src="/sample.pdf#toolbar=0" width="100%" height="100%"></iframe>
      </div>
    </>
  );
}

export default PdfReader;
