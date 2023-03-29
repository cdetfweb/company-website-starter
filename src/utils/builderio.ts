import { builder } from "@builder.io/react";
import builderConfig from "@/config/builder";

builder.init(builderConfig.apiKey);

const getPages = (pages: string[] | undefined) => {
  return (
    builder
      .get("page", {
        cachebust: true,
        userAttributes: {
          urlPath: "/" + (pages?.join("/") || ""),
        },
      })
      .toPromise() || null
  );
};

const getAllPages = () => {
  return builder.getAll("page", {
    cachebust: true,
    options: { noTargeting: true },
    omit: "data.blocks",
  });
};

export { getPages, getAllPages };
