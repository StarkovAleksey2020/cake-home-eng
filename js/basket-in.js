'use strict';
$(document).ready(function () {

  /*
  const Vue = window.vue;
  const Vuex = window.vuex;
*/
  const state = {
    cake: [
      { code: "cake_1", name: "«Торжество»", amount: 0, price: 1400.00 },
      { code: "cake_2", name: "«Одиссей»", amount: 0, price: 1200.00 },
      { code: "cake_3", name: "«Восторг»", amount: 0, price: 1000.00 },
      { code: "cake_4", name: "«Юбиляр»", amount: 0, price: 1000.00 },
      { code: "cake_5", name: "«Ассорти»", amount: 0, price: 1300.00 },
      { code: "cake_6", name: "«Хоровод»", amount: 0, price: 1300.00 },
      { code: "cake_7", name: "«Карьер»", amount: 0, price: 1300.00 },
      { code: "cake_8", name: "«Бармалей»", amount: 0, price: 1300.00 },
      { code: "mini_cake_1", name: "«Утро»", amount: 0, price: 80.00 },
      { code: "mini_cake_2", name: "«Титаник»", amount: 0, price: 80.00 },
      { code: "mini_cake_3", name: "«Нуар»", amount: 0, price: 90.00 },
      { code: "mini_cake_4", name: "«Блик»", amount: 0, price: 70.00 },
      { code: "mini_cake_5", name: "«Взлет»", amount: 0, price: 90.00 },
      { code: "mini_cake_6", name: "«Коралл»", amount: 0, price: 100.00 },
      { code: "mini_cake_7", name: "«Доффин»", amount: 0, price: 90.00 },
      { code: "mini_cake_8", name: "«Блюз»", amount: 0, price: 90.00 },
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
          { code: 'cake-1', name: "«Торжество»" },
          { code: 'cake-2', name: "«Одиссей»" },
          { code: 'cake-3', name: "«Восторг»" },
          { code: 'cake-4', name: "«Юбиляр»" },
          { code: 'cake-5', name: "«Ассорти»" },
          { code: 'cake-6', name: "«Хоровод»" },
          { code: 'cake-7', name: "«Карьер»" },
          { code: 'cake-8', name: "«Бармалей»" },
          { code: 'mini_cake-1', name: "«Утро»" },
          { code: 'mini_cake-2', name: "«Титаник»" },
          { code: 'mini_cake-3', name: "«Нуар»" },
          { code: 'mini_cake-4', name: "«Блик»" },
          { code: 'mini_cake-5', name: "«Взлет»" },
          { code: 'mini_cake-6', name: "«Коралл»" },
          { code: 'mini_cake-7', name: "«Доффин»" },
          { code: 'mini_cake-8', name: "«Блюз»" },
          { code: 'count', name: "Итого:" },
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
            Лакомка
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
              >+7 (914) 123 45 67</span
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
          <span class="basket-breadcrumbs-current">Корзина</span>
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
        <span class="basket-title">Корзина</span>
        <div v-if="$store.state.total > 0" class="basket-item-block" v-for="item in $store.state.cake" :key="item.code">
          <div class="basket-item" v-if="item.amount > 0">
            <span class="basket-item-name">{{ item.name }}</span>
            <button class="basket-button-left" @click="amountDown(item)" :disabled="item.amount === 0"><</button>
            <span class="basket-item-amount">{{ item.amount }}</span>
            <button class="basket-button-right" @click="amountUp(item)">></button>
            <span class="basket-item-cost">{{ item.amount * item.price }}.00 руб.</span>
          </div>
        </div>
        <div class="basket-item basket-item-total" v-if="$store.state.total > 0">
          <span class="basket-item-name">Итого:</span>
          <span class="basket-item-cost basket-item-cost--total">{{$store.state.total}}.00 руб.</span><br />
        </div>
        <div v-if="$store.state.total === 0" class="basket-item-block">
          <span class="basket-item-name">Ваша корзина пуста</span><br /><br />
        </div>
        <button @click="makeOrder" class="basket-button-order">Заказ</button>

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
          <p class="basket-footer-text">Наш адрес: Иркутский район, с. Хомутово</p>
        </div>
        <div class="basket-footer-contacts">
          <h2 class="basket-footer-text">Контакты:</h2>
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
                >+7 (914) 123 45 67</span
              >
            </a>
          </div>
          <div class="basket-footer-email">
            <a
              href="mailto:lakomka@gmail.com"
              class="basket-footer-email basket-footer-email__link"
            >
              <img
                src="img/email.svg"
                alt="Icon: email"
                class="basket-footer-email__link basket-footer-email__link--icon"
              />
              <span
                class="basket-footer-email__link basket-footer-email__link--email"
                >lakomka@gmail.com</span
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