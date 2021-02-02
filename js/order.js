'use strict';
$(document).ready(function () {
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
            Лакомка
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
              >+7 (914) 123 45 67</span
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
          <span class="order-breadcrumbs-previous" @click="goBack">Корзина</span>
          <span class="order-breadcrumbs-current">Заказ</span>
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
          <span class="order-item-name">Сумма заказа:</span>
          <span class="order-item-cost order-item-cost--total">{{$store.state.total}}.00 руб.</span>
        </div>
        <div class="order-form">
            <h3 class="order-subtitle">Уточните Ваши данные</h3>
            <form action="send-order.php" method="POST" class="form order__form">
              <div class="order__input-group">
                <input
                  type="text"
                  class="input order__input"
                  name="name"
                  required
                  minlength="2"
                  placeholder="Имя *"
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
                  placeholder="Телефон *"
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
                <label for="delivery">Доставка</label>
              </div>
              <!-- /.order__input-group -->
              <textarea
                id="deliveryArea"
                v-if="isDelivery"
                cols="30"
                rows="10"
                class="message order__message"
                name="message"
                placeholder="Адрес доставки"
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
                Подтвердить
              </button>
              <span class="order__info">* - обязательное поле</span>
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
  // Маска номера телефона
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
          required: "Пожалуйста укажите ваше имя",
          minlength: "Минимальная длина поля 2 символа",
        },
        phone: {
          required: "Пожалуйста укажите ваш номер телефона",
          minlength: "Минимальная длина поля 10 символов",
        },
        email: {
          required: "Пожалуйста укажите ваш email",
          email: "Формат email - name@domain.com",
        },
      },
    });
  });

});