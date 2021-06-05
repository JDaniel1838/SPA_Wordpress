import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

export async  function Router() {

    let { hash } = location;
    console.log(hash);


    document.getElementById("main").innerHTML = null;

    if (!hash || hash === "#/") {
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let HTML = "";
                posts.forEach(post => {
                    HTML += PostCard(post);
                });
            
                document.getElementById("main").innerHTML = HTML;
                //console.log(posts);
            }
        });
    } else if (hash.includes("#/search")) {
        let query = localStorage.getItem("wpSearch");

        if (!query) {
            document.querySelector(".loader").style.display = "none";
            return false;

        } 

        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                console.log(search);
                let html = "";
                //document.getElementById("main").innerHTML = html;

                if (search.legth === 0) {
                    html = `
                    <p class="error">
                    No existen resultados para <mark>${query}</mark>
                    </p>`;
                    
                } else {
                    search.forEach(post => {
                        
                        html += SearchCard(post);
                    });
                }
                document.getElementById("main").innerHTML = html;
            }
        });

    } else if (hash.includes("#/contacto")) {
        document.getElementById("main").innerHTML = `<h2>Sección de Contacto</h2>`;
    } else {
        
        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostld")}`,
            cbSuccess: (post) => {
                document.getElementById("main").innerHTML = Post(post);
            }
        });
    }

    document.querySelector(".loader").style.display = "none";



    /*  */
}