import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import goBackArrow from '../icons/goBackArrow.svg';

export default function CreateDrinkForm({
  handleNewDrink,
  title,
  buttonText,
  preloadedValues,
}) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'all',
    defaultValues: preloadedValues
      ? preloadedValues
      : {
          strDrink: '',
          strAlcoholic: 'alcoholic',
          strCategory: 'Cocktail',
          strGlass: 'Cocktail glass',
          strInstructions: '',
          strIngredient1: '',
          strIngredient2: '',
          strIngredient3: '',
          strIngredient4: '',
          strIngredient5: '',
          strMeasure1: '',
          strMeasure2: '',
          strMeasure3: '',
          strMeasure4: '',
          strMeasure5: '',
        },
  });

  const onSubmit = data => {
    handleNewDrink({
      idDrink: nanoid(),
      isMyDrink: true,
      strDrink: data.strDrink,
      strCategory: data.strCategory,
      strAlcoholic: data.strAlcoholic,
      strGlass: data.strGlass,
      strInstructions: data.strInstructions,
      strIngredient1: data.strIngredient1,
      strIngredient2: data.strIngredient2,
      strIngredient3: data.strIngredient3,
      strIngredient4: data.strIngredient4,
      strIngredient5: data.strIngredient5,
      strMeasure1: data.strMeasure1,
      strMeasure2: data.strMeasure2,
      strMeasure3: data.strMeasure3,
      strMeasure4: data.strMeasure4,
      strMeasure5: data.strMeasure5,
    });
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
        <FormHeadline>{title}</FormHeadline>
        <label htmlFor="strDrink">
          What is the name of your drink?
          <FormInput
            type="text"
            id="strDrink"
            placeholder="name"
            maxLength={31}
            autoFocus
            {...register('strDrink', {
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
          <ErrorMessage>{errors.strDrink?.message}</ErrorMessage>
        </label>

        <label htmlFor="strAlcoholic">
          Alcoholic or non-alcoholic? <br />
          <FormSelect id="strAlcoholic" {...register('strAlcoholic')}>
            <option value="alcoholic">Alcoholic</option>
            <option value="non alcoholic">Non-Alcoholic</option>
          </FormSelect>
        </label>

        <label htmlFor="strCategory">
          Category? <br />
          <FormSelect id="strCategory" {...register('strCategory')}>
            <option value="Cocktail">Cocktail</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Shot">Shot</option>
            <option value="Coffee / Tea">Coffee / Tea</option>
            <option value="Soft Drink">Soft Drink</option>
            <option value="Punch / Party Drink">Punch / Party Drink</option>
            <option value="Beer">Beer</option>
          </FormSelect>
        </label>

        <label htmlFor="strGlass">
          Glass? <br />
          <FormSelect id="strGlass" {...register('strGlass')}>
            <option value="Cocktail glass">Cocktail Glass</option>
            <option value="Highball glass">Highball Glass</option>
            <option value="Old-fashioned glass">Old-fashioned Glass</option>
            <option value="Shot glass">Shot Glass</option>
            <option value="Beer glass">Beer Glass</option>
            <option value="Coffee mug">Coffee Mug</option>
          </FormSelect>
        </label>

        <IngredientsGrid>
          <label htmlFor="strIngredient1">
            Ingredient 1:
            <FormInput
              type="text"
              id="strIngredient1"
              placeholder="e.g. Orange juice"
              maxLength={31}
              {...register('strIngredient1', {
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
            <ErrorMessage>{errors.strIngredient1?.message}</ErrorMessage>
          </label>
          <label htmlFor="strMeasure1">
            Measure 1:
            <FormInput
              type="text"
              id="strMeasure1"
              placeholder="e.g. 3 oz"
              maxLength={11}
              {...register('strMeasure1', {
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
            <ErrorMessage>{errors.strMeasure1?.message}</ErrorMessage>
          </label>
          <label htmlFor="strIngredient2">
            Ingredient 2:
            <FormInput
              type="text"
              id="strIngredient2"
              placeholder="e.g. Orange juice"
              maxLength={31}
              {...register('strIngredient2', {
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
            <ErrorMessage>{errors.strIngredient2?.message}</ErrorMessage>
          </label>
          <label htmlFor="strMeasure2">
            Measure 2:
            <FormInput
              type="text"
              id="strMeasure2"
              placeholder="e.g. 3 oz"
              maxLength={11}
              {...register('strMeasure2', {
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
            <ErrorMessage>{errors.strMeasure2?.message}</ErrorMessage>
          </label>
          <label htmlFor="strIngredient3">
            Ingredient 3:
            <FormInput
              type="text"
              id="strIngredient3"
              placeholder="e.g. Orange juice"
              maxLength={31}
              {...register('strIngredient3', {
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
            <ErrorMessage>{errors.strIngredient3?.message}</ErrorMessage>
          </label>
          <label htmlFor="strMeasure3">
            Measure 3:
            <FormInput
              type="text"
              id="strMeasure3"
              placeholder="e.g. 3 oz"
              maxLength={11}
              {...register('strMeasure3', {
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
            <ErrorMessage>{errors.strMeasure3?.message}</ErrorMessage>
          </label>
          <label htmlFor="strIngredient4">
            Ingredient 4:
            <FormInput
              type="text"
              id="strIngredient4"
              maxLength={31}
              placeholder="e.g. Orange juice"
              {...register('strIngredient4', {
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
            <ErrorMessage>{errors.strIngredient4?.message}</ErrorMessage>
          </label>
          <label htmlFor="strMeasure4">
            Measure 4:
            <FormInput
              type="text"
              id="strMeasure4"
              placeholder="e.g. 3 oz"
              maxLength={11}
              {...register('strMeasure4', {
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
            <ErrorMessage>{errors.strMeasure4?.message}</ErrorMessage>
          </label>
          <label htmlFor="strIngredient5">
            Ingredient 5:
            <FormInput
              type="text"
              id="strIngredient5"
              placeholder="e.g. Orange juice"
              maxLength={31}
              {...register('strIngredient5', {
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
            <ErrorMessage>{errors.strIngredient5?.message}</ErrorMessage>
          </label>
          <label htmlFor="strMeasure5">
            Measure 5:
            <FormInput
              type="text"
              id="strMeasure5"
              placeholder="e.g. 3 oz"
              maxLength={11}
              {...register('strMeasure5', {
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
            <span>{errors.strMeasure5?.message}</span>
          </label>
        </IngredientsGrid>
        <label htmlFor="strInstructions">
          Instructions: <br />
          <textarea
            id="strInstructions"
            placeholder="Add some instructions for preparing your drink..."
            rows="5"
            maxLength={301}
            {...register('strInstructions', {
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

        <ErrorMessage>{errors.strInstructions?.message}</ErrorMessage>
        <FormButton disabled={!isDirty} type="submit">
          {buttonText}
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
  background-color: var(--bg-color-main);
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
    border: 1px solid var(--bg-color-secondary);
    border-radius: 5px;
    padding: 3px 5px;

    &:focus {
      outline: none;
      border-color: var(bg-color-button);
    }
  }
`;

const FormHeadline = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.3rem;
  color: var(--font-color-headlines-bright);
  text-align: center;
  margin: 5px auto;
`;

const IngredientsGrid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(5, 1fr);
`;

const FormInput = styled.input`
  width: 100%;
  border: 1px solid var(--bg-color-secondary);
  border-radius: 5px;
  padding: 5px 5px;

  &:focus {
    outline: none;
    border-color: var(bg-color-button);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  border: 1px solid var(--bg-color-secondary);
  border-radius: 5px;
  background-color: var(--font-color-text-bright);
  padding: 5px 5px;

  &:focus {
    outline: none;
    border-color: var(bg-color-button);
    border-radius: 5px;
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
  color: var(--font-color-headlines-bright);
  background-color: var(--bg-color-button);
  border-radius: 5px;
  border: 2px solid var(--bg-color-button);
  margin: 25px 0;

  &:focus,
  &:hover {
    outline: none;
    border-color: var(--font-color-headlines-bright);
  }
`;
