<template>
  <div>
    <div class="contaner mx-auto">
      <div class="delivery text-gray-900">
        <div class="navbar">
          <Header/>
        </div>
        <div class="grid-cols-2 container mx-auto">
          <div class="col-span-2 text-center pt-40">
            <h2 class="text-4xl font-semibold pb-4">Совместимые устройства</h2>
            <hr>
          </div>
          <div class="col-span-2 mt-12 px-2 font-semibold">
            <h4 class="mt-4 text-xl">Iphone:</h4>
            <li class="text-lg mt-4">Iphone Xr</li>
            <li class="text-lg">Iphone Xs</li>
            <li class="text-lg">Iphone Xs Max</li>
            <li class="text-lg">Iphone 11</li>
            <li class="text-lg">Iphone 11 Pro</li>
            <li class="text-lg">Iphone 11 Pro Max</li>
            <li class="text-lg">Iphone SE</li>
            <li class="text-lg">Iphone 12</li>
            <li class="text-lg">Iphone 12 Mini</li>
            <li class="text-lg">Iphone 12 Pro</li>
            <li class="text-lg">Iphone 12 Pro Max</li>

            <h4 class="mt-4 text-xl">Samsung</h4>
            <li class="mt-2 text-lg">SIII, S4, S5, S6, S6 Edge, S6 Edge+, S7, S7Edge, S8, S8+, S9, S9+, S10, S10 5G, S10+, S20, S20+, S20 Ultra, A20, A30, A50, A51, Note 8, Note 9, Note 10, Note 10+, Note 20, Note 20+</li>
            <h4 class="mt-4 text-xl">Pixel:</h4>
            <li class="mt-2 text-lg">Pixel, Pixel XL, Pixel 2, Pixel 2XL, Pixel 3, Pixel 3XL, Pixel 3A, Pixel 3aXL, Pixel 4, Pixel 4a, Pixel 5</li>
            <h4 class="mt-4 text-xl">LG:</h4>
            <li class="mt-2 text-lg">G3, Nexus 5X, V10, G4, K10, V20, G5, G6, V30, V35 ThinQ, Q Stylus, Q Stylo 4, V40 ThinQ, V50 ThinQ 5G, Q8, Q7, G7 ThinQ, G8, G8s ThinQ, Q9, One</li>
            <h4 class="mt-4 text-xl">Huawei:</h4>
            <li class="mt-2 text-lg">P10, P10 Plus, P10 Lite, P20, P20 Pro, P20 Lite, P30, P30 Pro, P30 Lite</li>
            <h4 class="mt-4 text-xl">Xiaomi:</h4>
            <li class="mt-2 text-lg">Mi Mix, Mi Mix2, Mi Mix 2S, Mi Mix 3, Mi5, Mi5s, Mi5 Plus, Mi6/X, Mi6, Mi8, Mi8 Lite, Mi8 Pro, Mi9, Mi9 SE, Mi10T Pro, Mi10T </li>
            <h4 class="mt-4 text-xl">HTC:</h4>
            <li class="mt-2 text-lg">One M9, Desire 10 Pro, Exodus 1, U11/Life/+, Desire 12/12+, U11 Eyes, U12 Life, U12+, U19e, 19+</li>
            <h4 class="mt-4 text-xl">Sony</h4>
            <li class="mt-2 text-lg">Xperia XZ1/Compact, Xperia 1, 10/Plus, Xperia XA1/Ultra/Plus, Xperia XZ2/Compact/Premium, Xperia XA2/Ultra/Plus, Xperia XZ3</li>
            <h4 class="mt-4 text-xl">Motorola:</h4>
            <li class="mt-2 text-lg">Moto P50, Moto X4, Moto Z3, Moto Z3 Play</li>
          </div>
          <div class="link px-2">
            <a href="https://www.nfcw.com/nfc-phones-list/#:~:text=Apple%20iPhone%2012%2C%20iPhone%2012,7%20and%20iPhone%207%20Plus">Телефоны с NFC</a>
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
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header, Footer
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