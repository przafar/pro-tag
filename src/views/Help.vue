<template>
  <div>
    <div class="contaner mx-auto">
      <div class="delivery text-gray-900">
        <div class="navbar">
          <Header/>
        </div>
        <div class="grid-cols-2 container mx-auto px-4 xl:px-0 lg:px-0 md:px-4">
          <div class="col-span-2 pt-40">
            <h3 class="text-center text-3xl">Часто задаваемые вопросы</h3>
            <div v-for="(post, index) in questions" :key="index" class="mt-8">
              <div class="flex items-center justify-between border-t-2 border-gray-800 pt-0" >
                <div class="w-full cursor-pointer" @click="postUserId = index; isShow = !isShow">
                  <h5 class="text-xl mt-8">{{ post.question }}</h5>
                </div>
                <div @click="toggle(index)" class="justify-end mt-8">
                  <i v-if="!(isShow && postUserId == index)" @click="postUserId = index; isShow = !isShow" class="fas cursor-pointer fa-plus text-xl"></i>
                  <i @click="postUserId = index; isShow = false" v-else class="fas cursor-pointer fa-minus text-xl"></i>
                </div>
              </div>
              <div v-show="isShow && postUserId == index" class="pt-5">
                <p>{{ post.answer }}</p>
              </div>
            </div>

          </div>
        </div>
        <div class="mt-24">
          <Footer/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  metaInfo: {
    title: `Help`
  },
  data: () => ({
    isShow: false,
    postUserId: null,


  }), 
  async mounted() {
    this.posts = await this.$store.dispatch('fetchInfo')
    console.log(this.postUserId)

  },
  methods: {
    toggle(id) {
      console.log(this.isShow && this.postUserId == id)
    }
  },
  computed: {
    questions() {
      return this.$store.state.product.questions
    },
  },
  components: {
    Header,
    Footer,
  }
}
</script>
<style scoped>
  .delivery {
    background: #fafafa;
  }
  .link {
    margin-top: 30px;
  }
  .link a {
    color: #009EFA;
    font-weight: bold;
  }
</style>