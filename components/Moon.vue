<script setup lang="ts">
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const { data } = await useFetch(
  `https://www.icalendar37.net/lunar/api/?lang=en&month=${month}&year=${year}&day=${day}`
);
const parsedJson = JSON.parse(data.value);
const phase = parsedJson.phase[day];
function formatMoonName(phase) {
  const phaseLighting = phase.lighting;
  const phaseName = phase.phaseName.toLowerCase();
  const formattedPhase = {
    phaseName: phaseName,
    phaseClass: "",
  };
  if (phaseName.includes("waxing") || phaseName.includes("waning")) {
    if (phaseLighting > 50) {
      formattedPhase.phaseClass = `${phaseName}-gibbous`;
    } else {
      formattedPhase.phaseClass = `${phaseName}-crescent`;
    }
  } else {
    formattedPhase.phaseClass = phaseName.replace(" ", "-");
  }

  return formattedPhase;
}
</script>

<template>
  <div class="text-white flex flex-col items-center justify-center">
    <p>Today's Moon</p>
    <div class="moon" :class="formatMoonName(phase).phaseClass">
      <div class="disc" :class="formatMoonName(phase).phaseClass"></div>
    </div>
    <p>{{ formatMoonName(phase).phaseName }}</p>
  </div>
</template>

<style>
.moon {
  width: 50px;
  height: 50px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  transform: translateZ(0);
}
.moon::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #222;
  width: 50%;
  height: 100%;
}

.disc {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
}
.disc::before,
.disc::after {
  content: " ";
  display: block;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 4s;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.disc::before {
  background-color: #222;
}
.disc::after {
  background-color: #fff;
  transform: rotateY(180deg);
}

/* First Quarter */
.disc.first-quarter {
  transform: rotateY(90deg);
}

.moon.first-quarter::before {
  left: 0;
}

/* Waxing Gibbous */
.disc.waxing-gibbous {
  transform: rotateY(245deg);
}

.moon.waxing-gibbous::before {
  left: 0;
}

/* Full Moon */
.disc.full-moon {
  transform: rotateY(180deg);
}

.moon.full-moon::before {
  left: 50%;
  display: none;
}

/* Waning Gibbous */
.disc.waning-gibbous {
  transform: rotateY(115deg);
}

.moon.waning-gibbous::before {
  left: 50%;
}

/* Last Quarter */
.disc.last-quarter {
  transform: rotateY(90deg);
}

.moon.last-quarter::before {
  left: 50%;
}

/* Waning Crescent */
.disc.waning-crescent {
  transform: rotateY(50deg);
}

.moon.waning-crescent::before {
  left: 50%;
}

/* New Moon */
.disc.new-moon {
  transform: rotateY(360deg);
}

.moon.new-moon::before {
  left: 0;
}

/* Waxing Crescent */
.disc.waxing-crescent {
  transform: rotateY(310deg);
}

.moon.waxing-crescent::before {
  left: 0;
}
</style>
