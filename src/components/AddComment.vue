<script setup>
import { ref } from 'vue';
import InputField from './InputField.vue';
import TextAreaField from './TextAreaField.vue';

const name = ref('');
const email = ref('');
const body = ref('');
const emit = defineEmits(['submit', 'reset'])

const submitData = () => {
	emit('submit', {name: name.value, email: email.value, body: body.value});
	
	name.value = '';
	body.value = '';
	email.value = '';
}

const resetForm = () => {
	emit('reset')
	name.value = '';
	body.value = '';
	email.value = '';
}

</script>

<template>
	<form @submit.prevent="submitData">
		<InputField fieldName="name" type="comment" v-model="name"/>
		<InputField fieldName="email" type="comment" v-model="email"/>
		<TextAreaField fieldName="body" type="comment" v-model="body"/>

		<div class="field is-grouped">
			<div class="control">
			<button type="submit" class="button is-link">Add comment</button>
			</div>
			<div class="control">
			<button @click="resetForm" type="reset" class="button is-link is-light">Cancel</button>
			</div>
		</div>
	</form>
</template>