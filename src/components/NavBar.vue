<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link :to="{ name: 'product-list'}">Product</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'user', params: { username: 'admin' }  }">User</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{ name: 'add'}">add</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  }
};
</script>



