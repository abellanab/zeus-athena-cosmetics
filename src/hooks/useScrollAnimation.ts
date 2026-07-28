import { useInView, type UseInViewOptions } from "framer-motion";
import { useRef, type RefObject } from "react";

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options?: UseInViewOptions
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
    ...options,
  });
  return [ref, isInView];
}
