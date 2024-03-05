<template>
    <div class="search">
        <h1>This is a Search page now :)</h1>
        <form @submit.prevent="searchNutrients">
            <label for="searchTerm">Search:</label>
            <input type="text" id="searchTerm" v-model="query" />
            <input type="submit" class="button -fill-gradient" value="Submit" />
        </form>

        <ItemCard
            v-for="nutrient in this.nutrients"
            :key="nutrient.nix_item_id"
            :nutrients="nutrients"
        />
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import EventService from '@/services/EventService.js'

export default {
    components: {
        ItemCard
    },
    data() {
        return {
            query: '',
            results: [],
            nutrients: []
        }
    },
    methods: {
        searchFoods() {
            EventService.getItems(this.query)
                .then((response) => {
                    console.log('get items: ', response.data)
                    this.results = response.data

                    // Make additional API call for each item to get nutrients
                    this.results.branded.forEach((item) => {
                        console.log('item id: ', item.nix_item_id)
                        EventService.getNutrients(item.nix_item_id)
                            .then((response) => {
                                console.log('get nutrients: ', response.data)
                                item.nutrients = response.data
                                this.nutrients.push(item)
                            })
                            .catch((error) => {
                                console.log(
                                    'There was an error: ',
                                    error.response
                                )
                            })
                    })
                })
                .catch((error) => {
                    console.log('There was an error: ', error.response)
                })
        },
        searchNutrients() {
            EventService.getItems(this.query)
                .then((response) => {
                    console.log('get items yo: ', response.data.branded)
                    this.results = response.data.branded
                    console.log('this.results: ', this.results)
                    console.log('this.nutrients: ', this.nutrients)

                    // Iterate through the results array and get the nutrients for each item
                    for (let item of this.results) {
                        console.log('my item is: ', item)

                        EventService.getNutrients(item.nix_item_id)
                            .then((response) => {
                                console.log(
                                    'get nutrients: ',
                                    response.data.foods
                                )
                                item.nutrients = response.data.foods
                                this.nutrients.push(item.nutrients)
                                console.log(
                                    'the nutrients array for this item: ',
                                    item.nutrients
                                )
                            })
                            .catch((error) => {
                                console.log(
                                    'There was an error: ',
                                    error.response
                                )
                            })
                    }
                    console.log('My finished nutrients array: ', this.nutrients)
                })
                .catch((error) => {
                    console.log('There was an error: ', error.response)
                })
        }
    }
}
</script>
