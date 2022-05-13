<template>
  <form
    @submit.prevent
    action=""
    class="form-good"
    :class="[form - good, { opened: showMobileMenu }]"
  >
    <div class="wrapper">
      <p class="input-field">
        <label must class="form-good__name" for="gname"
          >Наименование товара</label
        >
        <input
          @input="startValidate"
          :class="{ input_error: v$.name.$errors.length }"
          v-model="state.name"
          class="input"
          type="text"
          id="name"
          name="name"
          placeholder="Наименование товара"
        />
        <!-- Name error -->
        <!-- Повесить анимацию появления на ошибку -->
        <span
          :class="{ error: v$.name.$errors.length }"
          v-if="v$.name.$error"
          >{{ v$.name.$errors[0].$message }}</span
        >
      </p>
      <p class="input-field">
        <label must class="form-good__descr" for="descr">Описание товара</label>
        <textarea
		@input="startValidate"
          :class="{ highlight: v$.descr.$errors.length }"
          rows="10"
          cols="20"
          wrap="hard"
          v-model="state.descr"
          type="text"
          id="descr"
          name="descr"
          placeholder="Введите описание товара"
        />
        <span
          :class="{ error: v$.descr.$errors.length }"
          v-if="v$.descr.$error"
          >{{ v$.descr.$errors[0].$message }}</span
        >
      </p>

      <p class="input-field">
        <label must class="form-good__link" for="glink"
          >Ссылка на изображение товара</label
        >
        <input
          @input="startValidate"
          :class="{ input_error: v$.imgLink.$errors.length }"
          v-model="state.imgLink"
          type="text"
          id="imgLink"
          name="imgLink"
          placeholder="Введите ссылку"
        />
        <!-- Link error -->
        <!-- Повесить анимацию появления на ошибку -->
        <span
          :class="{ error: v$.imgLink.$errors.length }"
          v-if="v$.imgLink.$error"
          >{{ v$.imgLink.$errors[0].$message }}</span
        >
      </p>

      <p class="input-field input-field__">
        <label must class="form-good__price" for="gprice">Цена товара</label>
        <input
          @input="startValidate"
          :class="{ input_error: v$.price.$errors.length }"
          v-model="state.price"
          class="input"
          id="price"
          name="price"
          placeholder="Введите цену"
        />
        <!-- Link error -->
        <!-- Повесить анимацию появления на ошибку -->
        <span
          :class="{ error: v$.price.$errors.length }"
          v-if="v$.price.$error"
          >{{ v$.price.$errors[0].$message }}</span
        >
      </p>
      <button
        @click="handleAddClick"
        :class="{ correct: formIsCorrect }"
        class="form-good__add"
        type="button"
      >
        Добавить товар
      </button>
    </div>
  </form>
</template>

<script>
import { computed, onMounted, onUpdated, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  helpers,
  minLength,
  maxLength,
  numeric,
} from "@vuelidate/validators";
import { useStore } from "vuex";
import _ from "lodash";
export default {
  setup({ closeMobileMenu }) {
    let formIsCorrect = ref(false);
    const initialState = () => ({
      name: "",
      descr: "",
      imgLink: "",
      price: "",
    });
    const store = useStore();
    const state = ref(initialState());

    // Кастомные валидаторы
    const correctImgLink = () => () =>
      /(?=\w)([\w\/]+(?:.png|.jpg|.jpeg|.gif))|([.\~\-\:\w\/]+(?:.png|.jpg|.jpeg‌​|.gif))/.test(
        state.value.imgLink
      );

    // Правила валидирования
    const rules = computed(() => ({
      name: {
        required: helpers.withMessage("Поле является обязательным!", required),
        // nameCyrrilicLetters: helpers.withMessage("Только буквы русского алфавита!",nameCyrrilicLetters()),
        minLength: helpers.withMessage(
          "Название должно быть более 2 символов!",
          minLength(2)
        ),
        maxLength: helpers.withMessage(
          "Название должно быть не более 40 символов",
          maxLength(40)
        ),
      },
      descr: {
        required: helpers.withMessage("Поле является обязательным!", required),
        minLength: helpers.withMessage(
          "Описание должно быть более 10-ти символов!",
          minLength(10)
        ),
        maxLength: helpers.withMessage(
          "Описание не должно превышать 70-ти символов!",
          maxLength(70)
        ),
      },
      imgLink: {
        required: helpers.withMessage("Поле является обязательным!", required),
        correctImgLink: helpers.withMessage(
          "Это не похоже на ссылку!",
          correctImgLink("")
        ),
      },
      price: {
        required: helpers.withMessage("Поле является обязательным!", required),
        numeric: helpers.withMessage(
          "Цена должна содержать только цифры!",
          numeric
        ),
        minLength: helpers.withMessage(
          "Цена должна быть более 2 символов!",
          minLength(2)
        ),
      },
    }));

    const v$ = useVuelidate(rules, state);
	console.log(v$);

    const clearForm = () => {
      state.value = {
        ...initialState(),
      };
      v$.value.$reset();
    };

    const addGood = () => {
      if (formIsCorrect.value) {
        closeMobileMenu(false);
        store.dispatch("addProductToCart", state.value);
        store.dispatch("sortProducts");
        clearForm();
      }
    };

    const handleAddClick = () => {
	  const formFields = Object.keys(state.value);
	  for (let i = 0; i < formFields.length; i ++) {
		  v$.value[formFields[i]].$validate();
		  if (v$.value[formFields[i]].$errors.length) {
			  return;
		  }
	  }
	  // Ошибок нет - товар добавляется в корзину
	  if (!v$.value.$errors.length) {
		  addGood();
	  }
    };


	const startValidate =  function({ target: { id } }) {
      if (!id) {
        // клик по неактивной кнопке - валидация всей формы
        this.v$.$validate();
      } else {
        // клик по инпуту
        this.v$[id].$validate();
      }
    };

    onUpdated(() => {
      formIsCorrect.value =
        Boolean(!v$.value.$errors.length) &&
        Object.values(state.value).every((val, i) => (i !== 1 ? val : true));
    });
    return {
      state,
      formIsCorrect,
      v$,
      handleAddClick,
	  startValidate
    };
  },
  props: ["showMobileMenu", "closeMobileMenu"],
};
</script>

<style lang="scss" scoped>
@import "../scss/_const.scss";

.input-field {
  margin-bottom: 1rem;
  position: relative;
  &__ {
    margin-bottom: 1.5rem;
  }
}
.error {
  position: absolute;
  bottom: -15px;
  // подредачить отступ снизу
  font-size: 0.5rem;
  font-weight: 400;
  color: $errorColor;
  display: block;
}

.form-good {
  position: sticky;
  top: 0;
  transition: all $transition;
  max-width: 332px;
  padding: 1.5rem;
  margin-right: 1rem;
  align-self: flex-start;
  background: $whiteBlockColor;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  &__add {
    transition: $transition;
    font-family: "Inter", serif;
    width: 100%;
    padding: 0.625rem;
    background: #eeeeee;
    border-radius: 10px;
    color: $placeholderColor;
    font-size: 0.75rem;
    font-weight: 600;
    &.correct {
      background: $successColor;
      color: white;
      cursor: pointer;
      &:hover {
        background: darken($successColor, 10);
      }
    }
  }
  & label {
    display: block;
    font-size: 0.625rem;
    color: $formTitleColor;
    display: inline-block;
    margin-bottom: 4px;
    &[must] {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: $errorColor;
        top: 0;
        right: -5px;
        border-radius: 100%;
      }
    }
  }
  & input {
    padding: 0.625rem 6.56rem 0.625rem 1rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  & input,
  textarea {
    font-family: "Source Sans Pro", serif;
    font-size: 0.75rem;
    color: $goodColor;
    width: 100%;
    border: 0;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    // margin-bottom: 1rem;
    &::placeholder {
      font-size: 0.75rem;
      color: $placeholderColor;
      font-weight: 400;
    }
  }
  & textarea {
    height: 108px;
    border: 1px solid transparent;
    resize: none;
    word-break: break-all;
    padding: 0.625rem 8rem 0.625rem 1rem;
    &.highlight {
      border: 1px solid $errorColor;
    }
  }
  & > * {
    display: block;
  }
}
input.input {
  &_error {
    border: 1px solid $errorColor;
  }
}
@media screen and (max-width: $mobileMenuAppear) {
  .form-good {
    // display: none;
    position: fixed;
    top: 0;
    left: 0;
    transition: $transition;
    z-index: 15;
    transform: translate(-100%, -100%);
    // transform: translate(0);
    // &:hover{
    // }
    // display: none;
    &.opened {
      transform: translate(0);
    }
  }
}
</style>