/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const spent_category = {};
  for (const transaction of transactions) {
    const tx_category = transaction.category;
    spent_category[tx_category] =
      (spent_category[tx_category] || 0) + transaction.price;
  }

  const categorical_expense = [];
  const entries = Object.entries(spent_category);
  for (const entry of entries) {
    categorical_expense.push({ category: entry[0], totalSpent: entry[1] });
  }
  return categorical_expense;
}

module.exports = calculateTotalSpentByCategory;
