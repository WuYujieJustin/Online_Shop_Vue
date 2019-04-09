<template>
  <div class="product">
    <product-card v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import Service from "@/api/Service.js";

export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductCard
  },
  created() {
    Service.getProducts() // <-----
      .then(response => {
        this.products = response.data; // For now, logs out the response
      })
      .catch(error => {
        console.log("There was an error:", error.response); // Logs out the error
      });
  }
};
</script>


<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>