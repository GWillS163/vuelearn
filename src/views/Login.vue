<template>
  <div class="login-container">
  <el-form :model="loginForm" >
    <h3 class="title">登录</h3>
    <el-form-item>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-button" @click="login">Login</el-button>
    </el-form-item>
  </el-form>

  </div>
</template>
<script>
</script>

<style lang="less" scoped>
.login-container {
  width: 350px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 35px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin:  180px auto;

  h3{
    text-align: center;
    margin-bottom: 20px;
    color: #505050;
  }
  .login-button {
    width: 100%;
  }
}
</style>