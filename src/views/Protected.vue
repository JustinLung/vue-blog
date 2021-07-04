<template>
  <h1>Hello {{ this.username }}!</h1>
</template>

<script>
export default {
    computed: {
        username: function() {
            return this.$store.getters.getUsername
        }
    }
}
</script>

<style>

</style>