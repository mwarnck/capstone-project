import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import goBackArrow from '../icons/goBackArrow.svg';

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
      isMyDrink: true,
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
      <GoBackArrow onClick={() => navigate(-1)}>
        <img src={goBackArrow} width="35" height="35" alt="go back arrow" />
        <span className="sr-only">Go back arrow</span>
      </GoBackArrow>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormHeadline>Create your own drink!</FormHeadline>
        <label htmlFor="drinkName">
          What is the name of your drink?
          <FormInput
            type="text"
            id="drinkName"
            placeholder="name"
            autoFocus
            {...register('drinkName', {
              required: {
                value: true,
                message: 'Your drink needs a name',
              },
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
          <ErrorMessage>{errors.drinkName?.message}</ErrorMessage>
        </label>

        <label htmlFor="alcoholic">
          Alcoholic or non-alcoholic? <br />
          <FormSelect id="alcoholic" {...register('alcoholic')}>
            <option value="alcoholic">Alcoholic</option>
            <option value="non alcoholic">Non-Alcoholic</option>
          </FormSelect>
        </label>

        <label htmlFor="category">
          Category? <br />
          <FormSelect id="category" {...register('category')}>
            <option value="Cocktail">Cocktail</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Shot">Shot</option>
            <option value="Coffee / Tea">Coffee / Tea</option>
            <option value="Soft Drink">Soft Drink</option>
            <option value="Punch / Party Drink">Punch / Party Drink</option>
            <option value="Beer">Beer</option>
          </FormSelect>
        </label>

        <label htmlFor="glass">
          Glass? <br />
          <FormSelect id="glass" {...register('glass')}>
            <option value="Cocktail glass">Cocktail Glass</option>
            <option value="Highball glass">Highball Glass</option>
            <option value="Old-fashioned glass">Old-fashioned Glass</option>
            <option value="Shot glass">Shot Glass</option>
            <option value="Beer glass">Beer Glass</option>
            <option value="Coffee mug">Coffee Mug</option>
          </FormSelect>
        </label>

        <IngredientsGrid>
          <label htmlFor="ingredient1">
            Ingredient 1:
            <FormInput
              type="text"
              id="ingredient1"
              placeholder="e.g. Orange juice"
              {...register('ingredient1', {
                required: {
                  value: true,
                  message: 'You need at least one ingredient',
                },
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
            <ErrorMessage>{errors.ingredient1?.message}</ErrorMessage>
          </label>
          <label htmlFor="measure1">
            Measure 1:
            <FormInput
              type="text"
              id="measure1"
              placeholder="e.g. 3 oz"
              {...register('measure1', {
                required: {
                  value: true,
                  message: 'How much?',
                },
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
            <ErrorMessage>{errors.measure1?.message}</ErrorMessage>
          </label>
          <label htmlFor="ingredient2">
            Ingredient 2:
            <FormInput
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
            <ErrorMessage>{errors.ingredient2?.message}</ErrorMessage>
          </label>
          <label htmlFor="measure2">
            Measure 2:
            <FormInput
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
            <ErrorMessage>{errors.measure2?.message}</ErrorMessage>
          </label>
          <label htmlFor="ingredient3">
            Ingredient 3:
            <FormInput
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
            <ErrorMessage>{errors.ingredient3?.message}</ErrorMessage>
          </label>
          <label htmlFor="measure3">
            Measure 3:
            <FormInput
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
            <ErrorMessage>{errors.measure3?.message}</ErrorMessage>
          </label>
          <label htmlFor="ingredient4">
            Ingredient 4:
            <FormInput
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
            <ErrorMessage>{errors.ingredient4?.message}</ErrorMessage>
          </label>
          <label htmlFor="measure4">
            Measure 4:
            <FormInput
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
            <ErrorMessage>{errors.measure4?.message}</ErrorMessage>
          </label>
          <label htmlFor="ingredient5">
            Ingredient 5:
            <FormInput
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
            <ErrorMessage>{errors.ingredient5?.message}</ErrorMessage>
          </label>
          <label htmlFor="measure5">
            Measure 5:
            <FormInput
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
        <label htmlFor="instructions">
          Instructions: <br />
          <textarea
            id="instructions"
            placeholder="Add some instructions for preparing your drink..."
            rows="5"
            {...register('instructions', {
              required: {
                value: true,
                message: 'Please add some instructions.',
              },
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
        </label>

        <ErrorMessage>{errors.instructions?.message}</ErrorMessage>
        <FormButton disabled={!isDirty} type="submit">
          Create Drink
        </FormButton>
      </StyledForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  position: relative;
`;

const GoBackArrow = styled.button`
  position: absolute;
  top: 6px;
  left: 5px;
  background-color: #fff;
  border-style: none;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0;
  width: 33%;
  max-width: 600px;
  min-width: 300px;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.2rem;
  }

  textarea {
    width: 100%;
    font-size: 16px;
    font-family: sans-serif;
    border: 1px solid #f28d35;
    border-radius: 5px;
    padding: 3px 5px;

    &:focus {
      outline: none;
      border: 2px solid #0392b0;
    }
  }
`;

const FormHeadline = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.3rem;
  color: #f28d35;
  text-align: center;
  margin: 5px auto;
`;

const IngredientsGrid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  //margin: 5px auto;
`;

const FormInput = styled.input`
  width: 100%;
  font-size: 16px;
  font-family: sans-serif;
  border: 1px solid #f28d35;
  border-radius: 5px;
  padding: 5px 5px;

  &:focus {
    outline: none;
    border: 2px solid #0392b0;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  font-size: 16px;
  font-family: sans-serif;
  border: 1px solid #f28d35;
  border-radius: 5px;
  background-color: #b8c7cf;
  padding: 5px 5px;

  &:focus {
    outline: none;
    border: 2px solid #0392b0;
    border-radius: inherit;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.7rem;
  font-family: sans-serif;
  font-weight: 400;
  padding-left: 5px;
`;

const FormButton = styled.button`
  height: 40px;
  font-size: 1.1rem;
  font-family: sans-serif;
  color: #fff;
  background-color: #0392b0;
  border-radius: 5px;
  border: 2px solid #0392b0;
  margin: 25px 0;

  &:focus,
  &:hover {
    outline: none;
    border-color: #f28d35;
  }
`;
