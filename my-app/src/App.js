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
// import ControlledFormHooks from "./components/ControlledFormHooks";
// import UseStateWithArrays from "./components/UseStateWithArrays";
// import UseStateWithObjects from "./components/UseStateWithObjects";
// import UseEffectCounter from "./components/UseEffectCounter";
// import UseEffectCounterContainer from "./components/UseEffectCounterContainer";
// import Content from "./components/Content";
// import ContentHooks from "./components/ContentHooks";
// import HTTPRequests from "./components/HTTPRequests";
// import HTTPPost from "./components/HTTPPost";

import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";

import HTTPHooks from "./components/HTTPHooks";

function App() {
    return (
        <div className={css.App}>
            {/* <UseEffectCounterContainer />
            <ControlledFormHooks />
            <Content />
            <UseStateWithArrays /> */}
            {/* <UseEffectCounter /> */}
            <NavBarForm />
            <Sidebar />
            {/* <ContentHooks /> */}
            <HTTPHooks />
        </div>
    );
}

export default App;
