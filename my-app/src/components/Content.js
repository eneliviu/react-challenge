import React from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts";
import PostItem from "./PostItem";

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={css.SearchResults}>
                    <PostItem savedPosts={savedPosts} />
                </div>
            </div>
        );
    }
}

export default Content;
