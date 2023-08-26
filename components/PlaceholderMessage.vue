<script lang="ts" setup></script>

<template>
  <div class="flex gap-4 rounded-xl p-4 bg-violet-100">
    <Logo class="h-12 w-12" />
    <div class="flex flex-col text-left">
      <p class="text-sm font-medium text-black">Astro</p>
      <div class="dot-falling"></div>
    </div>
  </div>
</template>

<style scoped>
.dot-falling {
  position: relative;
  left: -9984px;
  top: 15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  box-shadow: 9999px 0 0 0 #9880ff;
  animation: dot-falling 1s infinite linear;
  animation-delay: 0.1s;
}
.dot-falling::before,
.dot-falling::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-falling::before {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: dot-falling-before 1s infinite linear;
  animation-delay: 0s;
}
.dot-falling::after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: dot-falling-after 1s infinite linear;
  animation-delay: 0.2s;
}

@keyframes dot-falling {
  0% {
    box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9999px 0 0 0 #9880ff;
  }
  100% {
    box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
  }
}
@keyframes dot-falling-before {
  0% {
    box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9984px 0 0 0 #9880ff;
  }
  100% {
    box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
  }
}
@keyframes dot-falling-after {
  0% {
    box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 10014px 0 0 0 #9880ff;
  }
  100% {
    box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
  }
}
</style>
