//importamos las clases que vamos a utilizar
import{Category, Allergen, Menu, Coordinate, Dish, Restaurant} from "./restauranteModel.js";

//Creamos las constantes que vamos a utilizar
const MODEL = Symbol('restauranteModel');
const VIEW = Symbol('restauranteView'); //Sin hacer aún HECHO
const LOAD_RESTAURANT = Symbol('Load Manager Objects');


class RestaurantController{
    constructor(model, view){
        this[MODEL] = model;
        this[VIEW] = view;
     
    }


[LOAD_RESTAURANT]() {
        // Creamos las instancias de las clases que vamos a utilizar y los ejemplos a falta de base de datos

        // Creamos los 4 platos de Hamburguesas
        let pollo = new Dish("Pollo", "Hamburguesas de pollo",
            ["Pollo"," Lechuga", " Tomate"],
            "Imagenes/Pollo.jpg");

        let ternera = new Dish("Ternera", "Hamburguesa de ternera",
            ["Ternera", " Tomate", " Lechuga"],
            "Imagenes/Ternera.jpg");

        let vegetariana = new Dish("Vegetariana", "Hamburguesa vegetal",
            ["Vegetales", " Tomate", " Lechuga"],
            "Imagenes/Vegetariana.jpg");

        let barbacoa = new Dish("Barbacoa", "Hamburguesa barbacoa",
            ["Salsa Barbacoa ", " Tomate", " Lechuga"],
            "Imagenes/Barbacoa.jpg");


        // Creamos los 4 platos de Postres
        let chocolate = new Dish("Chocolate", "Tarta de Chocolate",
            ["Cacao", "Salsa", "Nata", "Galleta"],
            "Imagenes/Chocolate.jpg");

        let helado = new Dish("Helado", "Helados caseros de frutas",
            ["Helado", "Salsa", "Galleta", "Frutas"],
            "Imagenes/Helado.jpg");

        let fruta = new Dish("Fruta", "Frutas frescas de temporada",
            ["Arándanos", "Fresas", "Moras"],
            "Imagenes/Fruta.jpg");

        let tiramisu = new Dish("Tiramisu", "Pastel de Tiramisu",
            ["Tiramisu", "Salsa", "Nata", "Galleta"],
            "Imagenes/Tiramisu.jpg");


        // Creamos los 4 platos de ensaladas
        let cesar = new Dish("Cesar", "Ensalada cesar",
            ["Lechuga", "Pollo", "Salsa", "Tomate"],
            "Imagenes/Cesar.jpg");

        let pasta = new Dish("Pasta", "Ensalada de pasta",
            ["Pasta", "Salsa", "Tomate", "Lechuga"],
            "Imagenes/Pasta.jpg");

        let vegetal = new Dish("Vegana", "Ensalada vegetal",
            ["Vegetales", "Salsa", "Tomate", "Lechuga"],
            "Imagenes/Vegana.jpg");

        let pescado = new Dish("Pescado", "Ensalada de pescado",
            ["Pescado de temporada","Tomate", "Lechuga"],
            "Imagenes/Pescado.jpg");

        // Crear un objeto de la clase Category
        let ensaladas = new Category("Ensaladas", "Frescas y variadas ensaladas y entrantes");
        let hamburguesas = new Category("Hamburguesas", "Hamburguesas de pollo, ternera y tofu");
        let postres = new Category("Postres", "Postres caseros y variados");

        // Crear un objeto de la clase Allergen
        let gluten = new Allergen("Gluten", "Las hamburguesas contiene gluten");
        let lactosa = new Allergen("Lactosa", "La salsa contiene leche");
        let frutosSecos = new Allergen("Frutos Secos", "La brochetas contiene trazas de frutos secos");
        let fructosa = new Allergen("Fructosa", "La salsa puede contener trazas de fructosa");

        // Crear un objeto de la clase Menu
        let menuVegetariano = new Menu("Menu Vegetariano", "Menu diario del restaurante");
        let menuContinental = new Menu("Menu Continental", "Menu de platos internacionales");
        let menuPollo = new Menu("Menú Pollo", "Menu diario del restaurante");

        // Crear un objeto de la clase Coordinate
        let coord1 = new Coordinate(37.7128, -54.0060);
        let coord2 = new Coordinate(38.7128, -64.0060);
        let coord3 = new Coordinate(39.7128, -84.0060);

        // Crear un objeto de la clase Restaurante
        let cocina1 = new Restaurant("Central", "Restaurante De Alta Cocina, Especialidad en Pescados", coord1);
        let cocina2 = new Restaurant("Bistro", "Restaurante De Cocina Tradicional Española", coord2);
        let cocina3 = new Restaurant("Gourmet", "Restaurante De Cocina Internacional", coord3);

        this[MODEL].addRestaurant(cocina1, cocina2, cocina3);

        // Asignamos los platos a las categorías
        this[MODEL].assignCategoryToDish(hamburguesas, pollo, ternera, vegetariana, barbacoa);

        this[MODEL].assignCategoryToDish(ensaladas, pescado, cesar, vegetal, pasta);

        this[MODEL].assignCategoryToDish(postres, fruta, tiramisu, helado, chocolate);

        //Asignamos los platos a los alergenos
        this[MODEL].assignAllergenToDish(gluten, pollo, ternera, vegetariana, barbacoa, ternera);
        this[MODEL].assignAllergenToDish(lactosa, chocolate, helado, tiramisu);
        this[MODEL].assignAllergenToDish(frutosSecos, chocolate, tiramisu);
        this[MODEL].assignAllergenToDish(fructosa, helado, fruta)

        // Asignamos los platos a los menus 
        this[MODEL].assignMenuToDish(menuVegetariano, vegetariana, vegetal, fruta);
        this[MODEL].assignMenuToDish(menuPollo, pollo, cesar, chocolate);
        this[MODEL].assignMenuToDish(menuContinental, barbacoa, pasta, helado);
    }
    
    onload= () =>{
        this[LOAD_RESTAURANT]();
        this[VIEW].showCategories(this[MODEL].getCategories());
        this[VIEW].showDishes(this[MODEL].getCategories()); 
        
      
    }

    onInit = () => {
        
    }

    handleInit = () => {
        this.onInit();
    }

    //Manejador de los detalles de los platos
    handleShowDetailsDishes = (name) => {
        try {
            let dish = this[MODEL].getDish(name);
            console.log(dish);
            this[VIEW].showDetailsDishes(dish);
        } catch (error) {
            this[VIEW].showDetailsDishes(null, 'No existe este producto en la página.');
        }
    };


    //Manejador de la lista de platos de las categorías
    handleDishesCategoryList = (title) => {
        const category = (this[MODEL].getCategory(title));
        this[VIEW].listCategories(this[MODEL].getCategoryProducts(category),
            category.name);
        this[VIEW].bindShowDetailsDishes(this.handleShowDetailsDishes);
    };

    //Manejador de la lista de platos de los alergenos

    handleDishesAllergenList = (title) => {
        const allergen = (this[MODEL].getAllergen(title));
        this[VIEW].listAllergens(this[MODEL].getAllergenProducts(allergen),
            allergen.name);
        this[VIEW].bindShowDetailsDishes(this.handleShowDetailsDishes);
    };


    //Manejador de la lista de platos de los menus
    handleDishesMenuList = (title) => {
        const menu = (this[MODEL].getMenu(title));
        this[VIEW].listMenus(this[MODEL].getMenuProducts(menu),
            menu.name);
        this[VIEW].bindShowDetailsDishes(this.handleShowDetailsDishes);
    };

    //Manejador de la lista de restaurantes

    handleRestaurantList = (title) => {
        const restaurant = (this[MODEL].getRestaurant(title));
        this[VIEW].listRestaurant(this[MODEL].getRestaurantsDetails(restaurant),
            restaurant.name);
    };

    onAddCategory = () => {//Cuando se añade una categoría
        this[VIEW].showCategoriesInMenu(this[MODEL].getCategories());
    };

    onAddAllergens = () => {
        this[VIEW].showAllergensInMenu(this[MODEL].getAllergens());
    };

    onAddRestaurant = () => {
        this[VIEW].showRestaurantsInMenu(this[MODEL].getRestaurants());
    };

    onAddMenus = () => {
        this[VIEW].showMenusInMenu(this[MODEL].getMenus());
    };

}