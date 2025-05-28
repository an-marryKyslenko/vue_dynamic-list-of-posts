<script setup>
import { inject, ref, watch } from 'vue';
import InputField from './InputField.vue';
import TextAreaField from './TextAreaField.vue';

const activePost = inject('activePost');
const title = ref(activePost.value?.title || '');
const body = ref(activePost.value?.body || '');

const emit = defineEmits(['submit', 'reset'])

watch(() => activePost.value?.id, (val) => {
	if(!val) {
		title.value = '';
		body.value = '';
	}
})

const submitData = () => {
	emit('submit', {title: title.value, body: body.value});
	
	title.value = '';
	body.value = '';
}

const resetForm = () => {
	emit('reset');
	title.value = '';
	body.value = '';
}
</script>

<template>
	<div class="content">
		<h2>{{ activePost ? 'Edit post' : 'Create new post'}}</h2>

		<form @submit.prevent="submitData">
			<InputField fieldName="title" type="post" v-model="title"/>
			<TextAreaField fieldName="body" type="post" v-model="body"/>

			<div class="field is-grouped">
				<div class="control">
				<button type="submit" class="button is-link">Save</button>
				</div>
				<div class="control">
				<button @click="resetForm" type="reset" class="button is-link is-light">Cancel</button>
				</div>
			</div>
		</form>
	</div>
</template>