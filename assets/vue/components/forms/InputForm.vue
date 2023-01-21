<template>
    <div class="input-form">
        <label> {{ label }}</label>
        <div class="form">
            <input 
                :type="type"
                :disabled="disabled"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" 
                :placeholder="label"/>
        </div>
    </div>
    
</template>

<script setup>
    defineProps({
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    })
</script>

<style lang="scss">
    .input-form {
        margin-top: 1em;
        label {
            margin-left: 10px;
            font-size: 12px;
        }
        .form {
            background: var(--color-light);
            border-radius: var(--border-radius);
            padding: var(--search-padding);

            input {
                background: transparent;
                width: auto;
                margin-left: 1rem;
                font-size: .9rem;
                color: var(--color-dark);
            }
        }
    }
    
    
</style>