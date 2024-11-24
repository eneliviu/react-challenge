import css from "./App.module.css";

// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import NavBarSimple from "./components/NavBarSimple";
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
// import ConditionalrenderingClass from "./components/ConditionalrenderingClass";
// import ConsitionalRenderingFunctional from "./components/ConsitionalRenderingFunctional";

import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className={css.App}>
            {/* Add your components here */}
            {/* <StatefulGreetingWithCallback /> */}
            {/* <NavBarSimple /> */}
            {/* <EventsClass />
          <EventsFunctional /> */}
            {/* <ConditionalrenderingClass />
            <ConsitionalRenderingFunctional connected={true} /> */}
            <NavBarForm />
            <Sidebar />
        </div>
    );
}

export default App;
