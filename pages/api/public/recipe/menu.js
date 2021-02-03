import axios from 'axios'
import apiKey from '@core/services/spoonacular'

export default async (req, res) => {
    const { amount = 1 } = req.body
    console.log('data')

    const { data } = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?maxFat=100&random=true&number=${amount}&apiKey=${apiKey}`)
      .catch(() => res.status(200).json({status: 'OK', body: fallbackData}))

    data.forEach(item => {
        delete item.imageType
        delete item.calories
        delete item.protein
        delete item.fat
        delete item.carbs
    })

    console.log(`fetched ${amount} spoonacular random menu`)

    res.status(200).json({status: 'OK', body: data})
}

const fallbackData = [
  {
    id: 157344,
    title: 'Spicy Salad with Kidney Beans, Cheddar, and Nuts',
    image: 'https://spoonacular.com/recipeImages/157344-312x231.jpg'
  },
  {
    id: 632015,
    title: 'Agave Glazed Carrots',
    image: 'https://spoonacular.com/recipeImages/632015-312x231.jpg'
  },
  {
    id: 636675,
    title: 'Cacao-Pecan Shortbread Cookies',
    image: 'https://spoonacular.com/recipeImages/636675-312x231.jpg'
  },
  {
    id: 637348,
    title: 'Celery Apple Risotto With Crispy Pancetta',
    image: 'https://spoonacular.com/recipeImages/637348-312x231.jpg'
  },
  {
    id: 640624,
    title: 'Creamy Choco-Pumpkin Bars',
    image: 'https://spoonacular.com/recipeImages/640624-312x231.jpg'
  },
  {
    id: 641893,
    title: 'Easy Cheesy Pizza Casserole',
    image: 'https://spoonacular.com/recipeImages/641893-312x231.jpg'
  },
  {
    id: 642272,
    title: 'Eggplant & Artichoke Heart Galettes',
    image: 'https://spoonacular.com/recipeImages/642272-312x231.jpg'
  },
  {
    id: 643153,
    title: 'Fluffy Spelt Pancakes',
    image: 'https://spoonacular.com/recipeImages/643153-312x231.jpg'
  },
  {
    id: 645742,
    title: 'Grilled Kabobs',
    image: 'https://spoonacular.com/recipeImages/645742-312x231.jpg'
  },
  {
    id: 646425,
    title: 'Healthier Pork Fried Rice',
    image: 'https://spoonacular.com/recipeImages/646425-312x231.jpg'
  },
  {
    id: 648408,
    title: 'Jamaican Jerk Rub And Seasoning',
    image: 'https://spoonacular.com/recipeImages/648408-312x231.jpg'
  },
  {
    id: 649129,
    title: 'Kung Pao Chicken With Peanuts',
    image: 'https://spoonacular.com/recipeImages/649129-312x231.jpg'
  },
  {
    id: 652672,
    title: 'Mushroom Gnocchi',
    image: 'https://spoonacular.com/recipeImages/652672-312x231.jpg'
  },
  {
    id: 653165,
    title: 'No Mayonnaise Cole Slaw',
    image: 'https://spoonacular.com/recipeImages/653165-312x231.jpg'
  },
  {
    id: 655269,
    title: 'Peanut Butter Chocolate Cream Pie',
    image: 'https://spoonacular.com/recipeImages/655269-312x231.jpg'
  },
  {
    id: 655726,
    title: 'Perfect Chicken Soup',
    image: 'https://spoonacular.com/recipeImages/655726-312x231.jpg'
  },
  {
    id: 660926,
    title: 'Spice-Rubbed Lemon Barbecue Salmon',
    image: 'https://spoonacular.com/recipeImages/660926-312x231.jpg'
  },
  {
    id: 664144,
    title: 'Tuscan Style Bread Salad',
    image: 'https://spoonacular.com/recipeImages/664144-312x231.jpg'
  },
  {
    id: 665767,
    title: 'Zucchini Pineapple Muffins',
    image: 'https://spoonacular.com/recipeImages/665767-312x231.jpg'
  },
  {
    id: 1157763,
    title: 'New Years Eve Countdown Cookies',
    image: 'https://spoonacular.com/recipeImages/1157763-312x231.jpg'
  }
]