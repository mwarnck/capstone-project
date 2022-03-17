import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export default function CreateDrinkForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    drinkName: '',
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormHeadline>Create your own drink!</FormHeadline>
        <label htmlFor="drinkName">What is the name of your drink?</label>
        <input
          type="text"
          id="drinkName"
          placeholder="name"
          autoFocus
          {...register('drinkName', {
            minLength: {
              value: 2,
              message: 'This name is too short',
            },
            maxLength: {
              value: 30,
              message: 'This name is too long',
            },
          })}
        />
        <span>{errors.drinkName?.message}</span>

        <label htmlFor="alcoholic">Alcoholic or non-alcoholic?</label>
        <select id="alcoholic">
          <option value="alcoholic">Alcoholic</option>
          <option value="non alcoholic">Non-Alcoholic</option>
        </select>
        <label htmlFor="category">Category?</label>
        <select id="category">
          <option value="Cocktail">Cocktail</option>
          <option value="Ordinary Drink">Ordinary Drink</option>
          <option value="Shot">Shot</option>
          <option value="Coffee / Tea">Coffee / Tea</option>
          <option value="Soft Drink">Soft Drink</option>
          <option value="Punch / Party Drink">Punch / Party Drink</option>
          <option value="Beer">Beer</option>
        </select>
        <label htmlFor="glass">Glass?</label>
        <select id="glass">
          <option value="HighBall glass">Highball Glass</option>
          <option value="Cocktail glass">Cocktail Glass</option>
          <option value="Old-fashioned glass">Old-fashioned Glass</option>
          <option value="Shot glass">Shot Glass</option>
          <option value="Beer glass">Beer Glass</option>
          <option value="Coffee mug">Coffee Mug</option>
        </select>
      </StyledForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 33%;
  max-width: 600px;
  min-width: 300px;
`;

const FormHeadline = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #f28d35;
  text-align: center;
`;
