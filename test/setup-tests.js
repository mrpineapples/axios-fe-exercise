import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { resizeWindow } from "./utils";

beforeAll(() => resizeWindow(1024, 768));
