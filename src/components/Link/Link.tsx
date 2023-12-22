import NextLink from "next/link";
import React from "react";

export const Link: React.FC<React.AnchorHTMLAttributes<unknown>> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href!}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};
