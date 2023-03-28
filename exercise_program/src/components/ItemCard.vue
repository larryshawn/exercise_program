<template>
    <!-- <router-link
        class="event-link"
        :to="{
            name: 'event-show',
            params: { id: event.id, title: event.title }
        }"
    > -->
    <div class="event-card -shadow">
        <!-- <span class="eyebrow">@{{ event.total_hits.hits.length }} on</span> -->
        <h4 class="title">{{ this.event.fields.item_name }}</h4>
        <p>
            Calories: {{ this.event.fields.nf_calories }} <br />
            Protein: {{ this.event.fields.nf_protein }} <br />
            Carbs: {{ this.event.fields.nf_total_carbohydrate }} <br />
            Total Fat: {{ this.event.fields.nf_total_fat }} <br />
            Good Fat:
            {{ goodFat }}
            <br />
        </p>
    </div>
    <!-- </router-link> -->
</template>

<script>
export default {
    props: {
        event: Object
    },
    computed: {
        goodFat() {
            const totalFat = this.event.fields.nf_total_fat
            const saturatedFat = this.event.fields.nf_saturated_fat
            const transFat = this.event.fields.nf_trans_fatty_acid
            const goodFat = totalFat - saturatedFat - transFat

            const formattedGoodFat =
                goodFat % 1 === 0
                    ? goodFat.toFixed(0)
                    : Number(goodFat.toFixed(2))

            return formattedGoodFat
        }
    }
}
</script>

<style scoped>
.event-card {
    padding: 20px;
    margin-bottom: 24px;
    transition: all 0.2s linear;
    cursor: pointer;
}
.event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
        0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
    margin: 0;
}

.event-link {
    color: black;
    text-decoration: none;
    font-weight: 100;
}
</style>
