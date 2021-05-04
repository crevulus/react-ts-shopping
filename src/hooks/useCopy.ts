import React, { useState, useCallback, useEffect } from "react";
import copy from "copy-to-clipboard";

type CopyProps = {
  resetInterval: null | number;
};

export default function useCopy({ resetInterval = null }: CopyProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback((text: string | number) => {
    copy(text.toString());
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

  return [isCopied, handleCopy] as const;
}
