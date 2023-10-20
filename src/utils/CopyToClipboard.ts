const CopyToClipboard = async (str: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(str);
    console.log("Text successfully copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

export default CopyToClipboard;
