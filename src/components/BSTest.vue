# Github: GWillS163
# User: 駿清清 
# Date: 23/10/2022 
# Time: 16:38
<template>
<!--  generate the card of BootstrapVue3-->
  <b-card
    title="BootstrapVue3"
    img-src="https://bootstrap-vue.org/docs/assets/img/bootstrap-vue-logo.png"
    img-alt="BootstrapVue3"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      <b-button variant="primary">Notifications <b-badge variant="light">4</b-badge></b-button>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
    name: 'BSTest',
    props: {
      msg: String,
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
/*@import url('https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.1.1/css/bootstrap.min.css');*/
/*@import url('https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.1.1/css/bootstrap-theme.min.css');*/

</style>