import React from "react";
import App from "../../Components/App";
import { shallow, render, mount } from "enzyme";

describe("App component", () => {
  let wrapper = shallow(<App />);
  it("should render a div with a class of 'app-div'", () => {
    expect(wrapper.find("div.app-div").length).toEqual(1);
  });

  it("should render a header with a class of 'main-header'", () => {
    expect(wrapper.find("header.main-header").length).toEqual(1);
  });

  it("should render four NavLinks with the correct classes", () => {
    expect(wrapper.find("NavLink.home-link").length).toEqual(1);
    expect(wrapper.find("NavLink.register-link").length).toEqual(1);
    expect(wrapper.find("NavLink.library-link").length).toEqual(1);
    expect(wrapper.find("NavLink.search-link").length).toEqual(1);
  });

  it("should redner a div with a class of 'current-view", () => {
    expect(wrapper.find("div.current-view").length).toEqual(1);
  });
});
