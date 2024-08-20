/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import { DashboardHero } from "./DashboardHero";
import { AppContext } from "../AppContext";

test("displays the PR and Rank", async () => {
	// ARRANGE and ACT
	render(
		<AppContext.Provider
			value={{
				userName: "Olena",
			}}
		>
			<DashboardHero achievedPulls={45} achievedRank={52} />
		</AppContext.Provider>
	);
	// ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Hi, Olena");
  expect(screen.getByRole("heading")).toHaveTextContent("Hi, Olena");
  
});
