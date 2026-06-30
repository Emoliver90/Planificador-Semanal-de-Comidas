<template>
    <div>
        <h1>Planner</h1>
        <ul>
            <li class="badge recipe-image" v-for="(meal,day) in plannerDays.planner" :key="day">
                <h2>
                    {{ day }}
                </h2>
                <p v-if="meal">
                    {{ meal.strMeal }}
                </p>
                <p v-else>
                    Sin receta
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
import { usePlannerStore } from '../stores/planner';
export default {
    name: 'PlannerView',
    setup(){
        const plannerDays = usePlannerStore();
        return {plannerDays}
    },
}
</script>
