<template>
  <div class="root">
    <h2>Create an Account</h2>
    <p>
      <input readonly onfocus="this.removeAttribute('readonly')" v-model="state.email" type="text" placeholder="Email" />
    </p>
	<div v-for="error of v$.email.$errors" :key="error.$uid">
		<span>
		{{ error.$message }}
	</span>
	</div>

    <p>
      <input type="password" v-model="state.password.password" placeholder="Password"/>
    </p>
	<div v-for="error of v$.password.$errors" :key="error.$uid">
		<span>
		{{ error.$message }}
	</span>
	</div>
    <p>
      <input v-on:input="input" v-model="state.password.confirm" type="password" placeholder="Confirm Password" />
    </p>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
import { reactive, computed } from "vue"
import useValidate from "@vuelidate/core"
import { email, required, minLength, sameAs,helpers } from "@vuelidate/validators"
export default {
	setup(){
		const state = reactive({
			email: '',
			password: {
				password: '',
				confirm: ''
			}
		})

		const mustBeLearnVue = value => value.includes("learnvue")

		const rules = computed(() => ({
			email: { 
				required: helpers.withMessage("Поле является обязательным",required),
				email,
				mustBeLearnVue: helpers.withMessage("Error msg",mustBeLearnVue) },
			password: {
				password: {
					password: { required, minLength: minLength(6) },
					confirm: { required, sameAs: sameAs(state.password.password) }
				}
			}
		}))
		const v$ = useValidate(rules,state)
		return { state, v$ }
	},
	methods: {
		input(){
			console.log("Input!");
		},
		submitForm(){
			this.v$.$validate()
		}
	}
};
</script>

<style lang="css">
.root {
    width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    margin-top: 100px;
    border-radius: 20px;
}

input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
}

button {
    background-color: #3498db;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    color: white;
}
</style>