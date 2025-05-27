<script setup>
const emit = defineEmits(['update:modelValue']);

const {fieldName, placeholder, type, modelValue} = defineProps({
	fieldName: String,
	type: String,
	modelValue: String
})
</script>

<template>
	<div class="field" data-cy="NameField">
		<label class="label" :for="`${type}-author-name-${fieldName}`">
			{{ fieldName }}
		</label>
		<div class="control has-icons-left has-icons-right">
			<input
				type="text"
				:name="fieldName"
				:id="`${type}-author-name-${fieldName}`"
				:placeholder="`Enter ${type}`"
				class="input"
				:class="{'is-danger': false}"
				:value="modelValue"
				@input="emit('update:modelValue', $event.target.value)"
			/>
			<span class="icon is-small is-left">
				<i class="fas fa-user"></i>
			</span>

			<span
				class="icon is-small is-right"
				:class="{'has-text-danger': false}"
				data-cy="ErrorIcon"
			>
				<i class="fas fa-exclamation-triangle"></i>
			</span>
		</div>

		<p v-if="false" class="help is-danger" data-cy="ErrorMessage">error text</p>
	</div>
</template>