<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";
import "../assets/Input.scss";
import { useRegisterSchema } from "../composable/schema/useFormSchema";
import { useLoginSchema } from "../composable/schema/useFormSchema";

interface Props {
  name: string;
  schema: typeof useRegisterSchema | typeof useLoginSchema;
}
defineProps<Props>();
</script>

<template>
  <Field :name="name" type="input" :rules="schema" class="input" />
  <ErrorMessage :name="name" />
</template>
