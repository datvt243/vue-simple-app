<template lang="pug">
  header.header-container
    .container
      nav.nav-primary
        .brand-inner
          span.logo
            img(:alt="$store.state.title" src="@/assets/logo.png")
          span.brand {{ $store.state.title }}
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="sass" scope></style>
