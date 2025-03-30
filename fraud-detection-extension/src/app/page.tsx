"use client";
import { useState } from "react";
import FileUpload from "./components/FileUpload";
import ExtractedText from "./components/ExtractedText";
import pdfToText from "react-pdftotext";

export default function Home() {
  const [extractedText, setExtractedText] = useState<string | null>(null);

  const handleFileUpload = (file: File) => {
    console.log("Uploaded file:", file);

    // Extract text from PDF
    pdfToText(file)
      .then((text) => {
        console.log("Extracted text:", text);
        setExtractedText(text); // Store extracted text
      })
      .catch((error) =>
        console.error("Failed to extract text from PDF", error)
      );
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6 gap-6">
      <FileUpload onFileUpload={handleFileUpload} />
      <ExtractedText text={extractedText} />
    </main>
  );
}
