<script setup>
import { ref } from 'vue';
import InputField from './InputField.vue';
import TextAreaField from './TextAreaField.vue';

const title = ref('');
const body = ref('');
const emit = defineEmits(['submit'])

const submitData = () => {
	console.log(title.value, body.value)
	emit('submit', {title: title.value, body: body.value});
	
	title.value = '';
	body.value = '';
}
</script>

<template>
	<div class="content">
		<h2>Create new post</h2>

		<form @submit.prevent="submitData">
			<InputField fieldName="title" type="post" v-model="title"/>
			<TextAreaField fieldName="body" type="post" v-model="body"/>

			<div class="field is-grouped">
				<div class="control">
				<button type="submit" class="button is-link">Save</button>
				</div>
				<div class="control">
				<button type="reset" class="button is-link is-light">Cancel</button>
				</div>
			</div>
		</form>
	</div>
</template>