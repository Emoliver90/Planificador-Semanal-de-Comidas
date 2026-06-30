<template>
    <div>
        <div class="flex justify-center" v-if="loading">
        </div>
        <div v-if="error">
        </div>
        </div>
        <div class="max-h-[80vh] overflow-y-auto p-6 bg-white rounded-lg">
            <div v-if="ingredients">
            <h2 class="font-bold mb-4 text-gray-800">{{ ingredients.strMeal }}</h2>
            <h2 class="text-gray-800">Ingredients</h2>
            <ul v-if="ingredientList.length" class="mt-6 border p-4">
                <li class="whitespace-pre-line text-sm leading-6 text-gray-700" 
                v-for="(item, index) in ingredientList" :key="index">
                    {{ item.measure }} {{ item.ingredient }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Loading from '../../components/Loading.vue';
import Error from '../../components/Error.vue'
export default {
    name: 'RecipeIngredients',
    components: {Loading,Error},
    data(){
        return{
            ingredients: null,
            loading: false,
            error: false,
        }
    },
    computed:{
        ingredientList(){
            if(!this.ingredients)return[];
            const list = [];
            for (let i = 1; i <= 20; i++){
                const ingredient = this.ingredients[`strIngredient${i}`];
                const measure = this.ingredients[`strMeasure${i}`];
                if(ingredient && ingredient.trim()){
                    list.push({
                        ingredient,
                        measure
                    });
                }
            }
            return list;
        }
    },
    watch:{
        '$route.params.mealId':{
            immediate : true,
            handler(){
                this.featchIngredient();
            }
        }
    },
    methods: {
        async featchIngredient(){
            this.loading = true;
            const id = this.$route.params.mealId;
            try{
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) {
                    this.error = true;
                    throw new Error(`Response status ${response.status}`);
                }
                const data = await response.json();
                this.ingredients = data.meals[0];
            }catch(error) {
                console.log(error);
                this.error = true;
            }finally{
                this.loading = false
            }
        }
    },
}
</script>
