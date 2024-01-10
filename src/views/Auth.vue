<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="border p-8 text-center ">
      <div class="font-bold pb-4"> Login System</div>
      <el-form ref="ruleFormRef" label-position="top" :model="ruleForm" status-icon :rules="rules" label-width="220px"
        class="demo-ruleForm  flex flex-col items-center">
        <el-form-item label="Email/Username " prop="email" >
          <el-input v-model="ruleForm.email"  style="width: 300px"/>
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off"  style="width: 300px"/>
        </el-form-item>
        <el-form-item class="text-center">
          <el-button type="primary" @click="submitForm(ruleFormRef)">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useAuthStore } from "../stores/AuthState";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from 'vue-router'

var route = useRoute();
const router = useRouter()


const { isLogin,token, user, role } = storeToRefs(useAuthStore()); 

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  password: 'dev123',
  email: 'admin@gmail.com',
})
const rules = reactive<FormRules<typeof ruleForm>>({
  password: [{ required: true, trigger: 'blur' }],
  email: [{ required: true, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      return   fetch('http://127.0.0.1:8000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-TOKEN',
        },
        body: JSON.stringify({
          email: 'admin@gmail.com',
          password: 'dev123'
        })
      },)
        .then(response => {
          if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
          }
          return response.json();
        })
        .then(json => {
          isLogin.value = true
          token.value = json.token
          user.value = json.user
          role.value = json.user.roles

          window.localStorage.setItem('isLogin', JSON.stringify(isLogin.value))
          window.localStorage.setItem('token', JSON.stringify(token.value))
          window.localStorage.setItem('user', JSON.stringify(user.value))
          window.localStorage.setItem('role', JSON.stringify(role.value))

          router.push({path: '/'})
        })
        .catch(err => {
          window.localStorage.clear();
          resetForm();
        })
    } else {
      //message error
      return false
    }
  })
}

const resetForm = (formEl?: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
  