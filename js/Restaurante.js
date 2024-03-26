//importamos la app
import RestaurantApp from './restauranteApp.js';

//Creamos un objeto historyAction e intentaré implentar el método replaceState


window.addEventListener("popstate", (event) => {
    if (event.state) {
      historyAction[event.state.action](event.state.data);
    }
  });
  
  const historyAction = {
    init: () => {
      RestaurantApp.handleInit();
    },
    showCategories: () => {
      RestaurantApp.handleDishesCategoryList();
    },
    showAllergens: () => {
      RestaurantApp.handleDishesAllergenList();
    },
    showMenus: () => {
      RestaurantApp.handleDishesMenuList();
    },
    showRestaurants: () => {
      RestaurantApp.handleRestaurantList();
    },
    showMenuDish: (event) => {
      RestaurantApp.handleShowDetailsDishes;
    },
  };
  historyAction.replaceState = (action, data) => {
    history.replaceState({ action, data }, "", "");
  };
  