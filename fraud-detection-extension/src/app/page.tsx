"use client";
import FileUpload from "./components/FileUpload";

export default function Home() {
  const handleFileUpload = (file: File) => {
    console.log("Uploaded file:", file);
    // Next: Extract text from PDF
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <FileUpload onFileUpload={handleFileUpload} />
    </main>
  );
}
