<script setup>
	const emit = defineEmits(['update:modelValue']);

const {fieldName, type, modelValue} = defineProps({
	type: String,
	fieldName: String,
	modelValue: String
})

</script>

<template>
	<div class="field" data-cy="BodyField">
		<label 
			class="label" 
			:for="`${type}-${fieldName}`"
		> 
			Write {{type}} {{ fieldName }} 
		</label>
		<div class="control">
			<textarea
				:id="`${type}-${fieldName}`"
				:name="fieldName"
				:placeholder="`${type} ${fieldName}`"
				class="textarea"
				:class="{'is-danger': false}"
				:value="modelValue"
				@input="emit('update:modelValue', $event.target.value)"
			></textarea>
		</div>

		<p v-if="false" class="help is-danger" data-cy="ErrorMessage">error text</p>
	</div>
</template>