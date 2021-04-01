<template lang="pug">
  .modal
    .modal-control
      button.trans.btn(
        type="button" 
        :class="[classButton, modelTitle === '' || modelContent === '' ? 'disabled' : '']" 
        @click="showModal = true"
      ) {{ modelTitleBtn }}
    transition(name="dropdown")
      .modal-dialog(v-if="showModal")
        .modal-content(:class="classModal")
          .modal-header
            p.modal-title {{ modelTitle }}
            span.icon.trans(@click="closeModal") &#10006;
          .modal-body
            .clearfix(v-html="modelContent")
          .modal-footer
            .row.justify-content-end
              .col-auto
                button.btn(type="button" @click="closeModal") Close
        .modal-over(@click="closeModal" v-if="showModal")
</template>

<script>
export default {
  name: "Modal",
  props: {
    modelTitleBtn: {
      type: String,
      default: "Model 01",
    },
    modelTitle: {
      type: String,
      default: "",
    },
    modelContent: {
      type: String,
      default: "",
    },
    classButton: {
      type: String,
      default: "",
    },
    classModal: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  // created() {
  //   window.addEventListener("click", this.close);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("click", this.close);
  // },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    // close(e) {
    //   if (!this.$el.contains(e.target)) {
    //     this.showModal = false;
    //   }
    // },
  },
};
</script>

<style lang="sass" scoped>
.float
  &-left
    float: left
</style>
