'use strict';
$(document).ready(function () {

  /*
  const Vue = window.vue;
  const Vuex = window.vuex;
*/
  const state = {
    cake: [
      { code: "cake_1", name: "«Celebration»", amount: 0, price: 100.00 },
      { code: "cake_2", name: "«Odysseus»", amount: 0, price: 110.00 },
      { code: "cake_3", name: "«Delight»", amount: 0, price: 90.00 },
      { code: "cake_4", name: "«Anniversary»", amount: 0, price: 120.00 },
      { code: "cake_5", name: "«Assorted»", amount: 0, price: 130.00 },
      { code: "cake_6", name: "«Country»", amount: 0, price: 90.00 },
      { code: "cake_7", name: "«Career»", amount: 0, price: 130.00 },
      { code: "cake_8", name: "«Pleasure»", amount: 0, price: 100.00 },
      { code: "mini_cake_1", name: "«Morning»", amount: 0, price: 8.00 },
      { code: "mini_cake_2", name: "«Titanic»", amount: 0, price: 8.00 },
      { code: "mini_cake_3", name: "«Noir»", amount: 0, price: 9.00 },
      { code: "mini_cake_4", name: "«Glare»", amount: 0, price: 7.00 },
      { code: "mini_cake_5", name: "«Takeoff»", amount: 0, price: 9.00 },
      { code: "mini_cake_6", name: "«Coral»", amount: 0, price: 10.00 },
      { code: "mini_cake_7", name: "«Doffin»", amount: 0, price: 9.00 },
      { code: "mini_cake_8", name: "«Blues»", amount: 0, price: 9.00 },
    ],
    count: 0,
    total: 0
  };
  const getters = { count: state => state.count };
  const mutations = {
    increment(state) {
      state.count++;
    },
    restoreState(state, { code, amount, price }) {
      let cakeItem = state.cake.find(x => x.code === code);
      cakeItem.amount = amount;
      state.count += amount;
      state.total += Number(amount) * price;
    },
    amoutUp(state, { code }) {
      let cakeItem = state.cake.find(x => x.code === code);
      state.total += cakeItem.price;
      cakeItem.amount++;
      state.count++;
    },
    amoutDown(state, { code }) {
      let cakeItem = state.cake.find(x => x.code === code);
      state.total -= cakeItem.price;
      cakeItem.amount--;
      state.count--;
    },
  };
  const store = new Vuex.Store({ state, getters, mutations });

  new Vue({
    'el': "#basket-modal-info",
    'store': store,
    data() {
      return {
        basketSaved: {},
        totalCost: 0,
        cakes: [
          { code: 'cake-1', name: "«Celebration»" },
          { code: 'cake-2', name: "«Odysseus»" },
          { code: 'cake-3', name: "«Delight»" },
          { code: 'cake-4', name: "«Anniversary»" },
          { code: 'cake-5', name: "«Assorted»" },
          { code: 'cake-6', name: "«Country»" },
          { code: 'cake-7', name: "«Career»" },
          { code: 'cake-8', name: "«Pleasure»" },
          { code: 'mini_cake-1', name: "«Morning»" },
          { code: 'mini_cake-2', name: "«Titanic»" },
          { code: 'mini_cake-3', name: "«Noir»" },
          { code: 'mini_cake-4', name: "«Glare»" },
          { code: 'mini_cake-5', name: "«Takeoff»" },
          { code: 'mini_cake-6', name: "«Coral»" },
          { code: 'mini_cake-7', name: "«Doffin»" },
          { code: 'mini_cake-8', name: "«Blues»" },
          { code: 'count', name: "Total:" },
        ],
      };
    },
    created() {
      this.basketSaved = JSON.parse(localStorage.getItem('basket'));
      if (this.basketSaved !== null) {
        this.basketSaved.forEach((arrayItem) => {
          this.$store.commit('restoreState', { code: arrayItem.code, amount: arrayItem.amount, price: arrayItem.price });
        });
        this.totalCost = this.$store.total;
      }
    },
    methods: {
      goBack() {
        localStorage.setItem('basket', JSON.stringify(this.$store.state));
        window.location.href = "index.html#cake";
      },
      makeOrder() {
        localStorage.setItem('basket', JSON.stringify(this.$store.state.cake));
        window.location.href = "order.html";
      },
      amountUp(item) {
        this.$store.commit('amoutUp', { code: item.code });
      },
      amountDown(item) {
        this.$store.commit('amoutDown', { code: item.code });
      },
      cleanBasketAndGoBack() {
        localStorage.removeItem('basket');
        window.location.href = "index.html#cake";
      }
    },
    template: `
  <div class="basket">
    <header class="basket-header">
      <div class="basket-header-wrapper">
        <div class="basket-header-logo">
          <a href="index.html" class="basket-header-link" @click="goBack">
            Gourmet
          </a>
        </div>
        <div class="basket-contacts-phone">
          <a
            href="tel:8800"
            class="basket-contacts-phone basket-contacts-phone__link"
          >
            <img
              src="img/phone-call.svg"
              alt="Icon: phone-call"
              class="basket-contacts-phone__link basket-contacts-phone__link--icon"
            />
            <span
              class="basket-contacts-phone__link basket-contacts-phone__link--num"
              >+1 234-567-890</span
            >
          </a>
        </div>
      </div>
    </header>
    <section class="basket-block">
      <div class="basket-breadcrumbs-block">
          <button @click="goBack" class="basket-breadcrumbs-home">
            <svg class="basket-button-icon">
              <use xlink:href="img/icons.svg#home"></use>
            </svg>
          </button>
          <span class="basket-breadcrumbs-current">Basket</span>
      </div>
      <div class="basket-button-block">
          <button @click="goBack" class="basket-button-back">
            <svg class="order-button-icon">
              <use xlink:href="img/icons.svg#back-arrow"></use>
            </svg>
          </button>
          <button @click="cleanBasketAndGoBack" class="basket-button-clear">
            <svg class="order-button-icon">
              <use xlink:href="img/icons.svg#shopping-basket"></use>
            </svg>
          </button>
      </div>
      <div class="basket-wrapper">
        <span class="basket-title">Basket</span>
        <div v-if="$store.state.total > 0" class="basket-item-block" v-for="item in $store.state.cake" :key="item.code">
          <div class="basket-item" v-if="item.amount > 0">
            <span class="basket-item-name">{{ item.name }}</span>
            <button class="basket-button-left" @click="amountDown(item)" :disabled="item.amount === 0"><</button>
            <span class="basket-item-amount">{{ item.amount }}</span>
            <button class="basket-button-right" @click="amountUp(item)">></button>
            <span class="basket-item-cost">{{ item.amount * item.price }}.00 $</span>
          </div>
        </div>
        <div class="basket-item basket-item-total" v-if="$store.state.total > 0">
          <span class="basket-item-name">Total:</span>
          <span class="basket-item-cost basket-item-cost--total">{{$store.state.total}}.00 $</span><br />
        </div>
        <div v-if="$store.state.total === 0" class="basket-item-block">
          <span class="basket-item-name">Your basket is empty</span><br /><br />
        </div>
        <button @click="makeOrder" class="basket-button-order">Order</button>

        <img
          src="img/empty-basket.jpg"
          alt="Image: empty basket"
          class="basket-image"
          v-if="$store.state.total === 0"
        />
        <img
          src="img/full_basket.png"
          alt="Image: full basket"
          class="basket-image"
          v-if="$store.state.total > 0"
        />
      </div>
    </section>
    <!--
    <section class="basket-footer">
      <div class="basket-footer-wrapper">
        <div class="basket-footer-address">
          <p class="basket-footer-text">20204/3 42nd Ave NE, Lake Forest Park, WA 98000, United States</p>
        </div>
        <div class="basket-footer-contacts">
          <h2 class="basket-footer-text">Contacts:</h2>
          <div class="basket-footer-phone">
            <a
              href="tel:8800"
              class="basket-footer-phone basket-footer-phone__link"
            >
              <img
                src="img/phone-call.svg"
                alt="Icon: phone-call"
                class="basket-footer-phone__link basket-footer-phone__link--icon"
              />
              <span
                class="basket-footer-phone__link basket-footer-phone__link--num"
                >+1 234-567-890</span
              >
            </a>
          </div>
          <div class="basket-footer-email">
            <a
              href="mailto:gourmet@gmail.com"
              class="basket-footer-email basket-footer-email__link"
            >
              <img
                src="img/email.svg"
                alt="Icon: email"
                class="basket-footer-email__link basket-footer-email__link--icon"
              />
              <span
                class="basket-footer-email__link basket-footer-email__link--email"
                >gourmet@gmail.com</span
              >
            </a>
          </div>
        </div>
      </div>
    </section>
    -->
  </div>
  `,
  });
});