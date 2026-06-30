<template>
    <div>
        <h1>Category</h1>
        <div>
            <ul class=" grid grid-cols-3 justify-center gap-10 p-6 rounded-xl">
                <li class="card badge" v-for="food in foods" :key="food.idCategory">
                    <router-link :to="`/recipe/${food.strCategory}`">
                        <img class="recipe-image" :src="food.strCategoryThumb" :alt="food.strCategory">
                    </router-link>
                    <h3>{{ food.strCategory }}</h3>
                    <p class="max-h-32 overflow-y-auto text-gray-600">{{ food.strCategoryDescription }}</p>

                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    name: 'HomeView',
    data(){
        return{
            foods: [],
            loading: false,
            error : false,
        }
    },
    async mounted(){
        this.loading = true;
        try{
            const response  = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            if(!response.ok){
                this.error = true
                throw new Error (`Response status: ${response.status}`)
            }
            const data = await response.json();
            this.foods = data.categories;
        }catch(error){
            console.log(error);
            this.error = true
        }finally {
            this.loading = false;
        }
        }
    }

</script>
