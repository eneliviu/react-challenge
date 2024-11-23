import React from "react";
import css from "./css/NavBarSimple.module.css"


class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest! ",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previsous State:", prevState);
            return {
                message:
                    this.state.message === "Hello, guest! "
                        ? "Welcome back, user! "
                        : "Hello, guest! ",
            };

        })
    }
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>
                    {this.state.message}
                    <button
                        onClick={() => {
                            this.handleClick();
                        }}
                    >
                        log in
                    </button>
                </span>
            </div>
        );
    }
}

export default NavBarSimple;