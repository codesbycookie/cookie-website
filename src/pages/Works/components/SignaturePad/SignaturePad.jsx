import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const AgreementSigner = () => {
  const sigCanvas = useRef({});
  const [signature, setSignature] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    address: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  // Function to Add Signature and Text to the PDF
  const addSignatureToPDF = async () => {
    if (!signature) {
      alert("Please sign before generating the PDF.");
      return;
    }

    // Load the existing PDF template
    const existingPdfBytes = await fetch('/agreement/template_agreement.pdf').then(res => res.arrayBuffer());

    // Load PDF with pdf-lib
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0]; // Modify the first page

    // Set font
    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const bold_font = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

    
    // Add text fields
    firstPage.drawText(`Dear ${formData.name}`, { x: 490, y: 230, size: 14, bold_font, color: rgb(1,1,1) });
    firstPage.drawText(`Date: ${formData.date}`, { x: 50, y: 475, size: 14, font, color: rgb(1,1,1) });
    firstPage.drawText(`Address: ${formData.address}`, { x: 50, y: 450, size: 14, font, color: rgb(1,1,1) });

    // Convert signature to Image format for the PDF
    const signatureImage = await pdfDoc.embedPng(signature);
    const { width, height } = firstPage.getSize();

    // Define where to place the signature
    firstPage.drawImage(signatureImage, {
      x: width / 2 + 130,  
      y: 275,  
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
    <div className="container mt-5">
      <h2 className="text-center">Sign Agreement</h2>

      {/* Form Inputs */}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea className="form-control" name="address" value={formData.address} onChange={handleChange}></textarea>
      </div>

      {/* Signature Pad */}
      <SignatureCanvas ref={sigCanvas} penColor="black" canvasProps={{ width: 400, height: 150, className: "border border-dark" }} />
      <div className="d-flex mt-2">
        <button onClick={saveSignature} className="btn btn-success me-2">Save</button>
        <button onClick={clearSignature} className="btn btn-danger">Clear</button>
      </div>

      {/* Add Signature to PDF */}
      <button onClick={addSignatureToPDF} className="btn btn-primary mt-3">Download Signed PDF</button>
    </div>
  );
};

export default AgreementSigner;
