<template>
    <div class="h-screen w-screen flex items-center justify-center">
        <div class="border p-8 text-center ">
            <div class="font-bold pb-4"> Login System</div>
            <el-form
            ref="ruleFormRef"
            label-position="top"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm  flex flex-col items-center"
            >
                <el-form-item label="Email/Username " prop="email">
                    <el-input v-model.number="ruleForm.email" />
                </el-form-item>

                <el-form-item label="Password" prop="password">
                    <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item class="text-center">
                    <el-button type="primary" @click="submitForm(ruleFormRef)"
                    >Login</el-button
                    >
                </el-form-item>
                
            
            </el-form>
        </div>
    </div>
</template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  
  const ruleFormRef = ref<FormInstance>()
  
  
  const ruleForm = reactive({
    password: '',
    email: '',
  })
  
  const rules = reactive<FormRules<typeof ruleForm>>({
    password: [{ required:true, trigger: 'blur' }],
    email: [{ required:true, trigger: 'blur' }],
  })
  
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
         //call api login
      } else {
        //message error
        return false
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>
  