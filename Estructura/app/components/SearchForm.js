export function SearchForm() {
    const $form = document.createElement("form"),
        $input = document.createElement("input");
    
    $form.classList.add("form-search");
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Buscar...";

    $form.appendChild($input);

    if (location.hash.includes("#/search")) {
        $input.value = localStorage.getItem("wpSearch");
    }

    document.addEventListener("search", e => {
        if (!e.target.matches("input[type='search']")) return false;

        if (!e.target.value) {
            localStorage.removeItem("wpSearch");
        }
        $input.value = localStorage.getItem("wpSearch");
    });

    document.addEventListener("submit", (e) => {
        if (!e.target.matches(".form-search")) return false;

        e.preventDefault();

        localStorage.setItem("wpSearch", e.target.search.value);
        location.hash=`#/search=${e.target.search.value}`;
    });

    return $form;
}