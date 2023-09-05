import { useState } from 'react';
import menu from './data';
import Title from './Title';
import Menu from './Menu';
import Categories from './Categories';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
   const filterItems = (category) => {
     if (category === 'all') {
       setMenuItems(items);
       return;
     }
     const newItems = items.filter((item) => item.category === category);
     setMenuItems(newItems);
   };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;

// progress:
// - s7-195:cr8 main & section with className menu
// - s7-195:import title
// - s7-195:pass in title in section
// - s7-196:setup text prop with our menu
// - s7-197:cr8 menuItems useState
// - s7-197:import useState from react
// - s7-197:import menu from data
// - s7-197:Pass in Menu with items prop
// - s7-197:cr8 tempCategories(tempCategories will be a new array containing the category values of each element in the menu array).
// - s7-197:cr8 tempSet(tempSet will contain the unique values of the categories in the tempCategories array).
// - s7-197:cr8 tempItems(tempItems will be a new array containing 'all' as the first element, followed by all the category values present in the tempSet).
// - s7-197:cr8 shorthand variable allCategories(allCategories will be a new array containing 'all' as the first element, followed by all unique categories retrieved from the items array.)
// - s7-198:cr8 state categories
// - s7-198: try log categories
// - s7-199:Import categories
// - s7-199:pass in Categories
// - s7-199:Add categories prop equal to value categories
// - s7-199:move up categories before menu
// - s7-200:Setup filterItems base
// - s7-200:Add category parameter on filterItems
// - s7-200:Checking log category for filterItems
// - s7-200:pass in filterItems on Categories parameter
// - s7-200:Setup for filter category value
// - s7-200:Add setMenuItems for passing newItems
// - s7-200:Add if statement for setMenuItems