import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";



//test suite

describe("Hero component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getAllByAltText("Hero Image");
    expect(heroImage[0]).toBeInTheDocument();
    expect(heroImage[0]).toHaveAttribute("src", "media/images/homeHero.png");
  });
});
