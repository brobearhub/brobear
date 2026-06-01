"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { YANDEX_METRIKA_ID } from "../constants";

type YandexMetrikaFunction = (id: number, method: string, ...args: unknown[]) => void;

declare global {
  interface Window {
    ym?: YandexMetrikaFunction;
  }
}

export function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  const search = searchParams?.toString();

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const url = `${pathname}${search ? `?${search}` : ""}`;
    window.ym?.(YANDEX_METRIKA_ID, "hit", url);
  }, [pathname, search]);

  return null;
}
