import {
  cleanup,
  fireEvent,
  getByTestId,
  render,
} from "@testing-library/react";
import Connections from "../components/Connections";

test("Test of connections component renders correctly when props length > 0", () => {
  const fakeData = [
    {
      name: "hepsiburada",
      url: "https://www.hepsiburada.com/",
      id: Math.floor(Math.random() * 999999) + 1,
      point: 1,
      date: Date.now(),
    },
  ];

  localStorage.setItem("connections", JSON.stringify(fakeData));

  const { getByTitle } = render(<Connections />);

  expect(getByTitle("up-vote")).toBeDefined();
});

test("Test of connections component renders correctly when props length 0", () => {
  const fakeData = [];

  localStorage.setItem("connections", JSON.stringify(fakeData));

  const { getByTitle } = render(<Connections />);

  expect(getByTitle("empty")).toBeDefined();
});

test("Test Up Vote Process", () => {
  const fakeData = [
    {
      name: "hepsiburada",
      url: "https://www.hepsiburada.com/",
      id: Math.floor(Math.random() * 999999) + 1,
      point: 1,
      date: Date.now(),
    },
  ];

  localStorage.setItem("connections", JSON.stringify(fakeData));

  const { getByTitle } = render(<Connections />);

  fireEvent.click(getByTitle("up-vote"));

  expect(JSON.parse(localStorage.getItem("connections"))[0].point).toEqual(2);
});

test("Test Down Vote Process", () => {
  const fakeData = [
    {
      name: "hepsiburada",
      url: "https://www.hepsiburada.com/",
      id: Math.floor(Math.random() * 999999) + 1,
      point: 1,
      date: Date.now(),
    },
  ];

  localStorage.setItem("connections", JSON.stringify(fakeData));

  const { getByTitle } = render(<Connections />);

  fireEvent.click(getByTitle("down-vote"));

  expect(JSON.parse(localStorage.getItem("connections"))[0].point).toEqual(0);
});

test("Test remove button renders correctly", () => {
  const fakeData = [
    {
      name: "hepsiburada",
      url: "https://www.hepsiburada.com/",
      id: Math.floor(Math.random() * 999999) + 1,
      point: 1,
      date: Date.now(),
    },
  ];

  localStorage.setItem("connections", JSON.stringify(fakeData));

  const { getByTestId } = render(<Connections />);

  fireEvent.click(getByTestId("delete"));

  expect(getByTestId("delete")).toBeTruthy();
});

test("Test descend elements sort", () => {
  const fakeData = [
    {
      name: "Google",
      url: "https://www.google.com/",
      point: 1,
    },
    {
      name: "HepsiBurada",
      url: "https://www.hepsiburada.com/",
      point: 2,
    },
  ];

  localStorage.setItem("connections", JSON.stringify(fakeData));

  const { getByTitle } = render(<Connections sorter="descend" />);

  fireEvent.click(getByTitle("select"));

  expect(fakeData).toEqual([
    {
      name: "Google",
      url: "https://www.google.com/",
      point: 1,
    },
    {
      name: "HepsiBurada",
      url: "https://www.hepsiburada.com/",
      point: 2,
    },
  ]);
});

test("Test ascend elements sort", () => {
  const fakeData = [
    {
      name: "HepsiBurada",
      url: "https://www.hepsiburada.com/",
      point: 2,
    },
    {
      name: "Google",
      url: "https://www.google.com/",
      point: 1,
    },
  ];

  localStorage.setItem("connections", JSON.stringify(fakeData));

  const { getByTitle } = render(<Connections sorter="descend" />);

  fireEvent.click(getByTitle("select"));

  expect(fakeData).toEqual([
    {
      name: "HepsiBurada",
      url: "https://www.hepsiburada.com/",
      point: 2,
    },
    {
      name: "Google",
      url: "https://www.google.com/",
      point: 1,
    },
  ]);
});
