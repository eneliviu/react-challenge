import css from "./App.module.css";

// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import NavBarSimple from "./components/NavBarSimple";
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
// import ConditionalrenderingClass from "./components/ConditionalrenderingClass";
// import ConsitionalRenderingFunctional from "./components/ConsitionalRenderingFunctional";
// import RenderingLists from "./components/RenderingLists";
// import LifeCyclesCWU from "./components/LifeCyclesCWU";
// import ControlledForm from "./components/ControlledForm";
// import UncontrolledForm from "./components/UncontrolledForm";
// import SearchBar from "./components/SearchBar";

import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseStateWithObjects from "./components/UseStateWithObjects";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectCounterContainer from "./components/UseEffectCounterContainer";

function App() {
    return (
        <div className={css.App}>
            {/* <NavBarForm />
            <Sidebar />
            <Content />
            <ControlledFormHooks />
            <UseStateWithArrays /> */}
            {/* <UseEffectCounter /> */}
            <UseEffectCounterContainer />
        </div>
    );
}

export default App;
