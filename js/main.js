window.onload = () => {
    const searchBar = document.getElementById("searchbar-input");
    const checkboxIjs = document.getElementById("ijs");
    const checkboxSushi = document.getElementById("sushi");
    const checkboxPokebowl = document.getElementById("pokebowl");
    const checkboxFav = document.getElementById("favoriet");

    checkboxIjs.checked = true;
    checkboxPokebowl.checked = true;
    checkboxSushi.checked = true;
    checkboxFav.checked = true;

    const favbuttons = document.getElementsByClassName("fav-button");
    const cards = document.getElementsByClassName("card");

    for (const favbutton of favbuttons) {
        favbutton.addEventListener("click", favClick);
    }

    function favClick() {
        if (this.closest("article").getAttribute('data-faved') == 'false') {
            this.style.backgroundColor = 'yellow';
            this.closest("article").setAttribute('data-faved', 'true');
        } else {
            this.style.backgroundColor = 'white'
            this.closest("article").setAttribute('data-faved', 'false');
        }
        
    }

    const selectors = document.getElementsByClassName("mijn-checkbox");
    for (const x of selectors) {
        x.addEventListener('change', () => {
            searchBar.value = "";
            if (!checkboxPokebowl.checked
                && !checkboxIjs.checked
                && !checkboxSushi.checked
                && !checkboxFav.checked){
                    checkboxIjs.checked = true;
                    checkboxPokebowl.checked = true;
                    checkboxSushi.checked = true;
                }
            for (const card of cards) {
                card.style.display = "none";
                if (checkboxIjs.checked && card.getAttribute("data-category") == "ijs") {
                    card.style.display = "flex";
                }
                if (checkboxSushi.checked && card.getAttribute("data-category") == "sushi") {
                    card.style.display = "flex";
                }
                if (checkboxPokebowl.checked && card.getAttribute("data-category") == "pokebowls") {
                    card.style.display = "flex";
                }

                if (checkboxFav.checked && card.getAttribute("faved") == 'true') {
                    card.style.display = "flex";
                }

            }
        });
    }

    searchBar.onkeyup = (event) => {
        checkboxFav.checked = false;
        checkboxIjs.checked = true;
        checkboxSushi.checked = true;
        checkboxPokebowl.checked = true;
        const filter = event.target.value.toUpperCase();
        for (const card of cards) {
            const innerHTML = card.getElementsByClassName("food-info")[0].innerHTML.toUpperCase();
            if (innerHTML.indexOf(filter) !== -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    }
    
}