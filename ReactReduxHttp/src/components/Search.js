import React from "react";

const Search = ({ repos, searchText, onSearchTextChanged, onSearchGithub }) => {
    let repoLinks = (
        <ul>
            {repos.map(repo => <li key={repo.id}><a href={repo.url} >{repo.name}</a></li>)}
        </ul>
    );

    return(
        <div>
            <p>Please enter a search term to find all pertinent repos</p>
            <hr />
            <input onChange={(event)=>onSearchTextChanged(event.target.value)}/>
            <button onClick={() => onSearchGithub(searchText)}>Search Github</button>
            <hr />
            <div>{repoLinks}</div>
        </div>
    )
}



export default Search;


