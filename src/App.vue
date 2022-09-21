<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <nav class="navbar bg-light">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
Pokemon App
    </router-link>
<div>
        <router-link class="btn btn-outline-primary me-2" to="/"  active-class="active">Home</router-link >
        <router-link class="btn btn-outline-primary"  to="/pokemons"  active-class="active">Pokemons</router-link >
      </div>
      </div>
      </nav>
      <div class="container text-center">
      <RouterView/>
      </div>

  


    
</template>

