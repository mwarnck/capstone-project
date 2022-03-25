import DrinkForm from '../components/DrinkForm.js';

export default function CreateDrinkPage({ handleNewDrink }) {
  return (
    <DrinkForm
      handleNewDrink={handleNewDrink}
      title={'Create your own drink'}
      buttonText={'Create Drink'}
    />
  );
}
