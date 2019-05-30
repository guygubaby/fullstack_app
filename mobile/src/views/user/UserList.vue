<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in userList" :key="item._id" :title="item.nick"/>
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      this.getAllUsers();
    },
    getAllUsers() {
      this.loading = true;
      this.$api.user
        .all()
        .then((res) => {
          const { data } = res;
          this.userList = data.users;
        })
        .catch((e) => {
          console.log('e: ', e);
        })
        .finally(() => {
          this.loading = false;
          this.finished = true;
        });
    },
  },
  created() {
    this.getAllUsers();
  },
};
</script>
<style lang="scss" scoped>
</style>
