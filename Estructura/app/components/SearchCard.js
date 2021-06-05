export function SearchCard(props) {
    let { id, title, _embedded } = props;
    let slug = _embedded.self[0];

    return `
    <article class="post-card">
        
        <h2>${title}</h2>
        <p>
            <a href="#/${slug}" data-id="${id}">Ver publicación</a>
        </p>
    </article>
    `;
    /* <img src="${urlPoster}" alt="${title.rendered}"> */
}