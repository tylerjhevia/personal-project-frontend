import React from "react";
import Login from "../../Components/Login";
import { shallow, render, mount } from "enzyme";

describe("Login component", () => {
  const mockUser = {
    id: 1000,
    username: "user",
    email: "user@internet.com",
    password: "books",
    created_at: "date"
  };

  const mockFn = jest.fn();

  const wrapper = shallow(
    <Login currentUser={mockUser} fetchUserFromDB={mockFn} />
  );

  it("should render a div with a class of 'login-div'", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render two inputs with the correct classes", () => {
    expect(wrapper.find("input.username-input").length).toEqual(1);
    expect(wrapper.find("input.password-input").length).toEqual(1);
  });

  it("should render a button with a class of 'login-button'", () => {
    expect(wrapper.find("button.login-button").length).toEqual(1);
  });

  it("should render a NavLink with a class of 'register-link'", () => {
    expect(wrapper.find("NavLink.register-link").length).toEqual(1);
  });
});
