<template>
  <transition name="t">
    <div
      class="toast-box fixed flex flex-center text-white ease-in-out duration-300"
      v-if="state.visible"
    >
      {{ props.text }}
    </div>
  </transition>
</template>

<script src="./index.ts" lang="ts"></script>
<style src="./index.sass" lang="sass" scoped></style>
