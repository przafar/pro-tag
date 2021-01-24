<template>
  <div class="footer">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 xl:col-span-1 lg:col-span-1 pl-4 xl:pl-0 lg:pl-0">
          <div class="logo flex mt-10 ">
            <svg width="45" height="48" xmlns="http://www.w3.org/2000/svg">
              <g>
                <g transform="matrix(0.020405896916177363,0,0,-0.019514957865699397,0.5058253301220254,162.44456588265285) " id="e79jovkio88j2">
                <path fill="rgb(255,255,255)" d="m798.30621,8173.82731c-145,-83 -343,-197 -439,-254c-96,-56 -202,-117 -234,-135c-32,-18 -74,-46 -92,-63l-34,-29l0,-602l0,-602l27,-25c42,-39 120,-80 137,-73c14,6 16,70 16,613l0,606l208,119c114,66 308,178 432,249c124,71 235,134 246,139c23,11 28,8 294,-147c63,-37 229,-132 368,-212l252,-145l0,-522l0,-521l-148,-85c-81,-46 -198,-114 -260,-150c-62,-36 -121,-69 -130,-75c-10,-5 -88,-50 -174,-100c-100,-57 -162,-99 -172,-116c-22,-37 -23,-167 -1,-176c9,-3 64,23 133,62c601,345 888,514 908,534l24,24l0,603l0,603l-22,25c-13,13 -99,68 -193,122c-93,53 -228,131 -300,172c-518,300 -540,312 -565,312c-9,0 -135,-68 -281,-151z" id="e79jovkio88j3"/>
                <path fill="rgb(255,255,255)" d="m860.15596,7812.82731c-104,-61 -253,-146 -330,-191c-77,-44 -150,-92 -162,-106l-23,-26l0,-592c0,-435 3,-599 12,-618c7,-15 38,-41 75,-62c52,-28 66,-33 78,-23c13,11 15,96 15,614l0,602l128,74c70,40 192,111 271,157c79,45 148,83 154,83c5,0 89,-46 186,-102c97,-56 220,-127 274,-157l97,-56l0,-317l-1,-318l-97,-57c-53,-32 -118,-69 -143,-83c-187,-103 -289,-168 -303,-191c-22,-37 -22,-167 -1,-176c9,-3 69,25 143,68c70,40 217,124 327,187c110,63 211,126 225,139l25,23l2,403c3,377 2,403 -16,424c-14,17 -278,175 -562,336c-24,13 -64,36 -89,51c-25,14 -56,26 -70,25c-14,0 -110,-50 -215,-111z" id="e79jovkio88j4"/>
                <path fill="rgb(255,255,255)" d="m899.30621,7398.82731c-80,-47 -151,-92 -157,-101c-10,-13 -13,-153 -13,-623l0,-606l28,-26c65,-60 134,-84 146,-52c3,9 6,189 6,401l0,384l74,-40c40,-23 86,-41 100,-41c32,0 300,150 334,187c21,23 22,31 22,208l0,185l-27,29c-16,16 -53,42 -83,59c-30,16 -90,50 -133,75c-111,66 -120,65 -297,-39zm274,-155l86,-50l0,-104l0,-103l-87,-49c-47,-26 -91,-47 -96,-45c-5,1 -45,23 -88,48l-80,46l3,106l3,105l80,48c44,27 83,48 87,49c3,0 45,-23 92,-51z" id="e79jovkio88j5"/>
                </g>
              </g>
            </svg>
            <h2 class="font-mono text-3xl font-semibold ml-4 text-white">ProTag</h2>
          </div>
          <div class="logo-info text-white mt-4 mb-4 xl:mt-10 lg:mt-10 xl:mb-12 lg:mb-12">
            <p>© 2020 PROTAG.UZ — Электронная тег метка.</p>
          </div>
        </div>
        <div class="col-span-3 xl:col-span-1 lg:col-span-1 pl-4 mt-2 xl:mt-8 lg:mt-8 font-semibold text-white">
          <li class="block pt-2"><router-link to="/Delivery" tag="a" href="#">Доставка и Оплата</router-link></li>
          <li class="block pt-4"><router-link to="/Contacts" tag="a" href="#">Контакты</router-link></li>
          <li class="block pt-4"><router-link to="/Phones" tag="a" href="#">Поддерживаемые устройства</router-link></li>
        </div>
        <div class="col-span-3 xl:col-span-1 lg:col-span-1 mt-8 xl:mb-0 lg:mb-0 mb-12 pl-4 xl:pl-0 lg:pl-0">
          <p class="text-white font-semibold">Найдите Нас Здесь.</p>
          <div class="social flex text-center text-white mt-6">
            <li class="block w-10 h-10 pt-2  facebook text-center rounded-full"><a href="https://instagram.com/protaguz?igshid=1j4iry455m4dn"><i class="fab fa-facebook-f"></i></a></li>
            <li class="block w-10 h-10 pt-2 instagram ml-4 text-center rounded-full"><a href="https://instagram.com/protaguz?igshid=1j4iry455m4dn"><i class="fab fa-instagram"></i></a></li>
            <li class="block w-10 h-10 pt-2  telegram ml-4 text-center rounded-full"><a href="https://t.me/protag1"><i class="fab fa-telegram-plane"></i></a></li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .footer {
    background: #667db6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .instagram {
    background: #845EC2; 
    /* background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 ); */
  }
  .facebook {
    background: #845EC2;
  }
  .telegram {
    background: #845EC2;
  }
</style>