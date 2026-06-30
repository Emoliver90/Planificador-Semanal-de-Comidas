<template>
  <div>
    <h1>PLANIFICADOR SEMANAL DE COMIDAS</h1>
    <div class="flex justify-center" v-if="loading">
        </div>
        <div v-if="error">
        </div>
    <nav>
      <NavBar/>
    </nav>
    
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import { applyTheme } from './utils/theme.js';

export default {
  name : 'App',
  components: {NavBar},
  data(){
    return{

    }
  },
  mounted(){
    applyTheme();
  }
}
</script>
