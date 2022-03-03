<template>
	<form @submit.prevent action="" class="form-good"
	:class="[form-good, {opened: showMobileMenu}]"
	>
		<div class="wrapper">
			<p class="input-field">
			<label must class="form-good__name" for="gname">Наименование товара</label>
			<input @focus.once="startValidate"  :class="{ input_error: v$.name.$errors.length }" v-model="state.name" class="input" type="text" id="gname" name="gname" placeholder="Наименование товара">
			<!-- Name error -->
			<!-- Повесить анимацию появления на ошибку -->
			<span :class="{ error: v$.name.$errors.length }" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
			</p>
			
			<label class="form-good__descr" for="gdescr">Описание товара</label>
			<textarea rows="10" cols="20" wrap="hard" v-model="state.descr"  type="text" id="gdescr" name="gdescr" placeholder="Введите описание товара"/>
			
			<p class="input-field">
				<label must class="form-good__link" for="glink">Ссылка на изображение товара</label>
			<input @focus.once="startValidate" :class="{ input_error: v$.imgLink.$errors.length }" v-model="state.imgLink" type="text" id="glink" name="link" placeholder="Введите ссылку">
			<!-- Link error -->
			<!-- Повесить анимацию появления на ошибку -->
			<span :class="{ error: v$.imgLink.$errors.length }" v-if="v$.imgLink.$error">{{ v$.imgLink.$errors[0].$message }}</span>
			</p>

			<p class="input-field">
			<label must class="form-good__price" for="gprice">Цена товара</label>
			<input @focus.once="startValidate" :class="{ input_error: v$.price.$errors.length }" v-model="state.price" class="input" id="gprice" name="gprice" placeholder="Введите цену">
			<!-- Link error -->
			<!-- Повесить анимацию появления на ошибку -->
			<span :class="{ error: v$.price.$errors.length }" v-if="v$.price.$error">{{ v$.price.$errors[0].$message }}</span>
			</p>
			<button @click.once="startValidate" @click="addGood" :class="{correct: state.formIsCorrect}" class="form-good__add" type="button">Добавить товар</button>
		</div>
	</form>
</template>

<script>
import { computed, ref } from "vue"
import useVuelidate from "@vuelidate/core"
import {required, helpers, minLength,maxLength,numeric} from "@vuelidate/validators"
import { useStore } from 'vuex'

export default {
	setup(props){
		const initialState = () => ({
			formIsCorrect: false,
			name: "",
			descr: "",
			imgLink: "",
			price: ""
		})
		const store = useStore()
		const state = ref(initialState())

		const addGood = () => {
			if(state.value.formIsCorrect){
				props.closeMobileMenu(false)
				store.dispatch("addProductToCart",state.value)
				store.dispatch("sortProducts")
			}
			 }

	// Кастомные валидаторы
	const nameCyrrilicLetters = () => () => /^[а-я ]+$/msiu.test(state.value.name) 
	const correctImgLink = () => () => /(?=\w)([\w\/]+(?:.png|.jpg|.jpeg|.gif))|([.\~\-\:\w\/]+(?:.png|.jpg|.jpeg‌​|.gif))/.test(state.value.imgLink)

		const rules = computed(() => ({
			name: {
				required: helpers.withMessage("Поле является обязательным!", required),
				nameCyrrilicLetters: helpers.withMessage("Только буквы русского алфавита!",nameCyrrilicLetters()),
				minLength: helpers.withMessage("Название должно быть более 2 символов!", minLength(2)),
				maxLength: helpers.withMessage("Название должно быть не более 40 символов", maxLength(40)),
			},
			imgLink: { required: helpers.withMessage("Поле является обязательным!", required),
			correctImgLink: helpers.withMessage("Это не похоже на ссылку!", correctImgLink(""))
			 },
			price: { required: helpers.withMessage("Поле является обязательным!", required),
			numeric: helpers.withMessage("Цена должна содержать только цифры!",numeric),
			minLength: helpers.withMessage("Цена должна быть более 2 символов!", minLength(2)),
			 }	
		}))
		
		const v$ = useVuelidate(rules,state)

		return { 
			state,
		 	v$,
			addGood,

		}
	},
	props: ['showMobileMenu','closeMobileMenu'],
	updated(){ // при обновлении формы обновляю её корректность 
		this.state.formIsCorrect = Boolean(!this.v$.$errors.length)
	},
	methods: {
		startValidate(){ // запускается один раз и включает валидацию на форм
			this.v$.$validate()
		},
		
	},
}
</script>

<style lang="scss" scoped>
	@import "../scss/_const.scss";
	.input-field{
		margin-bottom: 1rem;
		position: relative;
	}
	.error{
		position: absolute;
		bottom: -15px;
		// подредачить отступ снизу
		font-size: .5rem;
		font-weight: 400;
		color: $errorColor;
		display: block;
	}



	.form-good{
		transition: all $transition;
		max-width: 332px;
		padding: 1.5rem;
		margin-right: 1rem;
		align-self: flex-start;
		background: $whiteBlockColor;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		&__add{
			transition: $transition;
			width: 100%;
			padding: .625rem;
			background: #EEEEEE;
			border-radius: 10px;
			color: $placeholderColor;
			font-size: .75rem;
			font-weight: 600;
			&.correct{
				background: $successColor;
				color: white;
				cursor: pointer;
				&:hover{
					background: darken($successColor,10);
				}
			}
		}
		& label{
			display: block;
			font-size: .625rem;
			color: $formTitleColor;
			display: inline-block;
			margin-bottom: 4px;
			&[must]{
				position: relative;
				&::after{
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
		& input{
			padding: .625rem 0 .625rem 1rem;
			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
-webkit-appearance: none;
}
			
		}
		& textarea{
			height: 108px;
			resize: none;
			word-break: break-all;
		}
		& input,textarea{
			font-family: "Source Sans Pro", serif;
			font-size: 0.75rem;
			color: $goodColor;
			width: 100%;
			border: 0;
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			padding: 10px 0 11px 1rem;
			// margin-bottom: 1rem;
			&::placeholder{
				font-size: .75rem;
				color: $placeholderColor;
				font-weight: 400;
			}
		}
		& > * {
			display: block;
		}
	}
	input.input{
		&_error{
			border: 1px solid $errorColor;
		}
	}
	@media screen and (max-width: $mobileMenuAppear){
			.form-good {
				// display: none;
				position: fixed;
				top: 0;
				left: 0	;
				transition: $transition;
				z-index: 5;
				transform: translate(-100%,-100%);
				// transform: translate(0);
				// &:hover{
				// }
				// display: none;
				&.opened{
					transform: translate(0);
				}
			}
		}
</style>