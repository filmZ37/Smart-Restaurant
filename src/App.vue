<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/billing">Payment</RouterLink>
      </nav>
    </div>

  <RouterView />
</template>

<style>


a{
  text-decoration: none;
  color: rgb(107, 209, 59);
}


nav {
  position: fixed;
  right: 0 ;
  font-size: 1rem;
  text-align: right;
  margin: 2.6rem 1rem;

  z-index: 1;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid rgb(0, 0, 0);
}

nav a:first-of-type {
  border: 0;
}

</style>
