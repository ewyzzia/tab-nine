import { Config } from "../../types";
import { HTMLElement } from "./HTMLElement";
import HTMLSettings from "./HTMLSettings";

const config: Config = {
  key: "widget/html",
  name: "Custom HTML",
  description: "Put anything you want.",
  dashboardComponent: HTMLElement,
  settingsComponent: HTMLSettings,
};

export default config;
