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
    total: 0
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
    restoreState(state, { code, amount, price }) {
      let cakeItem = state.cake.find(x => x.code === code);
      cakeItem.amount = amount;
      state.count += amount;
      state.total += Number(amount) * price;
    },
  };
  const store = new Vuex.Store({ state, getters, mutations });

  new Vue({
    'el': "#order-modal-info",
    'store': store,
    data() {
      return {
        basketSaved: {},
        totalCost: 0,
        isDelivery: false,
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
        order: {
          name: '',
          phone: '',
          email: '',
          listing: '',
          delivery: ''
        },
      };
    },
    created() {
      this.basketSaved = JSON.parse(localStorage.getItem('basket'));
      if (this.basketSaved !== null) {
        this.basketSaved.forEach((arrayItem) => {
          this.$store.commit('restoreState', { code: arrayItem.code, amount: arrayItem.amount, price: arrayItem.price });
          if (arrayItem.amount > 0) {
            this.order.listing += arrayItem.name + ' - ' + arrayItem.amount + ', ';
          }
        });
        this.totalCost = this.$store.total;
      }
    },
    methods: {
      goBack() {
        localStorage.setItem('basket', JSON.stringify(this.basketSaved));
        window.location.href = "basket.html";
      },
      goHome() {
        localStorage.setItem('basket', JSON.stringify(this.basketSaved));
        window.location.href = "index.html";
      },
      cleanBasketAndGoBack() {
        localStorage.removeItem('basket');
        window.location.href = "index.html#cake";
      },
      signOrder() {
        localStorage.removeItem('basket');
        console.log("!_sign order");
      },
      clearDelivery(delivery) {
        this.order.delivery = '';
        if (!delivery) {
          setTimeout(function () {
            document.getElementById("deliveryArea").focus();
          }, 500);
        }
      }
    },
    template: `
  <div class="order">
    <header class="order-header">
      <div class="order-header-wrapper">
        <div class="order-header-logo">
          <a href="index.html" class="order-header-link" @click="goBack">
            Gourmet
          </a>
        </div>
        <div class="order-contacts-phone">
          <a
            href="tel:8800"
            class="order-contacts-phone order-contacts-phone__link"
          >
            <img
              src="img/phone-call.svg"
              alt="Icon: phone-call"
              class="order-contacts-phone__link order-contacts-phone__link--icon"
            />
            <span
              class="order-contacts-phone__link order-contacts-phone__link--num"
              >+1 234-567-890</span
            >
          </a>
        </div>
      </div>
    </header>
    <section class="order-block">
      <div class="order-wrapper">
        <div class="order-breadcrumbs-block">
          <button @click="goHome" class="order-breadcrumbs-home">
            <svg class="order-button-icon order-button-icon--breadcrumbs">
              <use xlink:href="img/icons.svg#home"></use>
            </svg>
          </button>
          <span class="order-breadcrumbs-previous" @click="goBack">Basket</span>
          <span class="order-breadcrumbs-current">Order</span>
        </div>
        <div class="order-button-block">
          <button @click="goBack" class="order-button-back">
            <svg class="order-button-icon">
              <use xlink:href="img/icons.svg#back-arrow"></use>
            </svg>
          </button>
          <button @click="cleanBasketAndGoBack" class="order-button-clear">
            <svg class="order-button-icon">
              <use xlink:href="img/icons.svg#shopping-basket"></use>
            </svg>
          </button>
        </div>
        <div class="order-total">
          <span class="order-item-name">Order amount:</span>
          <span class="order-item-cost order-item-cost--total">{{$store.state.total}}.00 $</span>
        </div>
        <div class="order-form">
            <h3 class="order-subtitle">Refine your details</h3>
            <form action="send-order.php" method="POST" class="form order__form">
              <div class="order__input-group">
                <input
                  type="text"
                  class="input order__input"
                  name="name"
                  required
                  minlength="2"
                  placeholder="Name *"
                  v-model="order.name"
                />
              </div>
              <!-- /.order__input-group -->
              <div class="order__input-group order__input-group--phone">
                <input
                  id="target"
                  type="tel"
                  class="input order__input phoneInput"
                  name="phone"
                  placeholder="Phone *"
                />
              </div>
              <!-- /.order__input-group -->
              <div class="order__input-group order__input-group--email">
                <input
                  id="email"
                  type="email"
                  class="input order__input"
                  name="email"
                  placeholder="Email"
                  v-model="order.email"
                />
              </div>
              <!-- /.order__input-group -->
              <div class="order__input-group order__input-group--delivery">
                <input
                  id="delivery"
                  type="checkbox"
                  class="input order__input-delivery"
                  name="delivery"
                  v-model="isDelivery"
                  @click="clearDelivery(isDelivery)"
                />
                <label for="delivery">Delivery</label>
              </div>
              <!-- /.order__input-group -->
              <textarea
                id="deliveryArea"
                v-if="isDelivery"
                cols="30"
                rows="10"
                class="message order__message"
                name="message"
                placeholder="Delivery address"
                v-model="order.delivery"
              ></textarea>
              <div class="order__input-group order__input-group--listing">
                <textarea
                  id="listing"
                  type="text"
                  class="input order__input"
                  name="listing"
                  v-model="order.listing"
                /></textarea>
              </div>
              <!-- /.order__input-group -->
              <button class="button footer__button" type="submit" @click="signOrder">
                Confirm
              </button>
              <span class="order__info">* - required field</span>
            </form>
          </div>
          <!-- /.footer-form -->
      </div>
    </section>
  </div>
  `,

  });

  //валидация email
  jQuery.validator.addMethod("emailfull", function(value, element) {
    return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
  }, "Please enter valid email address!");

  // Обработка форм
  // Маска номера Phone
  $(".phoneInput").mask("+7 (999) 999-99-99");

  $('.form').each(function () {
    $(this).validate({
      rules: {
        email: {
          required: true,
          email: true,
          emailfull: true
        },
        phone: {
          required: true,
          minlength:18
        }
      },
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Minimum field length 2 characters",
        },
        phone: {
          required: "Please enter your Phone number",
          minlength: "Minimum field length 10 characters",
        },
        email: {
          required: "Please enter your email",
          email: "Email format - name@domain.com",
        },
      },
    });
  });

});