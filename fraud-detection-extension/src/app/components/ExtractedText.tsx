"use client";

interface ExtractedTextProps {
  text: string | null;
}

export default function ExtractedText({ text }: ExtractedTextProps) {
  return (
    <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Extracted Text:</h2>
      {text ? (
        <pre className="text-sm text-gray-700 whitespace-pre-wrap">{text}</pre>
      ) : (
        <p className="text-gray-500">No text extracted yet.</p>
      )}
    </div>
  );
}
