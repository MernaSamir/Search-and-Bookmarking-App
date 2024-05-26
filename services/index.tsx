import axios from "axios";

export function searchRepos(search:string ,page:string) {
    return  axios.get(`https://api.github.com/search/repositories?q=${search}&page=${page}&per_page=10`);
      
}