import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";


const testData = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Cake", category: "Dessert" },
  { id: 4, name: "Ice Cream", category: "Dessert" },
];

test("displays all items when initially rendered", () => {
  const { container } = render(<ShoppingList items={testData} />);
  expect(container.querySelector(".Items").children).toHaveLength(testData.length);
});

test("displays only items that match the selected category", () => {
  const { container } = render(<ShoppingList items={testData} />);
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "Dessert" } });
  expect(container.querySelector(".Items").children).toHaveLength(2);
});
