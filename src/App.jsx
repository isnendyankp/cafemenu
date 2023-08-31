import { useState } from 'react';
import menu from './data';
import Title from './Title';
import Menu from './Menu';

const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
console.log(tempSet);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
      <section className="menu">
        <Title text='our menu'/>
        <Menu items={menuItems}/>
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