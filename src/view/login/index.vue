<template>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名：">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码：">
    <el-input v-model="formLabelAlign.password"></el-input>
  </el-form-item>
  <el-form-item label="验证码：">
    <el-input v-model="formLabelAlign.verification"></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
    <el-button @click="resetForm('formLabelAlign')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                password: '',
                verification: ''
            }        
        }
    },
    methods: {
        submitForm (data) {
            this.$router.push('/home')    
        },
        resetForm (data) {

        }
    },
}
</script>

<style lang="">
    
</style>