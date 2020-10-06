<template>
  <div id="app">
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        color="#00D2FC"
        loader="dots"
        background="#fff"
        opacity="1"
        :is-full-page="fullPage"></loading>
    </div>
    <router-view/>
  </div>
</template>
<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        data() {
            return {
                isLoading: true,
                fullPage: true
            }
        },
        mounted() {
          setTimeout(() => {
            this.isLoading = false
          }, 2200)
        },
        components: {
            Loading
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                },5000)
            },
            onCancel() {
              console.log('User cancelled the loader.')
            }
        }
    }
</script>
<style scoped>
 
</style>
