<template>
  <div>
    <router-link :to="{ name: 'productdetail', params: { id: product.id }  }">
      <h4>{{product.title}} {{product.price}}</h4>
    </router-link>

    <hr>
  </div>
</template>

<script>
export default {
  props:{
    product:Object
  }
};
</script>

<style>
</style>
