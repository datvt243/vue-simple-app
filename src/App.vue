<template lang="pug">
  #app
    LayoutDefault
      .container.pt-5(slot="content")
        .row
          .col-12.col-md-6
            ContentInner
          .col-12.col-md-6
            ContentInner
</template>

<script>
import LayoutDefault from "./layouts/LayoutDefault.vue";
import ContentInner from "./components/ContentInner.vue";

export default {
  name: "App",
  components: {
    LayoutDefault,
    ContentInner,
  },
};
</script>

<style></style>
