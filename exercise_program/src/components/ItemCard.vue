<template>
    <div class="food-card -shadow">
        <h4 class="title">{{ this.nutrients[0][0].food_name }}</h4>
        <p>
            Calories: {{ this.nutrients[0][0].nf_calories }} <br />
            Protein: {{ this.nutrients[0][0].nf_protein }} <br />
            Carbs: {{ this.nutrients[0][0].nf_total_carbohydrate }} <br />
            Total Fat: {{ this.nutrients[0][0].nf_total_fat }} <br />
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
        nutrients: Object
    },
    computed: {
        goodFat() {
            const totalFat = this.nutrients[0][0].nf_total_fat
            const saturatedFat = this.nutrients[0][0].nf_saturated_fat
            const transFat = this.nutrients[0][0].nf_trans_fatty_acid
            const goodFat = totalFat - saturatedFat - transFat

            const formattedGoodFat =
                goodFat % 1 === 0
                    ? goodFat.toFixed(0)
                    : Number(goodFat.toFixed(2))

            return formattedGoodFat
        }
    },
    mounted() {
        console.log('food:', this.nutrients) // Add this console log
    }
}
</script>

<style scoped>
.food-card {
    padding: 20px;
    margin-bottom: 24px;
    transition: all 0.2s linear;
    cursor: pointer;
}
.food-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
        0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.food-card > .title {
    margin: 0;
}

.food-link {
    color: black;
    text-decoration: none;
    font-weight: 100;
}
</style>
