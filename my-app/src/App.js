import css from './App.module.css';
import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import NavBarSimple from './components/NavBarSimple';


function App() {
  return (
      <div className={css.App}>
          {/* Add your components here */}
          <Sidebar />
          {/* <StatefulGreetingWithCallback /> */}
          <NavBarSimple />
      </div>
  );
}

export default App;