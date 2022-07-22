/// <reference types="cypress" />
/* eslint-disable no-undef */
import Stack from "./Stack";

describe("Stack", () => {
  const baseArgs = {
    direction: "row",
    spacing: 2,
    wrap: false,
  };

  const Template = ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
      {[...Array(numberOfChildren).keys()].map((n) => (
        <div
          data-cy={`child-${n}`}
          key={n}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {n + 1}
        </div>
      ))}
    </Stack>
  );

  const childStack = () => cy.get('[data-cy="stack"]').children();

  it("should render a stack of 3 rows", () => {
    const numberOfChildren = 3;
    const args = {
      ...baseArgs,
    };

    cy.mount(<Stack>{Template({ numberOfChildren, ...args })} </Stack>);
    childStack()
      .should("have.length", numberOfChildren + 1)
      .first()
      .should("have.css", "flex-direction", "row")
      .and("have.css", "gap", "8px")
      .and("have.css", "flexWrap", "nowrap");
  });

  it("should render a stack of 3 columns", () => {
    const numberOfChildren = 5;
    const args = {
      ...baseArgs,
      direction: "column", // overwrites
    };

    cy.mount(<Stack>{Template({ numberOfChildren, ...args })} </Stack>);
    childStack()
      .should("have.length", numberOfChildren + 1)
      .first()
      .should("have.css", "flex-direction", "column");
  });

  it("should render without spacing", () => {
    const numberOfChildren = 5;
    const args = {
      ...baseArgs,
      spacing: 0,
    };

    cy.mount(<Stack>{Template({ numberOfChildren, ...args })} </Stack>);
    childStack().first().should("have.css", "gap", "0px");
  });

  it("should render a wrapped", () => {
    const numberOfChildren = 30;
    const args = {
      ...baseArgs,
      wrap: true,
    };

    cy.mount(<Stack>{Template({ numberOfChildren, ...args })} </Stack>);
    childStack()
      .should("have.length", numberOfChildren + 1)
      .first()
      .and("have.css", "flexWrap", "wrap");
  });

  it("should not render children", () => {
    const numberOfChildren = 0;
    const args = {
      ...baseArgs,
      wrap: true,
    };

    cy.mount(<Stack>{Template({ numberOfChildren, ...args })} </Stack>);
    childStack().should("have.length", numberOfChildren + 1);
  });
});
