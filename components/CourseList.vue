<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
<template>
    <section class="container">
        <h2>Lista de Recursos:</h2>
        <ContentNavigation v-slot="{ navigation }">
            <ul class="card-wrapper">
                <li v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path">
                        <div class="card">
                            <header>
                                <h3>{{ link.title }}</h3>
                                <p class="icon">{{ link.icon }}</p>
                            </header>
                            <p>{{ link.description }}</p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </section>
</template>

<style scoped>
.card-wrapper {
    padding: 0;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.card {
    display: flex;
    gap: 6px;
    flex-direction: column;
    padding: 32px;
    border-radius: 12px;
    border: 1px solid #2c2c31;
    background: var(--card-bg-color);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
}

.card header {
    display: flex;
    justify-content: space-between;
}

.card:hover {
    background: var(--card-bg-color-hover);
}

.icon {
    margin: 0;
    font-size: xx-large;
}
</style>
