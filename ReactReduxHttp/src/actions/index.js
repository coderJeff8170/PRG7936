//this will accept repos and return an action type telling the reducer that the repo search is complete
//note that the payload is listed as repos, which is shorthand for naming the property the parameter, and passing what is passed to the parameter to the value of the repos payload

//will execute when a user enters a word to search repos and clicks the search button
export const repoSearchCompleted = (repos) => ({
    type: 'REPO_SEARCH_COMPLETED',
    repos
});

//will execute when the text in the search field chages
export const searchTextChanged = (text) => ({
    type: 'SEARCH_TEXT_CHANGED',
    text
});
//remember - all actions are things the user does, or user causes to happen
//here, this function will return a promise, so to use it, whatever calls it must use a .then()...
export const searchGithub = (item) => {
    return fetch(`https://api.github.com/search/repositories?q=${item}`)
        .then(response => response.json())
        .then(response => response.items.map(repo => (
            {
                id: repo.id,
                name: repo.name,
                url: repo.html_url
            }
        )));
}