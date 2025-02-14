import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const sigCanvas = useRef({});
  const [signature, setSignature] = useState(null);

  // Save the signature as an image
  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setSignature(dataURL);
    console.log(dataURL); // You can send this to backend
  };

  // Clear the signature
  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignature(null);
  };

  return (
    <div className="m-3" style={{border: '2px solid black'}}>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 400, height: 200, className: "border border-gray-300" }}
      />
      <div className="p-3">
        <button onClick={saveSignature} className="me-2">Save</button>
        <button onClick={clearSignature} className="">Clear</button>
      </div>
      {signature && (
        <div>
          <p>Saved Signature:</p>
          <img src={signature} alt="Signature" className="border border-gray-300" />
        </div>
      )}
    </div>
  );
};

export default SignaturePad;
