<template lang="pug">
  section(v-scroll="onScroll")
    v-fab-transition
      v-btn(fab fixed bottom right color="secondary" v-show="offsetTop > boundary" @click="$vuetify.goTo(0)")
        v-icon keyboard_arrow_up
</template>

<script>
export default {
  props: {
    boundary: {
      type: Number,
      default: 120
    }
  },
  data() {
    return {
      offsetTop: 0
    }
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>
