import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from  '../views/HomeView.vue';
import PlannerView from '../views/PlannerView.vue';
import RecipeLayout from '../views/RecipeLayout.vue';
import SearchView from '../views/SearchView.vue';
import RecipeIngredients from '../views/recipe/RecipeIngredients.vue'
import RecipeInstructions from '../views/recipe/RecipeInstructions.vue'

const routes = [
    {path: '/', component: HomeView},
    {path: '/search/:id',component : SearchView},
    {path: '/planner', component : PlannerView},
    {path: '/recipe/:category', component: RecipeLayout,children: [
        {path: 'ingredients/:mealId', component: RecipeIngredients},
        {path: 'instructions/:meal', component: RecipeInstructions}
    ]},
];
export const router = createRouter({history : createWebHashHistory(),routes})