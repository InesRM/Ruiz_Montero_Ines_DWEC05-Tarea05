//Importamos el módulo RestaurantManager
import RestaurantsManager,
{Dish,
Restaurant,
Allergen,
Menu,
Coordinate,
} from './restauranteModelo.js';

//Importamos el módulo del controlador 
import RestaurantController from './restauranteController.js';
//Importamos las vistas
import RestaurantView from './restauranteView.js';

/**Creamos la instancia de la clase RestaurantController y le pasamos
 * la instancia de la clase RestaurantsManager y 
 * como segundo parámetro la instancia de la clase RestaurantView (modelo, vista)
*/
const RestaurantApp = new RestaurantController(RestaurantsManager.getInstance(), new RestaurantView());

export default RestaurantApp;