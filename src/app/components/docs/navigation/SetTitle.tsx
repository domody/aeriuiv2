"use client";

import { useEffect } from "react";

export function SetTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}
