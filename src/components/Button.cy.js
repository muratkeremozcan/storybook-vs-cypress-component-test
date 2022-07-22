/// <reference types="cypress" />
/* eslint-disable no-undef */
import Button from "./Button";

describe("Button", () => {
  let baseProps;
  beforeEach(() => {
    baseProps = {
      backgroundColor: "red",
      label: "Press Me",
      handleClick: cy.spy().as("handleClick"),
    };
  });

  it("should handle click", () => {
    const props = {
      ...baseProps,
      size: "md",
    };

    cy.mount(<Button {...props} />);
    cy.get("button").click();
    cy.get("@handleClick").should("be.called");
  });

  it("should render md green", () => {
    const props = {
      ...baseProps,
      backgroundColor: "green",
      size: "md",
    };

    cy.mount(<Button {...props} />);
    cy.get("button")
      .should("have.css", "padding", "8px 16px")
      .and("have.css", "background-color", "rgb(0, 128, 0)");
  });

  it("should renders sm red", () => {
    const props = {
      ...baseProps,
      backgroundColor: "red",
      size: "sm",
    };

    cy.mount(<Button {...props} />);
    cy.get("button")
      .should("have.css", "padding", "6px 12px")
      .and("have.css", "background-color", "rgb(255, 0, 0)");
  });

  it("should renders lg", () => {
    const props = {
      ...baseProps,
      size: "lg",
    };

    cy.mount(<Button {...props} />);
    cy.get("button").should("have.css", "padding", "12px 24px");
  });

  it("should renders label", () => {
    const label = "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd";
    const props = {
      ...baseProps,
      label,
    };

    cy.mount(<Button {...props} />);
    cy.contains(label);
  });
});
