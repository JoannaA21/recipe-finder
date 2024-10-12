import axios from 'axios';

export const fetchByMealName = async(mealName) => {
    const apiUrl = 'www.themealdb.com/api/json/v1/1/search.php?s='

    try{
        const response = await axios.get(`apiUrl${mealName}`);
        console.log(response.data)
        return response.data;
    }catch(error){
        console.error("Issue fetching data: ", error)
    }
}