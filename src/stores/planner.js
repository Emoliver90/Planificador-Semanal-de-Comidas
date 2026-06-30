import { defineStore } from "pinia";
export const usePlannerStore = defineStore("planner",{
    state:() =>({
        planner:{
            monday: null,
            tuesday: null,
            wednesday: null,
            thursday: null,
            friday: null,
            saturday: null,
            sunday: null,
        }
    }),
    actions: {
        addMeal(day,meal){
            this.planner[day]=meal;
        }
    }
})