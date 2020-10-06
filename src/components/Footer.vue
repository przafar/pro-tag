<template>
  <div class="footer">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 xl:col-span-1 lg:col-span-1 pl-4 xl:pl-0 lg:pl-0">
          <div class="logo flex mt-10 ">
            <img class="w-10 h-12" src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/logonew.png?alt=media&token=cc63ca80-2a4f-409b-acd2-1782383d66fb" alt="">
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