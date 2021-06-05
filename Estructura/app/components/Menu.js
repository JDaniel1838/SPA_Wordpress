export function Menu() {
    const $menu = document.createElement("nav");
    $menu.innerHTML = `
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">Búsqueda</a>
    <span>-</span>
    <a href="#/contacto">Contacto</a>
    <span>-</span>
    <a href="#Pagina" target="_blank" rel="noopener">JDaniel</a>
    `;
    return $menu;
}