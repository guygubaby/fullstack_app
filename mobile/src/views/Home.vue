<template>
  <div class="home">
    <van-button @click="goRegister" type="primary" size="small">go</van-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    goRegister() {
      this.$router.push('register');
    },
  },
};
</script>
