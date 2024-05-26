import RepositoriesList from "./components/repositoriesList";
import BookmarksList from "./components/bookmarksList";
import './style.css'



export default function Repositories(props: any) {
  if(props.error)
    return <div className="errorContainer"><h1>{props.error}</h1></div>

  return (
    <div style={{padding:"1%" }}><BookmarksList /><RepositoriesList {...props} /></div>
   
  );
}
