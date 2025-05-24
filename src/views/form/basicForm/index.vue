<template>
    <div class="card content-box">
        <el-form :model="formData" label-width="140px">
            <el-form-item label="Activity name :">
                <el-input v-model="formData.name" />
            </el-form-item>
            <el-form-item label="Activity zone :">
                <el-select v-model="formData.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time :">
                <el-date-picker v-model="formData.date1" type="date" placeholder="Pick a date" />
                <el-col :span="1" class="text-center">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-time-picker v-model="formData.date2" placeholder="Pick a time" />
            </el-form-item>
            <el-form-item label="Instant delivery :">
                <el-switch v-model="formData.delivery" />
            </el-form-item>
            <el-form-item label="Activity type :">
                <el-checkbox-group v-model="formData.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources :">
                <el-radio-group v-model="formData.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form :">
                <el-input v-model="formData.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"> Create </el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" min-width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick"> Detail </el-button>
                    <el-button link type="primary" size="small" @click="btn_edit">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 弹框 -->
        <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item label="Activity name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="Activity zone">
                    <el-select v-model="form.region" placeholder="please select your zone">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts" name="basicForm">
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue'

// do not use same name with ref
const formData = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})

const onSubmit = () => {
    ElMessage.success('提交的数据为 : ' + JSON.stringify(formData))
}

// 表格数据
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home'
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office'
    }
]

// 表格编辑
const btn_edit = () => {
    ElMessage.success('编辑')
}

// 弹框数据
const dialogVisible = ref(false)
const handleClick = () => {
    dialogVisible.value = true
}

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
const form = reactive({
    name: '',
    region: ''
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
