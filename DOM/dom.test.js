import { expect, it, vi } from "vitest";
import { renderTitle } from "./dom";
import path from "path";
import fs from "fs";
import { JSDOM } from "jsdom";

// load the HTML file (using path and fs)
const htmlFilePath = path.join(__dirname, "index.html");
const htmlContent = fs.readFileSync(htmlFilePath).toString();

// creating JSDOM
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// stubbing the global document with the custom document
vi.stubGlobal("document", document);

it("should render the title", () => {
  renderTitle();

  const titleEl = document.getElementById("title");
  const titlePera = titleEl.firstElementChild;

  expect(titlePera).not.toBeNull();
});
