<template>
  <div class="back-color">
    <div :style="{ backgroundColor: user.profile.back }" class="h-48 w-full token-color mx-auto">
      <div class="container">
        <a href="/" class="block w-12 ml-4 pt-4">
          <svg width="45" height="48" xmlns="http://www.w3.org/2000/svg">
            <g>
              <g transform="matrix(0.020405896916177363,0,0,-0.019514957865699397,0.5058253301220254,162.44456588265285) " id="e79jovkio88j2">
              <path fill="rgb(255,255,255)" d="m798.30621,8173.82731c-145,-83 -343,-197 -439,-254c-96,-56 -202,-117 -234,-135c-32,-18 -74,-46 -92,-63l-34,-29l0,-602l0,-602l27,-25c42,-39 120,-80 137,-73c14,6 16,70 16,613l0,606l208,119c114,66 308,178 432,249c124,71 235,134 246,139c23,11 28,8 294,-147c63,-37 229,-132 368,-212l252,-145l0,-522l0,-521l-148,-85c-81,-46 -198,-114 -260,-150c-62,-36 -121,-69 -130,-75c-10,-5 -88,-50 -174,-100c-100,-57 -162,-99 -172,-116c-22,-37 -23,-167 -1,-176c9,-3 64,23 133,62c601,345 888,514 908,534l24,24l0,603l0,603l-22,25c-13,13 -99,68 -193,122c-93,53 -228,131 -300,172c-518,300 -540,312 -565,312c-9,0 -135,-68 -281,-151z" id="e79jovkio88j3"/>
              <path fill="rgb(255,255,255)" d="m860.15596,7812.82731c-104,-61 -253,-146 -330,-191c-77,-44 -150,-92 -162,-106l-23,-26l0,-592c0,-435 3,-599 12,-618c7,-15 38,-41 75,-62c52,-28 66,-33 78,-23c13,11 15,96 15,614l0,602l128,74c70,40 192,111 271,157c79,45 148,83 154,83c5,0 89,-46 186,-102c97,-56 220,-127 274,-157l97,-56l0,-317l-1,-318l-97,-57c-53,-32 -118,-69 -143,-83c-187,-103 -289,-168 -303,-191c-22,-37 -22,-167 -1,-176c9,-3 69,25 143,68c70,40 217,124 327,187c110,63 211,126 225,139l25,23l2,403c3,377 2,403 -16,424c-14,17 -278,175 -562,336c-24,13 -64,36 -89,51c-25,14 -56,26 -70,25c-14,0 -110,-50 -215,-111z" id="e79jovkio88j4"/>
              <path fill="rgb(255,255,255)" d="m899.30621,7398.82731c-80,-47 -151,-92 -157,-101c-10,-13 -13,-153 -13,-623l0,-606l28,-26c65,-60 134,-84 146,-52c3,9 6,189 6,401l0,384l74,-40c40,-23 86,-41 100,-41c32,0 300,150 334,187c21,23 22,31 22,208l0,185l-27,29c-16,16 -53,42 -83,59c-30,16 -90,50 -133,75c-111,66 -120,65 -297,-39zm274,-155l86,-50l0,-104l0,-103l-87,-49c-47,-26 -91,-47 -96,-45c-5,1 -45,23 -88,48l-80,46l3,106l3,105l80,48c44,27 83,48 87,49c3,0 45,-23 92,-51z" id="e79jovkio88j5"/>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="container member mx-auto px-5 pb-20">
        <div class="grid grid-cols-8 gap-2 shadow-2xl bg-white round-i px-3 pt-4 pb-8 " v-if="user.profile.name.length > 1">
          <div class="col-span-3 flex">
            <img class="object-cover img-mobile xl:h-32 lg:h-32 xl:w-32 lg:w-32 w-24 h-24 rounded-full bg-gray-500" :src="user.profile.photo" alt="">
          </div>
          <div class="col-span-5 pt-3 text-gray-800">
            <p v-if="user.profile.name.length > 3" class="font-semibold text-2xl">{{ user.profile.name }}</p>
            <p class="text-xl font-semibold">{{ user.profile.userInfo }}</p>
          </div>
          <div v-if="user.profile.instagram.length > 3" class="col-span-8 mx-auto mt-6">
            <a :href="('https://instagram.com/' + user.profile.instagram)" class="flex shadow-2xl mt-1 text-2xl w-56 h-16 py-3 px-5 round-i instagram text-white">
              <i class="fab fa-instagram pt-2"></i>
              <p class="mx-auto">Instagram</p>
            </a>
          </div>
          <div v-if="user.profile.telegram.length > 3" class="col-span-8 mx-auto">
            <a :href="('https://t.me/' + user.profile.telegram)" class="flex shadow-2xl text-2xl h-16 py-3 mt-1 px-5 telegram text-white">
              <i class="fab fa-telegram-plane pt-2"></i>
              <p class="mx-auto">Telegram</p>
            </a>
          </div>
          <div v-if="user.profile.tiktok.length > 3" class="col-span-8 mx-auto">
            <a :href="('https://www.tiktok.com/@' + user.profile.tiktok)" class="flex shadow-2xl text-2xl mt-1 w-56 h-16 py-3 px-5 tiktok text-white">
              <i class="fab fa-tiktok pt-2"></i>
              <p class="mx-auto">TikTok</p>
            </a>
          </div>
          <div v-if="user.profile.facebook.length > 3" class="col-span-8 mx-auto">
            <a :href="user.profile.facebook" class="flex shadow-2xl text-2xl mt-1 w-56 h-16 py-3 px-5 facebook text-white">
              <i class="fab fa-facebook-f pt-2"></i>
              <p class="mx-auto">Facebook</p>
            </a>
          </div>
          <div v-if="user.profile.payme.length > 3" class="col-span-8 mx-auto">
            <a :href="user.profile.payme" class="flex shadow-2xl payme mt-1 w-56 h-16">
              <div class="mx-auto pt-1">
                <img class="w-48 py-1 px-5 mx-auto" src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 138 40'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23333;%7D.cls-2%7Bfill:%233cc;%7D.cls-3%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1-2'%3E%3Cpath class='cls-1' d='M22.73,3.95a7.1,7.1,0,0,0-1.85-2A9.18,9.18,0,0,0,18.45.77,13.68,13.68,0,0,0,15.56.16,34,34,0,0,0,12.1,0h-10A1.74,1.74,0,0,0,.2,1.62s0,.06,0,.09V17.95a15.37,15.37,0,0,0,6.57,7V21.69a1.92,1.92,0,0,1,1.75-2.08h3q6.14,0,9.37-2.57t3.28-7.62a12,12,0,0,0-.34-2.88A9,9,0,0,0,22.73,3.95Zm-5.86,8.35a3.52,3.52,0,0,1-1.49,1.39,6,6,0,0,1-2.15.57,19.58,19.58,0,0,1-2.47.15H7.88c-.69,0-1.12-.56-1.12-1.38V6.33A1,1,0,0,1,7.88,5.27h2.88q1.4,0,2.64.08a5.76,5.76,0,0,1,2.13.52A3.21,3.21,0,0,1,17,7.19a5.09,5.09,0,0,1,.51,2.52A5.08,5.08,0,0,1,16.87,12.29ZM6.78,25.93A18.19,18.19,0,0,1,.2,21.79v7.85a1.12,1.12,0,0,0,1,1.27H5.72c1.2,0,1.06-1.28,1.06-1.28ZM68.9,8.55H65a1.58,1.58,0,0,0-1.64,1.21L58.83,22.24s-4-11.37-4.3-12.25a1.82,1.82,0,0,0-1.76-1.45H49.18c-1.28,0-1.28,1-1.11,1.39s5.08,13.85,7,19a7.52,7.52,0,0,1,.63,2,5.28,5.28,0,0,1-.76,1.92,4.93,4.93,0,0,1-.5.7c3.7-1.1,8-5.11,10.16-9.44,2.18-6,5.05-14,5.18-14.41C69.92,9.07,69.92,8.55,68.9,8.55ZM51.52,34.77a9.47,9.47,0,0,1-1-.08c-.41-.06-1.19,0-1.19.7v3c0,1.15.56,1.23.85,1.31A12.92,12.92,0,0,0,53,40a7.29,7.29,0,0,0,3.25-.67,7.76,7.76,0,0,0,2.43-1.92,13.29,13.29,0,0,0,1.92-2.88q.83-1.66,1.58-3.67l.58-1.59C61.6,30.42,56.48,35.25,51.52,34.77ZM45.62,12.14a5.26,5.26,0,0,0-.86-1.39,6.06,6.06,0,0,0-1.22-1A8.92,8.92,0,0,0,42,8.91a11.53,11.53,0,0,0-1.69-.51,13.72,13.72,0,0,0-2-.29Q37.23,8,35.89,8q-8.94,0-10.18,5.64a1,1,0,0,0,.88,1.24h3.67c1,0,1-.31,1.38-1.17a2.57,2.57,0,0,1,.86-1.18,5.15,5.15,0,0,1,3.16-.81,4.5,4.5,0,0,1,2.95.73,3.44,3.44,0,0,1,1.09,2.38c0,1.24-.38,2.06-1.92,2.06-3.65-.13-7.57.28-9.78,1.55a7.23,7.23,0,0,0-3.46,6.38,6.52,6.52,0,0,0,.59,2.88,5.71,5.71,0,0,0,1.65,2A7,7,0,0,0,29.26,31a11.53,11.53,0,0,0,3.14.4,13.59,13.59,0,0,0,4.21-.6A15.7,15.7,0,0,0,40,28.89v.7c0,.69.21,1.31,1,1.31h4.25c.86,0,1.06-.61,1.06-1.37V16.44A16.14,16.14,0,0,0,46.14,14,7.68,7.68,0,0,0,45.62,12.14ZM39.81,25s-1.1,2.3-5,2.3a4.41,4.41,0,0,1-2.64-.73,2.61,2.61,0,0,1-1-2.28,2.88,2.88,0,0,1,1.65-2.82,12.59,12.59,0,0,1,4.95-.83,1.81,1.81,0,0,1,2.08,1.8Z'/%3E%3Cpath class='cls-2' d='M137,16.58a5,5,0,0,1,0,5.28c-1,1.52-6.45,7.34-8.25,9.21-1.56,1.62-3.67,3.26-5.76,3.26H79.7c-5.86,0-6.21-2-6.21-6.46V9.68c0-4.57,1.35-5.9,5.36-5.9h44.24c2.07,0,3.92,1.06,6,3.2C130.91,8.81,136.28,15.5,137,16.58Z'/%3E%3Cpath class='cls-3' d='M83.32,10.81V10.7c0-.59,0-1.16-1-1.16H78.69c-.85,0-.89.46-.89,1.18v4.8A15.17,15.17,0,0,1,83.32,10.81Z'/%3E%3Cpath class='cls-3' d='M107.63,28.17v-.26h0V16.33q0-7.27-6.42-7.27a6.4,6.4,0,0,0-3.36,1,12.18,12.18,0,0,0-2.93,2.56,5.1,5.1,0,0,0-2.08-2.63,6.89,6.89,0,0,0-3.61-.85,8.39,8.39,0,0,0-5.11,1.76c-.32.32-6.33,5-6.33,9.88v7.41c0,.23-.12,1.13.89,1.13h3.77c1.17,0,1.06-.77,1.06-1.09v-12c.63-.85,1.92-2.88,4.05-2.88a1.92,1.92,0,0,1,1.76.83,5.25,5.25,0,0,1,.54,2.76v9.35h0v1.92c0,.23-.12,1.13.89,1.13h3.73c1.17,0,1.06-.77,1.06-1.09v-.26h0V16.19c.68-.85,2-2.88,4.05-2.88a2,2,0,0,1,1.79.83,5.18,5.18,0,0,1,.55,2.76v9.35h0v1.92c0,.23-.12,1.13.89,1.13h3.77C107.77,29.24,107.63,28.48,107.63,28.17Z'/%3E%3Cpath class='cls-3' d='M128.42,23.46a8.63,8.63,0,0,1-8.54,5.61c-5.76,0-9.6-3.92-9.6-9.8s4-10,9.4-10,9,3.74,9.23,9.77c0,.77-.19,1.45-1.16,1.45H115.53c.08,3.23,1.63,5,4.39,5a3.84,3.84,0,0,0,3.54-2.14,1.36,1.36,0,0,1,1.15-.59h3.15a.63.63,0,0,1,.65.74ZM119.7,13c-2.29,0-3.84,1.59-4.18,4.21h8.2C123.51,14.92,122.27,13,119.7,13Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="">
              </div>
            </a>
          </div>
          <div v-if="user.profile.snapchat.length > 3" class="col-span-8 mx-auto">
            <a :href="user.profile.snapchat" class="flex shadow-2xl mt-1 text-2xl w-56 h-16 py-3 px-5 snapchat text-white">
              <i class="fab fa-snapchat-ghost pt-2"></i>
              <p class="mx-auto">Snapchat</p>
            </a>
          </div>
          <div v-if="user.profile.whatsapp.length > 3" class="col-span-8 mx-auto">
            <a :href="('https://wa.me/' + user.profile.whatsapp)" class="flex shadow-2xl text-2xl mt-1 w-56 h-16 py-3 px-5 whatsapp text-white">
              <i class="fab fa-whatsapp pt-2"></i>
              <p class="mx-auto">WhatsApp</p>
            </a>
          </div>
          <div v-if="user.profile.phone.length > 3" class="col-span-8 mx-auto">
            <a :href="('tel:' + user.profile.phone)" class="flex shadow-2xl text-2xl w-56 mt-1 h-16 py-3 px-5 phone text-white">
              <i class="fas fa-phone-alt pt-2"></i>
              <p class="mx-auto">Phone</p>
            </a>
          </div>
          <div v-if="user.profile.youtube.length > 3" class="col-span-8 mx-auto mb-12">
            <a :href="user.profile.youtube" class="flex shadow-2xl text-2xl w-56 h-16 mt-1 py-3 px-5 youtube text-white">
              <i class="fab fa-youtube pt-2"></i>
              <p class="mx-auto">YouTube</p>
            </a>
          </div>
          <div v-if="user.profile.mail.length > 3" class="col-span-8 mx-auto">
            <a :href="'mailto:' + user.profile.mail" class="flex shadow-2xl text-2xl w-56 h-16 mt-1 py-3 px-5 mail text-white">
              <i class="fas fa-envelope pt-2"></i>
              <p class="mx-auto">Email</p>
            </a>
          </div>
          <div v-if="user.profile.website.length > 3" class="col-span-8 mx-auto mb-12">
            <a :href="'https://' + user.profile.website" class="flex shadow-2xl text-2xl w-56 h-16 mt-1 py-3 px-5 website text-white">
              <i class="fas fa-compass pt-2"></i>
              <p class="mx-auto">Website</p>
            </a>
          </div>
        </div>
        <div v-else>
        <p class="text-right pr-4 text-black email">{{ user.info.email }}</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: []
  }),
  async mounted() {
    const id = this.$route.params.id
    this.user = await this.$store.dispatch('fetchShoesById', id)
  },
  methods: {
  }
}
</script>
<style scoped>
  .round-i {
    border-radius: 12px;
  }
  .member {
    margin-top: -60px;
  }
  .instagram {
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    border-radius: 12px;
    width: 230px;
  }
  .telegram {
    background: #0088cc;
    border-radius: 12px;
    width: 230px;

  }
  .facebook {
    background: #3b5998;
    border-radius: 12px;
    width: 230px;

  }
  .tiktok {
    background: #FC354C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0ABFBC, #FC354C);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0ABFBC, #FC354C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 12px;
    width: 230px;

  }
  .email {
    margin-top: -60px;
    
  }
  .payme {
    border: 4px solid #00D6D8;
    border-radius: 12px;
    width: 230px;
  }
  .click {
    background: #181927;
    border-radius: 12px;
    width: 230px;
  }
  .snapchat {
    background: #f3ef00;
    border-radius: 12px;
    width: 230px;
  }
  .whatsapp {
    background: #25d366;
    border-radius: 12px;
    width: 230px;
  }
  .phone {
    background: #20d462;
    border-radius: 12px;
    width: 230px;
  }
  .youtube {
    background: #FF0000;
    border-radius: 12px;
    width: 230px;
  }
  .mail {
    background-image: linear-gradient(to bottom, #1e54ee, #0082ff, #00a7ff, #00c8ff, #19e5ff);
    border-radius: 12px;
    width: 230px;
  }
  .website {
    background: #00B4DB;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 12px;
    width: 230px;
  }

  @media screen and (min-width: 300px) and (max-width: 340px) {
    .img-mobile {
      width: 80px;
      height: 80px;
    }
  }
  
</style>