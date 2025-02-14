import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { PDFDocument, rgb } from "pdf-lib";

const AgreementSigner = () => {
  const sigCanvas = useRef({});
  const [signature, setSignature] = useState(null);

  // Capture signature as an image
  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setSignature(dataURL);
  };

  // Clear signature
  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignature(null);
  };

  // Function to Add Signature to the PDF
  const addSignatureToPDF = async () => {
    if (!signature) {
      alert("Please sign before generating the PDF.");
      return;
    }

    // Load the existing PDF template (replace with your template URL)
    const existingPdfBytes = await fetch('/agreement/template_agreement.pdf').then((res) => res.arrayBuffer());

    // Load PDF with pdf-lib
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[3]; // Modify the first page

    // Convert signature to Image format for the PDF
    const signatureImage = await pdfDoc.embedPng(signature);
    const { width, height } = firstPage.getSize();

    // Define where to place the signature (adjust X, Y as needed)
    firstPage.drawImage(signatureImage, {
      x: width / 2 + 130,  // Centered horizontally
      y: 275,  // Adjust position vertically
      width: 100,
      height: 50,
    });

    // Save modified PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfURL = URL.createObjectURL(blob);

    // Create download link
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "signed_agreement.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-5">
      <h2 className="text-xl font-bold">Sign Agreement</h2>

      {/* Signature Pad */}
      <SignatureCanvas ref={sigCanvas} penColor="black" canvasProps={{ width: 400, height: 150, className: "border border-gray-300" }} />
      <div className="flex space-x-2">
        <button onClick={saveSignature} className="">Save</button>
        <button onClick={clearSignature} className="">Clear</button>
      </div>

      {/* Add Signature to PDF */}
      <button onClick={addSignatureToPDF} className="">Download Signed PDF</button>
    </div>
  );
};

export default AgreementSigner;
