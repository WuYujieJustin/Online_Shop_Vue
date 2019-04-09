<template>
  <form @submit.prevent="addProduct">
    <div>
      <label for="id">id</label>
      <input v-model="product.id">
    </div>
    <div>
      <label for="title">title</label>
      <input v-model="product.title">
    </div>
    <div>
      <label for="title">price</label>
      <input v-model="product.price">
    </div>
    <div>
      <label for="title">detail</label>
      <input v-model="product.detail">
    </div>
    <div>
      <label for="title">inventory</label>
      <input v-model="product.inventory">
    </div>
    <div>
      <label for="title">category</label>
      <input v-model="product.category">
    </div>

    <input type="submit" value="create">
  </form>
</template>

<script>
export default {
  data() {
    return this.createFreshProductObject();
  },
  methods: {
    addProduct() {
      this.$store
        .dispatch("addProduct", this.product)
        .then(() => {
          this.$router.push({
            name: "productdetail",
            params: { id: this.product.id }
          });
          this.product = this.createFreshProductObject();
        })
        .catch(() => {
          console.log("There was a problem adding product");
        });
    },
    createFreshProductObject() {
      return {
        product: {
          id: 1,
          title: "",
          price: "",
          detail: "",
          inventory: "",
          category: ""
        }
      };
    }
  }
};
</script>
