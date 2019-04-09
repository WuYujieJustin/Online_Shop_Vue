<template>
  <div class="product-detail">
    <h1>{{product.detail}}</h1>
    <p>avaibliable {{product.inventory}} </p>
    <el-button type="primary" plain>buy</el-button>
    <el-button type="primary" plain>add to cart</el-button>
  </div>
</template>

<script>
import Service from "@/api/Service.js";

export default {
  props: ["id"],
  data() {
    return {
      product: {}
    };
  },
  created() {
    Service.getProduct(this.id) // <--- Send the prop id to our EventService
      .then(response => {
        this.product = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>