<template>
    <div class="">
        <div class="flex space-x-2 items-center justify-between m-2">
            <div>
                <el-input v-model="inputSearch" @change="handleSerch" class="w-[100px] " placeholder="Type something">
                    <template #prefix>
                        <el-icon class="el-input__icon">
                            <search />
                        </el-icon>
                    </template>
                </el-input>
            </div>
            <el-button type="primary" @click="openFormCreate">Add Product</el-button>
        </div>
        <el-table :data="tableData" style="width: 100% ; height: 500px;" stripe fit v-loading="loading">
            <el-table-column prop="code" label="Code" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="description" label="Description" />
            <el-table-column prop="cost" label="Cost" />
            <el-table-column fixed="right" label="Operations" width="200">
                <template #default="prop">
                    <el-button link type="primary" size="small">Detail</el-button>
                    <el-button link type="primary" size="small" @click="editForm(prop.row.id)">Edit</el-button>
                    <el-button link type="danger" size="small"  @click="deleteEvent(prop.row.id)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="demo-pagination-block flex items-center justify-center m-2">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" 
                :page-sizes="[100, 200, 300, 400]" small="true" :background="background"
                layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>
    </div>

    <!-- Dialog  -->
    <el-dialog v-model="dialogVisible" title="Product" width="30%">
        <div>
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" label-position="top"
                class="demo-ruleForm">
                <el-form-item label="Code" prop="code">
                    <el-input v-model="ruleForm.code" type="text" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Name" prop="name">
                    <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
                </el-form-item>
            <div class="flex space-x-4 w-full">
                <el-form-item label="Category" prop="category_ref_id" class="w-1/2">
                    <el-select-v2
                        v-model="ruleForm.category_ref_id"
                        :options="options"
                        placeholder="Please select"
                        class="w-full"
                        allow-create
                        filterable
                        clearable
                    />
                </el-form-item>

                <el-form-item label="Cost" prop="cost" class="w-1/2">
                    <el-input v-model.number="ruleForm.cost" class="w-full"/>
                </el-form-item>
            </div>
                <el-form-item label="Description" prop="description">
                    <el-input v-model="ruleForm.description" type="textarea" />
                </el-form-item>
        
            </el-form>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="resetForm(ruleFormRef)">Cancel</el-button>
                <el-button type="primary" @click="submitForm(ruleFormRef)"> Save</el-button>
            </span>
        </template>
    </el-dialog>
    <!-- Dialog  -->
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from "../../stores/AuthState";
import { storeToRefs } from "pinia";

const API = ref('https://puokschool.qrmms.com/api/v1');
const { user, Authorization } = storeToRefs(useAuthStore());

const inputSearch = ref('');
const tableData = ref([]);

const currentPage = ref(1)
const pageSize = ref(100)
const total = ref(0)
const background = ref(false)
const sortBy = ref('name')
const orderBy = ref('ASC')
const loading = ref(false)

const loadData = () => {
    loading.value = true
    fetch(`${API.value}/product/get?page=${currentPage.value}&per_page=${pageSize.value}&sort_by=${sortBy.value}&order_by=${orderBy.value}&search=${inputSearch.value}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-TOKEN',
            'Authorization': Authorization.value
        },
    },)
    .then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
        }
        return response.json();
    }).then(json => {
        tableData.value = json.data.data;
        currentPage.value = json.data.current_page;
        pageSize.value = json.data.per_page;
        total.value = json.data.total;
        loading.value = false;

        return json.data;
    }).catch(err => {
        
        loading.value = false;
        return err;
    })
}
const handleSizeChange = (val: number) => {
    pageSize.value = val;
    loadData();
}
const handleCurrentChange = (val: number) => {
    currentPage.value = val;
    loadData();
}

const handleSerch = () => {
    loadData();
}

loadData();


//Form
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref(false)
const ruleForm = ref({
    id: null,
    code: null,
    name: null,
    description: null,
    category_ref_id: null,
    image: null,
    cost: null,
});
const rules = reactive<FormRules<typeof ruleForm>>({
    code: [{ required: true , trigger: 'blur' }],
    name: [{ required: true , trigger: 'blur' }],
});
const resetForm = (formEl?: FormInstance | undefined) => {
  if (!formEl) return
    formEl.resetFields()
    dialogVisible.value = false

}
const isCreate = ref(true);
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))

const openFormCreate = () => {
    ruleForm.value.id = null
    ruleForm.value.code = null
    ruleForm.value.name = null
    ruleForm.value.description = null
    ruleForm.value.category_ref_id = null
    ruleForm.value.image = null
    ruleForm.value.cost = null
    isCreate.value = true;
    dialogVisible.value = true
}
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        let endpoint = '';
        if (isCreate.value==true && ruleForm.value.id==null) {
            endpoint = 'create';
        } else {
            endpoint = 'update/'+ruleForm.value.id ;
        }
        if (valid) {
            fetch(API.value + '/product/'+ endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-TOKEN',
                    'Authorization': Authorization.value
                },
                body: JSON.stringify(ruleForm.value)
            },)
            .then(response => {
                if (!response.ok) {
                    const error = new Error(response.statusText);
                    throw error;
                }
                return response.json();
            }).then(json => {
                resetForm();
                loadData();
                dialogVisible.value = false

            })
            .catch(err => {

            })
        }
    })
    
}

const editForm = (id: number) => {
    fetch(API.value + '/product/edit/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-TOKEN',
            'Authorization': Authorization.value
        },
    },)
    .then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
        }
        return response.json();
    }).then(json => {
        ruleForm.value.id = json.data.id
        ruleForm.value.code = json.data.code
        ruleForm.value.name = json.data.name
        ruleForm.value.description = json.data.description
        ruleForm.value.category_ref_id = json.data.category_ref_id
        ruleForm.value.image = json.data.image
        ruleForm.value.cost = json.data.cost
        
        dialogVisible.value = true
    })
    .catch(err => {

    })
}
const deleteEvent = (id: number) => {
    fetch(API.value + '/product/delete/'+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-TOKEN',
            'Authorization': Authorization.value
        },
    },)
    .then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
        }
        return response.json();
    }).then(json => {
        loadData();

    })
    .catch(err => {

    })
}




</script>

