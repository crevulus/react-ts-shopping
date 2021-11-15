import { useState, useCallback, useEffect } from "react";

type CopyProps = {
  resetInterval: null | number;
};

export default function useCopy({ resetInterval = null }: CopyProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [copiedTextLength, setCopiedTextLength] = useState(0);

  const handleCopy = useCallback((text: string | number) => {
    const stringifiedText = text.toString();
    const cb = navigator.clipboard;
    cb.writeText(stringifiedText);
    setCopiedText(stringifiedText);
    setIsCopied(true);
  }, []);

  useEffect(() => {
    let timeout: any;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setIsCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  useEffect(() => {
    setCopiedTextLength(copiedText.length);
  }, [copiedText]);

  return [isCopied, copiedText, copiedTextLength, handleCopy] as const;
}
