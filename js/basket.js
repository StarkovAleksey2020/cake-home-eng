'use strict';
$(document).ready(function () {
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
};
const getters = { count: state => state.count };
const mutations = {
  increment(state) {
    state.count++;
  },
  incrementItem(state, { name }) {
    if (name === "cake-1") { let cakeItem = state.cake.find(x => x.code === 'cake_1'); cakeItem.amount++; }
    else if (name === "cake-2") { let cakeItem = state.cake.find(x => x.code === 'cake_2'); cakeItem.amount++;}
    else if (name === "cake-3") { let cakeItem = state.cake.find(x => x.code === 'cake_3'); cakeItem.amount++; }
    else if (name === "cake-4") { let cakeItem = state.cake.find(x => x.code === 'cake_4'); cakeItem.amount++; }
    else if (name === "cake-5") { let cakeItem = state.cake.find(x => x.code === 'cake_5'); cakeItem.amount++; }
    else if (name === "cake-6") { let cakeItem = state.cake.find(x => x.code === 'cake_6'); cakeItem.amount++; }
    else if (name === "cake-7") { let cakeItem = state.cake.find(x => x.code === 'cake_7'); cakeItem.amount++; }
    else if (name === "cake-8") { let cakeItem = state.cake.find(x => x.code === 'cake_8'); cakeItem.amount++; }
    else if (name === "bakery-1") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_1'); cakeItem.amount++; }
    else if (name === "bakery-2") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_2'); cakeItem.amount++; }
    else if (name === "bakery-3") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_3'); cakeItem.amount++; }
    else if (name === "bakery-4") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_4'); cakeItem.amount++; }
    else if (name === "bakery-5") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_5'); cakeItem.amount++; }
    else if (name === "bakery-6") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_6'); cakeItem.amount++; }
    else if (name === "bakery-7") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_7'); cakeItem.amount++; }
    else if (name === "bakery-8") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_8'); cakeItem.amount++; }
  },
  restoreState(state, { code, amount }) {
    let cakeItem = state.cake.find(x => x.code === code);
    cakeItem.amount = amount;
    state.count += amount;
  },

};
const store = new Vuex.Store({ state, getters, mutations });

new Vue({
  'el': "#basket",
  'store': store,
  data() {
    return {
      basket: [],
      basketSaved: {},
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
      ],
    };
  },
  created() {
    this.basketSaved = JSON.parse(localStorage.getItem('basket'));

    if (this.basketSaved !== null) {
      this.basketSaved.forEach((arrayItem) => {
        this.$store.commit('restoreState', { code: arrayItem.code, amount: arrayItem.amount });
      });
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    onClick() {
      localStorage.setItem('basket', JSON.stringify(this.$store.state.cake));
      window.location.href = "basket.html";
    }
  },
  template: `
    <div class="menu-basket-block">
      <div class="menu-basket" @click='onClick' data-toggle="modal-basket">
        <svg class="menu-basket-icon">
          <use xlink:href="img/icons.svg#shopping-cart"></use>
        </svg>
      </div>
      <div class="menu-basket-count-block">
        <span class="menu-basket-count">{{ count }}</span>
      </div>
    </div>
  `,
});

new Vue({
  'el': "#cake-1",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "cake-1"});
      this.$store.commit('increment');
      console.log(this.$store.state.cake);
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
    `,
});
new Vue({
  'el': "#cake-2",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "cake-2"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#cake-3",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "cake-3"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#cake-4",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "cake-4"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#cake-5",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "cake-5"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#cake-6",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "cake-6"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#cake-7",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "cake-7"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#cake-8",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "cake-8"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#bakery-1",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "bakery-1"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#bakery-2",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "bakery-2"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#bakery-3",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "bakery-3"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#bakery-4",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "bakery-4"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#bakery-5",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "bakery-5"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#bakery-6",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "bakery-6"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#bakery-7",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "bakery-7"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});
new Vue({
  'el': "#bakery-8",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('incrementItem', { name: "bakery-8"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">Add to cart</button>
  `,
});

  // анимация добавления итема Add to cart
  $(".cake-button-contract").on("click", function () {
    let cart = $(".menu-basket-block");
    // Находим имидж карточки, которую добавляем Add to cart
    let imgToDrag = $(this)
      .parent()
      .parent()
      .find("img")
      .eq(0);
    
    let imgClone = imgToDrag
      .clone()
      .offset({
        top: imgToDrag.offset().top,
        left: imgToDrag.offset().left
      })
      .css({
        opacity: "0.8",
        position: "absolute",
        width: "170px",
        height: "90px",
        objectFit: "cover",
        "z-index": "100"
      })
      .appendTo($("body"))
      .animate({
        top: cart.offset().top + 20,
        left: cart.offset().left + 30,
        width: 75,
        height: 75
      }, 1000, "linear");
    imgClone.animate({
      width: 0,
      height: 0
    },function () { $(this).detach(); });
  });
});