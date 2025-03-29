<script setup lang="ts">
import { Field } from "vee-validate";
import ErrorMessage from "./ErrorMessage.vue";
import "../assets/Input.scss";
import { RegisterSchema } from "../composable/schema/schema";
import { LoginSchema } from "../composable/schema/schema";

interface Props {
  name: string;
  schema: typeof RegisterSchema | typeof LoginSchema;
}
defineProps<Props>();
</script>

<template>
  <Field :name="name" type="input" :rules="schema" class="input" />
  <ErrorMessage :name="name" />
</template>
