<template>
  <div class="user-header">
    <el-button type="primary" @click="handleAdd"> + 新增 </el-button>
    <el-form :inline="true" :model="formInline" >
      <el-form-item label="请输入">
        <el-input v-model="formInline.keyword" placeholder="用户名" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :data="list" style="width: 100%; height: 500px" >
    <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :width="item.width ? item.width : 'auto'"

    />

    <el-table-column fixed="right" label="操作" min-width="180" >

      <template #default="scope">
        <el-button link type="primary" size="small"
                   @click="handleEdit(scope.row)">编辑</el-button>
        <el-button link type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="config.total"
      class="pager mt-4"
      @current-change="changePage($event)"
  />
  </div>
  <el-dialog
    v-model="dialogVisible"
    :title="action === 'add' ? '用户新增' : '用户编辑'"
    width="45%"
    :before-close="handleClose"
  >
    <el-form :inline="true" :model="formUser" ref="userForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name"
           :rules="[{'required': true, 'message': '请输入姓名', 'trigger': 'blur'}]">
            <el-input v-model="formUser.name" placeholder="请输入姓名"/>
          </el-form-item>
          <el-form-item label="性别" prop="sex"
          :rules="[{'required': true, 'message': '请选择', 'trigger': 'blur'}]"
          >
            <el-select v-model="formUser.sex" placeholder="请选择">
              <el-option label="男" value="0"/>
              <el-option label="女" value="1"/>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="年龄" prop="age"
          :rules="[{'required': true, 'message': '请输入数字', 'trigger': 'blur'},
          {'type': 'number', 'message': '年龄必须是数字'}]"
          >
            <el-input v-model.number="formUser.age" placeholder="请输入年龄"/>
          </el-form-item>

          <el-form-item  label="出生日期" prop="birth"
          :rules="[{'required': true, 'message': '请选择' },
          ]"
          >
            <el-date-picker
                  v-model="formUser.birth"
                  label="出生日期"
                  placeholder="选择日期"
                  style="width: 100%"
                />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="地址" prop="addr">
        <el-input v-model="formUser.addr" placeholder="请输入地址"  type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>


<script>
import {defineComponent, getCurrentInstance, onMounted, reactive, ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";


export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "User",
  setup () {
    const {proxy} = getCurrentInstance();
    const list = ref([]);
    const tableLabel = reactive([
      {
        prop: "name",
        label: "姓名",
      },
      {
        prop: "age",
        label: "年龄",
      },
      {
        prop: "sexLabel",
        label: "性别",
      },
      {
        prop: "birth",
        label: "出生日期",
        width: 200,
      },
      {
        prop: "addr",
        label: "地址",
        width: 320,
      },
    ]);
    const config = reactive({
      total: 0,
      page: 1,
      name: "",
    })
    onMounted(() => {
      getuserData(config)
    })
    const getuserData = async(config) => {
      let res = await proxy.$api.getUserData(config);
      // console.log(res);
      config.total = res.count;

      list.value = res.list.map((item) => {
        item.sexLabel = item.sex === 1 ? "男" : "女";
        return item;
      })
    }

    const changePage = (page) => {
      console.log(page);
      config.page = page;
      getuserData(config);
    }

    const formInline = reactive({
      keyword: "",
    })

    const handleSearch = () => {
      config.name = formInline.keyword;
      getuserData(config)
    }

    const dialogVisible = ref(false)

    const handleClose = (done) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}
    const formUser = reactive({
      name:"",
      sex: "",
      age: "",
      birth: "",
      addr: "",
    })
    const timeFormat = (time) =>{
      let date = new Date(time);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      function add(m) {
        return m < 10 ? '0' + m : m
      }
      return year + '-' + add(month) + '-' + add(day);
    }
    const handleCancel = () => {
      dialogVisible.value = false;
      proxy.$refs.userForm.resetFields();
    }
    const onSubmit = async () => {
      // 提交前校验1gfd
      try {
        await proxy.$refs.userForm.validate();
      } catch (error) {
        ElMessage({
          showClose: true,
          message: "请填写完整正确的信息",
          type: 'error',
        });
        return false;
      }
      // 提交前校验2 - 视频中方法
     // proxy.$refs.userForm.validate( async (validate) => {
     //    if (validate) {
     //
     //    }
     //  });
      if (action.value === "add"){
        formUser.birth = timeFormat(formUser.birth);
        // let res = await proxy.$api.getUserData(config);
        let res = await proxy.$api.addUser(formUser);
        console.log(res);
        if (res){
          proxy.$refs.userForm.resetFields();
          dialogVisible.value = false;
          await getuserData(config);
        }
      }else{
        formUser.sex === "男" ? (formUser.sex = 1) : (formUser.sex = 0);
        formUser.birth = timeFormat(formUser.birth);
        // let res = await proxy.$api.getUserData(config);
        console.log("formUser",formUser);
        let res = await proxy.$api.editUser(formUser);
        console.log(res);
        if (res){
          proxy.$refs.userForm.resetFields();
          dialogVisible.value = false;
          await getuserData(config);
        }
      }
    }

    // 区分是新增还是编辑
    const action = ref("add");
    const handleAdd = () => {
      action.value = "add";
      dialogVisible.value = true;
    }
    const handleEdit = (row) => {
      // console.log(row)
      action.value = "edit";
      dialogVisible.value = true;
      row.sex === 1 ? (row.sex = '男') : (row.sex = "女");
      proxy.$nextTick(() => {

        Object.assign(formUser, row);
      })
    }
    return {
      list,
      tableLabel,
      config,
      changePage,
      formInline,
      handleSearch,
      dialogVisible,
      handleClose,
      formUser,
      onSubmit,
      handleCancel,
      action,
      handleEdit,
      handleAdd,
    }
  }
})
</script>
<style lang="less" scoped>
.table{
  position: relative;
  height: 520px;
  .pager {
    position: absolute;
    right: 0;
    bottom: -20px;
  }
}

.user-header {
  display: flex;
  justify-content: space-between;
}

</style>

