import React, { useState, useEffect } from "react";
import css from "./css/Content.module.css";
import PostItem from "./PostItem";
import Loader from "./Loader";
import data from "../posts.json";
const { savedPosts } = data;

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setfetechedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setfetechedPosts(savedPosts);
        }, 2000);
    }, []);

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = fetchedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        });
        setfetechedPosts(filteredPosts);
    };

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchinput">Search</label>
                    <input
                        type="search"
                        id="searchinput"
                        placeholder="By author"
                        onChange={(e) => handleChange(e)}
                    />
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>

            <div className={css.SearchResults}>
                {isLoaded ? <PostItem savedPosts={fetchedPosts} /> : <Loader />}
            </div>
        </div>
    );
}

export default ContentHooks;
