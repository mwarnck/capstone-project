import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

export default function CreateDrinkForm({ addNewDrink }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      drinkName: '',
      alcoholic: 'alcoholic',
      category: 'Cocktail',
      glass: 'Cocktail glass',
    },
  });

  const onSubmit = data => {
    const newDrink = {
      idDrink: nanoid(),
      strDrink: data.drinkName,
      strCategory: data.category,
      strAlcoholic: data.alcoholic,
      strGlass: data.glass,
      strInstructions: data.instructions,
      strIngredient1: data.ingredient1,
      strIngredient2: data.ingredient2,
      strIngredient3: data.ingredient3,
      strIngredient4: data.ingredient4,
      strIngredient5: data.ingredient5,
      strMeasure1: data.measure1,
      strMeasure2: data.measure2,
      strMeasure3: data.measure3,
      strMeasure4: data.measure4,
      strMeasure5: data.measure5,
    };
    console.log(newDrink);
    addNewDrink(newDrink);
    reset();
    navigate(-1);
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
        <select id="alcoholic" {...register('alcoholic')}>
          <option value="alcoholic">Alcoholic</option>
          <option value="non alcoholic">Non-Alcoholic</option>
        </select>
        <label htmlFor="category">Category?</label>
        <select id="category" {...register('category')}>
          <option value="Cocktail">Cocktail</option>
          <option value="Ordinary Drink">Ordinary Drink</option>
          <option value="Shot">Shot</option>
          <option value="Coffee / Tea">Coffee / Tea</option>
          <option value="Soft Drink">Soft Drink</option>
          <option value="Punch / Party Drink">Punch / Party Drink</option>
          <option value="Beer">Beer</option>
        </select>
        <label htmlFor="glass">Glass?</label>
        <select id="glass" {...register('glass')}>
          <option value="Cocktail glass">Cocktail Glass</option>
          <option value="Highball glass">Highball Glass</option>
          <option value="Old-fashioned glass">Old-fashioned Glass</option>
          <option value="Shot glass">Shot Glass</option>
          <option value="Beer glass">Beer Glass</option>
          <option value="Coffee mug">Coffee Mug</option>
        </select>
        <IngredientsGrid>
          <label htmlFor="ingredient1">
            Ingredient 1:
            <input
              type="text"
              id="ingredient1"
              placeholder="e.g. Orange juice"
              {...register('ingredient1', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 30,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.ingredient1?.message}</span>
          </label>
          <label htmlFor="measure1">
            Measure 1:
            <input
              type="text"
              id="measure1"
              placeholder="e.g. 3 oz"
              {...register('measure1', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 10,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.measure1?.message}</span>
          </label>
          <label htmlFor="ingredient2">
            Ingredient 2:
            <input
              type="text"
              id="ingredient2"
              placeholder="e.g. Orange juice"
              {...register('ingredient2', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 30,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.ingredient2?.message}</span>
          </label>
          <label htmlFor="measure2">
            Measure 2:
            <input
              type="text"
              id="measure2"
              placeholder="e.g. 3 oz"
              {...register('measure2', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 10,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.measure2?.message}</span>
          </label>
          <label htmlFor="ingredient3">
            Ingredient 3:
            <input
              type="text"
              id="ingredient3"
              placeholder="e.g. Orange juice"
              {...register('ingredient3', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 30,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.ingredient3?.message}</span>
          </label>
          <label htmlFor="measure3">
            Measure 3:
            <input
              type="text"
              id="measure3"
              placeholder="e.g. 3 oz"
              {...register('measure3', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 10,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.measure3?.message}</span>
          </label>
          <label htmlFor="ingredient4">
            Ingredient 4:
            <input
              type="text"
              id="ingredient4"
              placeholder="e.g. Orange juice"
              {...register('ingredient4', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 30,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.ingredient4?.message}</span>
          </label>
          <label htmlFor="measure4">
            Measure 4:
            <input
              type="text"
              id="measure4"
              placeholder="e.g. 3 oz"
              {...register('measure4', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 10,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.measure4?.message}</span>
          </label>
          <label htmlFor="ingredient5">
            Ingredient 5:
            <input
              type="text"
              id="ingredient5"
              placeholder="e.g. Orange juice"
              {...register('ingredient5', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 30,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.ingredient5?.message}</span>
          </label>
          <label htmlFor="measure5">
            Measure 5:
            <input
              type="text"
              id="measure5"
              placeholder="e.g. 3 oz"
              {...register('measure5', {
                minLength: {
                  value: 2,
                  message: 'This is too short',
                },
                maxLength: {
                  value: 10,
                  message: 'This is too long',
                },
              })}
            />
            <span>{errors.measure5?.message}</span>
          </label>
        </IngredientsGrid>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          placeholder="Add some instructions for preparing your drink..."
          rows="10"
          cols="20"
          {...register('instructions', {
            maxLength: {
              value: 300,
              message: 'This text is too long!',
            },
            minLength: {
              value: 10,
              message: 'Please add some instructions',
            },
          })}
        />
        <span>{errors.instructions?.message}</span>
        <button disabled={!isDirty} type="submit">
          Create Drink
        </button>
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
  font-size: 1.3rem;
  color: #f28d35;
  text-align: center;
`;

const IngredientsGrid = styled.div`
  display: grid;
  gap: 3px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;
