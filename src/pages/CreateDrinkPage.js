import styled from 'styled-components';
import CreateDrinkForm from '../components/CreateDrinkForm.js';

export default function CreateDrinkPage({ handleNewDrink }) {
  return (
    <CreateDrinkForm
      handleNewDrink={handleNewDrink}
      title={'Create your own drink'}
      buttonText={'Create Drink'}
    />
  );
}
