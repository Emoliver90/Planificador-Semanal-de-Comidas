<template>
    <div>
        <nav class="flex justify-evenly">
            <router-link to ="/">Category</router-link>
            <router-link to ="/search/:id">SEARCH</router-link>
            <router-link to="/planner">PLANNER</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name : 'NavBAr',
    
}
</script>
