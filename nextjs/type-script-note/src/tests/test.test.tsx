import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

import HomeLinkPage from "@/app/test";
test("renders the component correctly", () => {
    render(<HomeLinkPage />);

    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});