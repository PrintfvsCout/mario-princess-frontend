import { render, screen } from "@testing-library/react"
import React from "react"
import App from "../App"

test("page routes renders in app.js component", () => {
  const { getByTestId } = render(<App />)
  const routes = getByTestId("nav-routes")

  expect(routes).toBeInTheDocument()
})
