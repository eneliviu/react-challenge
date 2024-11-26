import React from "react";
import css from "./css/Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={css.sidebar}>
            <a href="#." target="_blank">
                App 1{/* My Photos */}
            </a>
            <a href="#." target="_blank">
                App 2{/* My Illustrations */}
            </a>
            <a href="#." target="_blank">
                App 3 {/*  My Paintings */}
            </a>
        </div>
    );
};

export default Sidebar;
