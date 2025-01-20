/**
 * @jest-environment jsdom
 */

const { beforeAll, test, expect } = require("@jest/globals");
const { describe } = require("yargs");

beforeAll (() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileCOntents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("socre" in game).toBe(true);
    })
})