import { RuleSetRule } from "webpack";
import { loader } from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPAth: string) => !!resPAth.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, cssLoader];
}
