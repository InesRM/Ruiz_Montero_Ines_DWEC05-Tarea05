//importamos la app
import RestaurantApp from './restauranteApp.js';
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


//Creamos el objeto historyActions

// const historyActions = {
//   init: () => {
//       RestaurantApp.handleInit();
//   },
//   CategoryList: (event) => RestaurantApp.handleDishesCategoryList(event.state.category),
//   AllergenListInMenu: (event) => RestaurantApp.handleDishesAllergenList(event.state.allergen),
//   MenuListInMenu: (event) => RestaurantApp.handleDishesMenuList(event.state.menu),
//   RestaurantListInMenu: (event) => RestaurantApp.handleRestaurantList(event.state.restaurant),
//   showDetailsDishes: (event) => RestaurantApp.handleShowDetailsDishes(event.state.category),

// };

// window.addEventListener('popstate', (event) => {
//   if (event.state) {
//       console.log(event)
//       historyActions[event.state.action](event);
//   }
// });


// history.replaceState({ action: 'init' }, null);

  