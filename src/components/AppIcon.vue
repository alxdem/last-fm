<script>
export default {
  name: 'AppIcon',
  props: {
    name: String,
  },
};
</script>

<template>
  <div class="app-icon">
    <svg v-if="name === 'arrow'" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 26a1 1 0 0 1-.71-.29l-9-9a1 1 0 0 1 0-1.42l9-9a1 1 0 1 1 1.42 1.42L5.41 16l8.3
         8.29a1 1 0 0 1 0 1.42A1 1 0 0 1 13 26Z"
        fill="currentColor"
      />
      <path d="M28 17H4a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2Z" fill="currentColor"/>
      <path fill="none" d="M0 0h32v32H0z"/>
    </svg>

    <svg
      v-if="name === 'loader'"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 128 128"
      xml:space="preserve"
    >
      <g>
        <path
          d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128
          0h-9.75A54.25 54.25 0 0 0 64 9.75z"
          fill="currentColor"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="800ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>

    <svg
      v-if="name === 'no-image'"
      height="512"
      viewBox="0 0 512 512"
      width="512"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M368 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z"
            fill="currentColor"/>
      <path d="M452 64H60c-15.6 0-28 12.7-28 28.3v327.4c0 15.6 12.4 28.3 28 28.3h392c15.6 0 28-12.7
       28-28.3V92.3c0-15.6-12.4-28.3-28-28.3zM348.9 261.7c-3-3.5-7.6-6.2-12.8-6.2-5.1 0-8.7 2.4-12.8
        5.7L304.6 277c-3.9 2.8-7 4.7-11.5 4.7-4.3 0-8.2-1.6-11-4.1-1-.9-2.8-2.6-4.3-4.1L224
        215.3c-4-4.6-10-7.5-16.7-7.5-6.7 0-12.9 3.3-16.8 7.8L64 368.2V107.7c1-6.8 6.3-11.7
        13.1-11.7h357.7c6.9 0 12.5 5.1 12.9 12l.3 260.4-99.1-106.7z" fill="currentColor"/>
    </svg>
  </div>
</template>
