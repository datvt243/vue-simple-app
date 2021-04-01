<template lang="pug">
  .body-container.pt-5.pb-4
    HeaderDefault
    main.main-container
      slot(name="content")
    FooterDefault
</template>

<script>
import HeaderDefault from "@/components/header/HeaderDefault.vue";
import FooterDefault from "@/components/footer/FooterDefault.vue";
export default {
  components: {
    HeaderDefault,
    FooterDefault,
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scope>
.body-container
  display: flex
  flex-direction: column
  min-height: 100vh
  .main-container
    flex-grow: 1
</style>
