export function PostCard(props) {
    let { date, id ,slug, title, _embedded } = props;

    let resetDate = new Date(date).toLocaleString(),
        urlPoster = _embedded["wp:featuredmedia"]
            ? _embedded["wp:featuredmedia"][0].source_url
            : "app/assets/icon.svg";
        
    document.addEventListener("click", e => {
        if (!e.target.matches(".post-card a")) return false;

        console.log("jplis");

        localStorage.setItem("wpPostld", e.target.dataset.id);
    });

    return `
        <article class="post-card">
        <img src="${urlPoster}" alt="${title.rendered}">
        <h2>${title.rendered}</h2>
        <p>
        <time dametime="${date}">${resetDate}</time>
        <a href="#/${slug}" data-id="${id}">Ver publicación</a>
        </p>
        </article>
    `;
}