import axios from 'axios'

const apiClient = axios.create({
    baseURL:
        'https://api.nutritionix.com/v1_1/search/' +
        'egg' +
        '?fields=*&appId=fa29d9c4&appKey=0ba07a98eec4870860353ad5617c973e',
    withCredientials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEggs() {
        return apiClient.get('')
    }
}
