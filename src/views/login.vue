<template>
<div class="login_container">
  <div class="login_main">
    <div class="login_content">
      <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
      >
        <a-form-item label="Activity name" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="Sub name" :name="['sub', 'name']">
          <a-input v-model:value="formState.sub.name" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">Create</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue';

export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      name: undefined,
      sub: { name: undefined },
    });
    const rules = {
      name: {
        required: true,
        message: 'Please input name',
      },
      sub: {
        name: [
          {
            required: true,
            message: 'Please input name',
          },
        ],
      },
    };
    const onSubmit = () => {
      formRef.value
          .validate()
          .then(() => {
            console.log('values', formState, toRaw(formState));
          })
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>

<style scoped>
.login_container{
  margin: 0px;
  padding: 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_main{
  width: 400px;
  height: 300px;
  background-color: #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_content{
  width: 300px;
  height: 200px;
  background-color: mediumpurple;
  border-radius: 20px;
}
</style>