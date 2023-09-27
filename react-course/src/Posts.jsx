import { VscGist } from "react-icons/vsc";

export const Post = ()=>{
    return <button onClick={()=>{
        async function getPosts(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
        }
        getPosts();
    }}
    ><VscGist/> Traer Datos</button>
}