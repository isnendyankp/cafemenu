import Title from './Title';

const App = () => {
  return (
    <main>
      <section className="menu">
        <Title text='our menu'/>
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