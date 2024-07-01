import LogoIcon from '../../assets/static/logo/logo_without-text.svg?react';
import WrapIconPNG from '../../assets/static/food-images/food-image_kebab.png';
import SoupIconPNG from '../../assets/static/food-images/food-image_soup.png';
import ThaiIconPNG from '../../assets/static/food-images/food-image_ramen.png';
import PizzaIconPNG from '../../assets/static/food-images/food-image_pizza.png';
import SandwichIconPNG from '../../assets/static/food-images/food-image_sandwich.png';
import BurgerIconPNG from '../../assets/static/food-images/food-image_hamburger.png';

export enum DishType {
  Logo = 'logo',
  Wrap = 'wrap',
  Soup = 'soup',
  Thai = 'thai',
  Pizza = 'pizza',
  Sandwich = 'sandwich',
  Burger = 'burger',
}

export const getFoodIcon = (picture: DishType) => {
  switch (picture) {
    case DishType.Thai:
      return <img src={ThaiIconPNG} alt="Thai food" />;
    case DishType.Burger:
      return <img src={BurgerIconPNG} alt="Burger" />;
    case DishType.Sandwich:
      return <img src={SandwichIconPNG} alt="Sandwich" />;
    case DishType.Pizza:
      return <img src={PizzaIconPNG} alt="Pizza" />;
    case DishType.Soup:
      return <img src={SoupIconPNG} alt="Soup" />;
    case DishType.Wrap:
      return <img src={WrapIconPNG} alt="Wrap" />;
    default:
      return <LogoIcon />;
  }
};
