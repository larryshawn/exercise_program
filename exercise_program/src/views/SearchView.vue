<template>
    <div class="search">
        <h1>This is an egg page</h1>
        <ItemCard v-for="egg in this.eggs.hits" :key="egg.id" :event="egg" />
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
            eggs: []
        }
    },
    created() {
        EventService.getEggs()
            .then((response) => {
                this.eggs = response.data
                console.log(this.eggs.hits)
            })
            .catch((error) => {
                console.log('There was an error:', error.response) // Logs out the error
            })
    }
}
</script>
