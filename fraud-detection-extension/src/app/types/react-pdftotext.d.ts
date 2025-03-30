declare module "react-pdftotext" {
  const pdfToText: (file: File | Blob) => Promise<string>;
  export default pdfToText;
}
