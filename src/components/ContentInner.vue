<template lang="pug">
  .content-inner
    .content-body
      .form
        .form-row.mb-4
          label.form-label Tiêu đề (*)  
          input.form-control(
            type="text"
            placeholder="Nhập tiêu đề"
            v-model="title"
          )
        .form-row
          label.form-label Nội dung (*)
          textarea.form-control(
            placeholder="Nhập nội dung"
            v-model="content"
          )
    .content-footer
      .d-flex
        .column.pr-4
          Modal(
            modelTitleBtn="Modal 01" 
            classButton="btn-success"
            classModal="is-success"
            :modelTitle="title"
            :modelContent="content"
          )
        .column.pr-4
          Modal(
            modelTitleBtn="Modal 02" 
            classButton="btn-info"
            classModal="is-info"
            :modelTitle="title"
            :modelContent="content"
          )
        .column.pr-0
          Modal(
            modelTitleBtn="Modal 03" 
            classButton="btn-warning" 
            classModal="is-warning"
            :modelTitle="title"
            :modelContent="content"
          )
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
};
</script>

<style lang="sass" scope>
.content

  &-inner
    border: 2px solid #2c3e50
      radius: 10px
    padding: 30px
    .form-control
      background-color: #2c3e50
    textarea.form-control
      min-height: 200px
      font-size: 18px

  &-footer
    margin-top: 20px
</style>
