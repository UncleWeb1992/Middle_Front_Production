import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins({
  html: template,
}: BuildPaths): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new ProgressPlugin(),
  ];
}
