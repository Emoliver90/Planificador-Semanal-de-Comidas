<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Buscar recetas</h1>
    <div class="flex justify-center" v-if="loading">
        </div>
        <div v-if="error">
        </div>
    <div>
        <input v-model="search"
        placeholder="Primer letra de la comida" 
        type="text"
        class="border p-2 rounded w-full mb-4">
        <button @click="letterMeals()">buscar</button>
        <input v-model="search2"
        placeholder="Escriba la comida"
        type="text"
        class="border p-2 rounded w-full mb-4">
        <button @click="nameMeals()">buscar</button>
        <ul class="grid grid-cols-3 gap-6">
          <li class="card badge hr" v-for="meal in Meals" :key="meal.idMeal">
            <img class="recipe-image" :src="meal.strMealThumb" :alt="meal.strMeal">
            <h3>{{ meal.strMeal }}</h3>
            <select @change="plannerDays.addMeal($event.target.value,meal)">
              <option value="">SelectDays</option>
              <option  v-for="(value, day) in plannerDays.planner"
                      :key="day"
                      :value="day"
                      :class="{'text-gray-400 line-through': value !== null}">
                      {{ day }} {{ value ? "(ocupado)" : "" }}
              </option>
            </select>
          </li>
        </ul>
    </div>
    
  </div>
</template>
<script>
import { usePlannerStore } from '../stores/planner';
export default {
  name: "SearchView",
  setup(){
    const plannerDays = usePlannerStore();
    return {plannerDays}
  },
  data(){
    return{
      category: "",
      loading: false,
      error: false,
      search: "",
      search2: "",
      Meals: [],
    }
  },
  methods: {
      async letterMeals() {
        this.loading = true
        try{
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.search}`)
          if(!response.ok){
            this.error = true
            throw new Error (`Response status: ${response.status}`)
          }
          const data = await response.json()
          this.Meals = data.meals;
        }catch (error){
        console.log(error);
        this.error = true
        }finally{
        this.loading = false
        this.search = ""
        }
      },
      async nameMeals(){
        try{
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.search2}`)
          if(!response.ok){
            this.error = true
            throw new Error (`Response status: ${response.status}`)
          }
          const data = await response.json()
          this.Meals = data.meals;
        }catch (error){
        console.log(error);
        this.error = true
        }finally{
        this.loading = false
        this.search2 = ""
        }
      }
  },
  
}
</script>

