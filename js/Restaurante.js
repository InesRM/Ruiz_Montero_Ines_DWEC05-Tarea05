//importamos la app
import RestaurantApp from './restauranteApp.js';

//History para las migas de pan ??

const historyActions={

  init:()=>{
    RestaurantApp.handleInit();
  },
  showCategories:(state)=>{
    RestaurantApp.handleDishesCategoryList(state
      .handleDishesCategoryList);
  },
  showDishes:(state)=>{
    RestaurantApp.handleShowDetailsDishes(state
      .handleShowDetailsDishes);
  },

  listAllergens:(state)=>{
    RestaurantApp.handleDishesAllergenList(state
      .handleDishesAllergenList);
  },

  listRestaurant:(state)=>{
    RestaurantApp.handleRestaurantList(state
      .handleRestaurantList);
  },
  listMenus:(state)=>{
    RestaurantApp.handleDishesMenuList(state
      .handleDishesMenuList);
  },


};

window.addEventListener('popstate', (event) => {
if (event.state) {
  historyActions[event.state.action](event.state);
}
});

history.replaceState({action:'init'},'init',null);
historyActions.init();





  