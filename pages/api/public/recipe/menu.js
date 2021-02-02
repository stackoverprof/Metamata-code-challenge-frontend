// import axios from 'axios'

export default async (req, res) => {
    // const { amount = 1 } = req.body

    // const { data } = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?maxFat=100&random=true&number=${amount}&apiKey=df21e0633825409383896a5a8b2d5aed`)
    

    data.forEach(item => {
        delete item.imageType
        delete item.calories
        delete item.protein
        delete item.fat
        delete item.carbs
    })


    res.status(200).json({status: 'OK', body: data})
}

const data = [
    {
      id: 635391,
      title: 'Blue Sugar Plum Cake',
      image: 'https://spoonacular.com/recipeImages/635391-312x231.jpg'
    },
    {
      id: 157089,
      title: '5 Ingredient High Protein Pumpkin Pancakes',
      image: 'https://spoonacular.com/recipeImages/157089-312x231.jpg'
    },
    {
      id: 632356,
      title: 'Ang Chow Chicken Soup With Preserved Mustard Greens',
      image: 'https://spoonacular.com/recipeImages/632356-312x231.jpg'
    },
    {
      id: 637658,
      title: 'Cheesy Ham and Shrimp Macaroni Au Gratin',
      image: 'https://spoonacular.com/recipeImages/637658-312x231.jpg'
    },
    {
      id: 638174,
      title: 'Chicken Lo Mein',
      image: 'https://spoonacular.com/recipeImages/638174-312x231.jpg'
    },
    {
      id: 639615,
      title: 'Classic Martini',
      image: 'https://spoonacular.com/recipeImages/639615-312x231.jpg'
    },
    {
      id: 639715,
      title: 'Coconut Almond Macaroons',
      image: 'https://spoonacular.com/recipeImages/639715-312x231.jpg'
    },
    {
      id: 640591,
      title: 'Creamy aubergine and cannellini soup',
      image: 'https://spoonacular.com/recipeImages/640591-312x231.jpg'
    },
    {
      id: 642606,
      title: 'Farro With Porcini, Chanterelles & Mascarpone',
      image: 'https://spoonacular.com/recipeImages/642606-312x231.jpg'
    },
    {
      id: 643634,
      title: 'Macaroni with Fresh Tomatoes and Beans',
      image: 'https://spoonacular.com/recipeImages/643634-312x231.jpg'
    },
    {
      id: 645265,
      title: 'Great Greek Salad',
      image: 'https://spoonacular.com/recipeImages/645265-312x231.jpg'
    },
    {
      id: 650939,
      title: 'Maple-Glazed Apple Cookies',
      image: 'https://spoonacular.com/recipeImages/650939-312x231.jpg'
    },
    {
      id: 655822,
      title: 'Pesto Fresh Caprese Sandwich',
      image: 'https://spoonacular.com/recipeImages/655822-312x231.jpg'
    },
    {
      id: 662376,
      title: 'Superbowl Chili',
      image: 'https://spoonacular.com/recipeImages/662376-312x231.jpg'
    },
    {
      id: 662744,
      title: 'Taco Egg Roll',
      image: 'https://spoonacular.com/recipeImages/662744-312x231.jpg'
    },
    {
      id: 665379,
      title: 'Winter Kimchi',
      image: 'https://spoonacular.com/recipeImages/665379-312x231.jpg'
    },
    {
      id: 982371,
      title: 'Instant Pot Quinoa Grain Bowl',
      image: 'https://spoonacular.com/recipeImages/982371-312x231.jpg'
    },
    {
      id: 1095800,
      title: 'Warm cream of cucumber soup',
      image: 'https://spoonacular.com/recipeImages/1095800-312x231.jpg'
    },
    {
      id: 1449043,
      title: 'Easy Magic Cookie Bars',
      image: 'https://spoonacular.com/recipeImages/1449043-312x231.jpg'
    },
    {
      id: 1504227,
      title: 'Easy Italian Meatballs',
      image: 'https://spoonacular.com/recipeImages/1504227-312x231.jpg'
    }
]
