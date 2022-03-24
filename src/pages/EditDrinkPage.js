import DrinkForm from '../components/DrinkForm.js';

export default function EditDrinkPage({ handleNewDrink, drinkToEdit }) {
  return (
    <DrinkForm
      handleNewDrink={handleNewDrink}
      title={'Edit your drink'}
      buttonText={'Edit Drink'}
      preloadedValues={drinkToEdit}
    />
  );
}
