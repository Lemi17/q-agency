import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// HOC
import withLogging, { WithLoggingProps } from "./withLogging";

// Dummy Component
const DummyComponent: React.FC<WithLoggingProps> = ({ componentName }) => (
  <div>{componentName}</div>
);

// Wrapped Component with Logging
const WrappedComponentWithLogging = withLogging(
  DummyComponent,
  "TestComponent"
);

describe("withLogging HOC", () => {
  it("logs the correct message when rendering", () => {
    const consoleLogSpy = vitest.spyOn(console, "log");

    render(<WrappedComponentWithLogging componentName="CustomComponent" />);

    expect(consoleLogSpy).toHaveBeenCalledWith("Hello from CustomComponent");
  });

  it("logs the default message when componentName is not provided", () => {
    const consoleLogSpy = vitest.spyOn(console, "log");

    render(<WrappedComponentWithLogging />);

    expect(consoleLogSpy).toHaveBeenCalledWith("Hello from TestComponent");
  });

  it("passes down props to the wrapped component", () => {
    render(
      <WrappedComponentWithLogging
        componentName="CustomComponentName2"
        data-testid="customTestId"
      />
    );

    const wrappedComponent = screen.getByText(/CustomComponentName2/i);
    expect(wrappedComponent).toBeTruthy();
  });
});
