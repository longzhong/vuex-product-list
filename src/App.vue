<template>
  <div id="app">
    <ProductListOne/>
    <ProductListTwo/>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'app',
  components: {
    ProductListOne,
    ProductListTwo,
  }
}
</script>

<style>
body{
    font-family: 'Ubuntu';
    color: #555;
}
</style>
