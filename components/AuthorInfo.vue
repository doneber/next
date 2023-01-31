<script setup>
const props = defineProps({
    author: {
        type: Object,
        default: () => ({
            name: 'Anónimo',
            url: '#',
        }),
    },
})

</script>

<template>
  <div class="author-info">
    <span class="author-icon">
      <svg
        fill="none"
        viewBox="0 0 24 24"
      >
        <g
          stroke="var(--text-second-color)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.8"
        >
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM21 22c0-4-4-7-9-7s-9 3-9 7" />
        </g>
      </svg>
    </span>
    <a
      class="author-name"
      :href="props.author.url || '#'"
    >
      {{ props.author.name || 'Anónimo' }}
    </a>
  </div>
</template>
<style scoped>
.author-info {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 32px;
}

.author-icon {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
}

.author-name {
    font-size: 1.2rem;
    color: var(--text-second-color);
}
</style>
