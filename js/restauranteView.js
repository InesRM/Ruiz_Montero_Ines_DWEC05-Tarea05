//clase restauranteView

const EXECUTE_HANDLER= Symbol("executeHandler");
class RestaurantView {
  constructor() {
    this.main = document.getElementsByTagName("main")[0];
    this.categories = document.getElementById("categorias_principal");
    this.menu = document.querySelector(".barra__navegacion");
    this.platos = document.querySelector(".platos");
    this.categorias = document.querySelector(".categories");
  }

  [EXECUTE_HANDLER](
    handler, 
    event,
    data,
    url,
    handlerArguments,
    scrollElement) {
      handler(...handlerArguments);
      const scroll=document.querySelector(scrollElement);
      if (scroll) scroll.scrollIntoView();
      history.pushState(data, "", url);
      event.preventDefault();

    }

  //Categorias
  showCategories(categories) {
    if (this.platos.children.length > 1) this.platos.children[1].remove();
    const container = document.createElement("div");
    container.id = "category-list";
    container.classList.add("category");
    for (const category of categories) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="category__container">
                        <a data-category="${category.name.name}" href="#product-list">
                            <div class="cat-list-image category__photo"><img alt="${category.name.name}"
                                src="../Imagenes/${category.name.name}.jpg" />
                            </div>
                            <div class="cat-list-text category_info">
                                <h3>${category.name.name}</h3>
                                <p>${category.name.description}</p>
                            </div>
                        </a>
                    </div>`
      );
    }
    this.categorias.append(container);
  }

  showCategoriesInMenu(categories) {
    const div = document.createElement("div");
    div.classList.add("nav-item");
    div.classList.add("dropdown");
    div.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle"
                href="#" id="navCats" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Categorías</a>`
    );
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    for (const category of categories) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div><a data-category="${category.name.name}" 
                class="dropdown-item" href="#productlist">${category.name.name}</a>
                <hr class="dropdown-divider">
                </div>`
      );
    }
    div.append(container);
    this.menu.append(div);
  }

  //los alérgenos solo hay que mostrarlos en el menú
  showAllergensInMenu(allergens) {
    const div = document.createElement("div");
    div.classList.add("nav-item");
    div.classList.add("dropdown");
    div.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle"
                href="#" id="navAlls" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Alergenos</a>`
    );
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    for (const allergen of allergens) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div><a data-allergen="${allergen.name.name}" 
                class="dropdown-item" href="#productlist">${allergen.name.name}</a>
                <hr class="dropdown-divider">
                </div>`
      );
    }
    div.append(container);
    this.menu.append(div);
  }

  //Los restaurantes
  showRestaurantsInMenu(restaurants) {
    const div = document.createElement("div");
    div.classList.add("nav-item");
    div.classList.add("dropdown");
    div.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle"
                href="#" id="navRes" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Restaurantes</a>`
    );
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    for (const res of restaurants) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div><a data-restaurant="${res.name}" 
                class="dropdown-item" href="#productlist">${res.name}</a>
                <hr class="dropdown-divider">
                </div>`
      );
    }
    div.append(container);
    this.menu.append(div);
  }

  //Los menús solo hay que mostrarlos en el menú de navegación

  showMenusInMenu(menus) {
    const div = document.createElement("div");
    div.classList.add("nav-item");
    div.classList.add("dropdown");
    div.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle"
                href="#" id="navMen" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Menus</a>`
    );
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    for (const menu of menus) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div><a data-menu="${menu.name.name}" 
                class="dropdown-item" href="#productlist">${menu.name.name}</a>
                <hr class="dropdown-divider">
                </div>`
      );
    }
    div.append(container);
    this.menu.append(div);
  }

  //los platos
  showDishes(dishes) {
    if (this.platos.children.length > 1) this.platos.children[1].remove();
    const container = document.createElement("div");
    container.classList.add("category");
    for (const dish of dishes) {
      let aleatorio = Math.floor(Math.random() * 4);
      console.log(dish);
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="category__container">
                        <a data-category="${dish.dishes[0].name[aleatorio].name}" href="#product-list">
                            <div class="cat-list-image category__photo"><img alt="${dish.dishes[0].name[aleatorio].name}"
                                src="../Imagenes/${dish.dishes[0].name[aleatorio].name}.jpg" />
                            </div>
                            <div class="cat-list-text category_info">
                                <h3>${dish.dishes[0].name[aleatorio].name}</h3>
                                <p>${dish.dishes[0].name[aleatorio].description}</p>
                            </div>
                        </a>
                    </div>`
      );
    }

    this.platos.append(container);
  }
  //detalles de los platos
  showDetailsDishes(dish, message) {
    this.platos.replaceChildren();
    if (this.categories.children.length > 1)
      this.categories.children[1].remove();
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("mt-5");
    container.classList.add("mb-5");

    if (dish) {
      console.log(dish);
      container.id = "single-product";
      container.classList.add(`${dish.name}-style`);
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="row d-flex
            justify-content-center">
                        <div class="col-md-10">
                            <div class="card">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="images p-3">
                                            <div class="text-center p-4"> <img id="main-image"
                                                src="../Imagenes/${dish.name}.jpg"" /> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="product p-4">
                                            <div class="mt-4 mb-3"> <span class="text-uppercasebrand">${dish.name}</span>
                                                <h5 class="text-uppercase">${dish.description}</h5>
                                                <div class="price d-flex flex-row align-items-center">              
                                                </div>
                                            </div>
                                            <h6 class="text-uppercase">Descripción</h6>
                                            <p class="about">${dish.description}</p>
                                            <div class="sizes mt-5">
                                                <h6 class="text-uppercase">Ingredientes</h6>
                                                <p class="text-uppercase">${dish.ingredients}</p>
                                            </div>
                                            <div class="cart mt-4 align-items-center"> 
                                            <button dataserial="${dish.name}" 
                                            class="btn btn-info text-uppercase mr-2 px4">Añadir</button> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
      );
    } else {
      console.log(dish);
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="row d-flex justify-content-center">
                        ${message}
                    </div>`
      );
    }
    this.platos.append(container);
  }

  bindInit(handler) {
    document.getElementById('init').addEventListener('click', (event) => {
       this[EXECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#', event);
    });
    document.getElementById('logo').addEventListener('click', (event) => {
       this[EXECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#', event);;
    });
}

  //ocultar las categorías

  ocultarCategorias() {
    this.categorias.style.display = "none";
  }

  //eventos sobre la lista de platos de una categoría
  bindDishesCategoryList(handler) {
    const categoryList = document.getElementById("category-list");
    const links = categoryList.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  //eventos sobre los platos de una categoría asignados a un menú
  bindDishesCategoryListInMenu(handler) {
    const navCats = document.getElementById("navCats");
    const links = navCats.nextSibling.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  //eventos sobre los platos con un determinado alérgeno
  bindDishesAllergenList(handler) {
    const categoryList = document.getElementById("category-list");
    const links = categoryList.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.allergen);
      });
    }
  }

  //Eventos sobre los la relación de platos asignados a un alérgeno desde el menú de navegación
  bindDishesAllergenListInMenu(handler) {
    const navAlls = document.getElementById("navAlls");
    const links = navAlls.nextSibling.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.allergen);
      });
    }
  }

  //Eventos sobre los platos asignados al menú
  bindDishesMenuList(handler) {
    const categoryList = document.getElementById("category-list");
    const links = categoryList.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.allergen);
      });
    }
  }

  //Eventos sobre los platos asignados a un menú desde el menú de navegación
  bindDishesMenuListInMenu(handler) {
    const navMen = document.getElementById("navMen");
    const links = navMen.nextSibling.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.menu);
      });
    }
  }

  //Eventos sobre los restaurantes
  bindRestaurantList(handler) {
    const categoryList = document.getElementById("category-list");
    const links = categoryList.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.restaurant);
      });
    }
  }

  //Eventos sobre los restaurantes desde el menú de navegación
  bindRestaurantListInMenu(handler) {
    const navRes = document.getElementById("navRes");
    const links = navRes.nextSibling.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.restaurant);
      });
    }
  }
  //Eventos que se producen al pulsar sobre un plato para mostrar los detalles
  bindShowDetailsDishes(handler) {
    const productList = document.getElementById("product-list");
    const links = productList.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  //Listas

  //lista de categorías

  listCategories(categories, title) {
    this.platos.replaceChildren();
    if (this.categories.children.length > 1)
      this.categories.children[1].remove();
    const container = document.createElement("div");
    container.id = "product-list";
    container.classList.add("dishes");

    for (const dish of categories) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="category__container">
                            <a data-category="${dish.name}">
                                <div class="cat-list-image category__photo"><img id=cat-photo alt="${dish.name}"
                                    src="../Imagenes/${dish.name}.jpg" />
                                </div>
                                <div class="cat-list-text category_info">
                                    <h3>${dish.name}</h3>
                                    <p>${dish.description}</p>
                                </div>
                            </a>
                        </div>`
      );
    }
    this.ocultarCategorias();
    this.platos.append(container);
  }
  //lista de alérgenos
  listAllergens(allergens, title) {
    this.platos.replaceChildren();
    const container = document.createElement("div");
    container.id = "product-list";
    container.classList.add("dishes");

    for (const dish of allergens) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="category__container">
                            <a data-category="${dish.name}">
                                <div class="cat-list-image category__photo"><img alt="${dish.name}"
                                    src="../Imagenes/${dish.name}.jpg" />
                                </div>
                                <div class="cat-list-text category_info">
                                    <h3>${dish.name}</h3>
                                    <p>${dish.description}</p>
                                </div>
                            </a>
                        </div>`
      );
    }
    this.ocultarCategorias();
    this.platos.append(container);
  }
  //lista de restaurantes

  listRestaurant(restaurants, name) {
    this.platos.replaceChildren();
    const container = document.createElement("div");
    container.classList.add("ficha");

    console.log(restaurants);

    container.insertAdjacentHTML(
      "beforeend",
      `<div class="rest__container">
                  <div class="cat-list-text category_info">
                      <h3>${restaurants.name}</h3>
                      <p>${restaurants.description}</p>
                  </div>   
                  <br>   
                  <div class="cat-list-text category_info">
                  <h1>Puedes encontrarnos en:</h1>
                  <h3>${restaurants.location}</h3>
                  </div>
                  <div class="rest-foto">
                            <img id="res" alt="${restaurants.name}"
                                src="../Imagenes/${restaurants.name}.jpg" />
                       </div>
                    </div>`
    );
    this.ocultarCategorias();
    this.platos.append(container);
  }

  //lista de menús
  listMenus(menus) {
    this.platos.replaceChildren();
    const container = document.createElement("div");
    container.id = "product-list";
    container.classList.add("dishes");

    for (const dish of menus) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="category__container">
                                    <a data-category="${dish.name}">
                                        <div class="cat-list-image category__photo"><img alt="${dish.name}"
                                            src="../Imagenes/${dish.name}.jpg" />
                                        </div>
                                        <div class="cat-list-text category_info">
                                            <h3>${dish.name}</h3>
                                            <p>${dish.description}</p>
                                        </div>
                                    </a>
                                </div>`
      );
    }
    this.ocultarCategorias();
    this.platos.append(container);
  }


  modifyBreadcrumb(category){
    let breadcrumb = document.getElementById('breadcrumb');
		// si ya tiene un hijo , se borra para reemplazarlo por el nuevo
		if (breadcrumb.children[1] !== undefined) {
			breadcrumb.removeChild(breadcrumb.children[1]);
		}
		if (category !== null) {
			breadcrumb.insertAdjacentHTML('beforeend', `
			<li class="breadcrumb-item active" aria-current="page">${category}</li>
	
			 `);
		}
  
  }
}

//exportamos la clase
export default RestaurantView;
