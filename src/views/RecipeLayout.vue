<template>
    <div>
        <h1>Recipe</h1>
        <div class="flex justify-center" v-if="loading">
        </div>
        <div v-if="error">
        </div>
        <div>
            <ul class=" grid grid-cols-3 justify-center gap-10 p-6 rounded-xl">
                <li class="card badge" v-for="meal in meals" :key="meal.idMeal">
                    
                    <img class="recipe-image" :src="meal.strMealThumb" :alt="meal.strMeal">
                    <h3>{{ meal.strMeal }}</h3>
                    <select @change="selectDay($event,meal)">
                            <option value="">SelectDays</option>
                            <option  v-for="(value, day) in plannerDays.planner"
                                    :key="day"
                                    :value="day"
                                    :class="{
                                    'text-gray-400 line-through': value !== null}">
                                    {{ day }} {{ value ? "(ocupado)" : "" }}
                                </option>
                        </select>
                    <div class="flex justify-evenly">
                    <router-link :to="`/recipe/${$route.params.category}/ingredients/${meal.idMeal}`">
                        <button>
                            ingredients
                        </button>
                    </router-link>
                    <router-link :to="`/recipe/${$route.params.category}/instructions/${meal.idMeal}`">
                        <button>
                            Instructions
                        </button>
                        
                    </router-link>
                    </div>
                </li>
            </ul>
            <div v-if="$route.params.mealId || $route.params.meal" 
                    class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                    @click="closeModal">
                <div class="rounded-lg p-6 w-[500px]"
                    @click.stop>
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { usePlannerStore } from '../stores/planner'
export default {
    name: 'RecipeLayout',
    setup(){
        const plannerDays = usePlannerStore();
    return {plannerDays}
    },
    data(){
        return {
            loading:false,
            error: false,
            meals:[],
            select:"",
        }
    },
    methods:{
        closeModal(){
            this.$router.push(`/recipe/${this.$route.params.category}`)
        },
        selectDay(event,meal){
            this.plannerDays.addMeal(event.target.value, meal)
            
            }
        },
    async mounted(){
        const id = this.$route.params.category;
        this.loading = true;
        try{
            const response  = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
            if(!response.ok){
                this.error = true
                throw new Error (`Response status: ${response.status}`)
            }
            const data = await response.json();
            this.meals = data.meals;
        }catch(error){
            console.log(error);
            this.error = true
        }finally {
            this.loading = false;
        }
        }
}
</script>
