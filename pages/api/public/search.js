import axios from 'axios'
import apiKey from '@core/services/spoonacular'

export default async (req, res) => {
    const { keyword, amount } = req.body
    
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${keyword}&number=${amount}&apiKey=${apiKey}`
    
    const { data } = await axios.get(apiUrl)
      .catch(() => res.status(500).json({status: 'OK', message: 'Spoonacular api error'}))

    console.log(data)

    console.log(`searched : ${keyword}`)

    res.status(200).json({status: 'OK', body: data})
}