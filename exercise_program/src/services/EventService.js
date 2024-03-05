import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://trackapi.nutritionix.com/',
    headers: {
        'x-app-id': 'fa29d9c4',
        'x-app-key': '0ba07a98eec4870860353ad5617c973e',
        'x-remote-user-id': '0',
        'Content-Type': 'application/json'
    }
})

export default {
    getItems(item) {
        return apiClient.get('v2/search/instant?query=' + item)
    },
    getNutrients(item) {
        return apiClient.get('v2/search/item?nix_item_id=' + item)
    }
}
