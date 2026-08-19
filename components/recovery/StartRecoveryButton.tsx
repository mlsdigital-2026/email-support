"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import RecoveryModal from "./RecoveryModal";

interface StartRecoveryButtonProps {
  className?: string;
}

export default function StartRecoveryButton({
  className = "",
}: StartRecoveryButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        Start Recovery
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>

      <RecoveryModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}