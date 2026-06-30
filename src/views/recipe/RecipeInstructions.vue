<template >
    <div>
        <div class="flex justify-center" v-if="loading">
        </div>
        <div v-if="error">
        </div>
        <div class="max-h-[80vh] overflow-y-auto p-6 bg-white rounded-lg" v-if="instructions">
            <h1 class="text-lg font-bold mb-4 text-gray-800">{{ instructions.strMeal }}</h1>
            <h2 class=" mb-4 text-gray-800">Instructions</h2>
            <p class="whitespace-pre-line text-sm leading-6 text-gray-700">
                {{ instructions.strInstructions }}
            </p>
        </div>
    </div>
</template>
<script>
import Loading from '../../components/Loading.vue';
import Error from '../../components/Error.vue'
export default {
    name: 'RecipeInstructions',
    components: {Loading,Error},
    data(){
        return{
            instructions:null,
            loading:false,
            error:false,
        }
    },
    watch:{
        '$route.params.meal':{
            immediate : true,
            handler(){
                this.featchInstruction();
            }
        }
    },
    methods: {
        async featchInstruction(){
            this.loading = true;
            const id = this.$route.params.meal;
            try{
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) {
                    this.error = true;
                    throw new Error(`Response status ${response.status}`);
                }
                const data = await response.json();
                this.instructions = data.meals[0];
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
