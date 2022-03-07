import DrinkCard from './DrinkCard';

export default {
  title: 'Component/DrinkCard',
  component: DrinkCard,
};

const Template = args => <DrinkCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  drink: {
    idDrink: '17222',
    strDrink: 'A1',
    strDrinkAlternate: null,
    strTags: null,
    strVideo: null,
    strCategory: 'Cocktail',
    strIBA: null,
    strAlcoholic: 'Alcoholic',
    strGlass: 'Cocktail glass',
    strInstructions:
      'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
    strInstructionsES: null,
    strInstructionsDE:
      'Alle Zutaten in einen Cocktailshaker geben, mischen und \u00fcber Eis in ein gek\u00fchltes Glas servieren.',
    strInstructionsFR: null,
    strInstructionsIT:
      'Versare tutti gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.',
    'strInstructionsZH-HANS': null,
    'strInstructionsZH-HANT': null,
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    strIngredient1: 'Gin',
    strIngredient2: 'Grand Marnier',
    strIngredient3: 'Lemon Juice',
    strIngredient4: 'Grenadine',
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: '1 3/4 shot ',
    strMeasure2: '1 Shot ',
    strMeasure3: '1/4 Shot',
    strMeasure4: '1/8 Shot',
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource: null,
    strImageAttribution: null,
    strCreativeCommonsConfirmed: 'No',
    dateModified: '2017-09-07 21:42:09',
  },
};
