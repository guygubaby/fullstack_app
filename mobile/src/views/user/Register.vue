<template>
  <div>
    <header style="text-align:center;margin:2rem 0;">注册</header>
    <section>
      <van-cell-group>
        <van-field
          v-model="form.email"
          required
          clearable
          label="邮箱"
          right-icon="question-o"
          placeholder="请输入邮箱"
          @click-right-icon="$toast('邮箱用于保存用户数据')"
        />
        <van-field
          v-model="form.nick"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('用户名用来登录')"
        />
        <van-field v-model="form.pwd" type="password" label="密码" placeholder="请输入密码" required/>
      </van-cell-group>
      <section class="register-opts">
        <van-button @click="login" type="danger" size="small">登录</van-button>
        <van-button @click="register" type="info" size="small">注册</van-button>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        nick: null,
        pwd: null,
        email: null,
      },
    };
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    register() {
      this.$api.user
        .register(this.form)
        .then((res) => {
          const { code } = res;
          this.$toast(res.msg);

          if (code === 0) {
            this.$router.push('/userList');
          }
        })
        .catch((e) => {
          this.$toast(e);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.register-opts {
  display: flex;
  justify-content: space-around;
  margin: 2rem;
}
</style>
