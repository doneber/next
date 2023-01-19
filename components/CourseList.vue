<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
<template>
    <h2>Lista de Recursos:</h2>
    <ContentNavigation v-slot="{ navigation }">
        <ul>
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
</template>

<style scoped>
ul {
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
    background: radial-gradient(rgb(30, 30, 32), rgb(28, 28, 30));
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
}

.card header {
    display: flex;
    justify-content: space-between;
}

.card:hover {
    background: rgb(32, 32, 34);
}

.icon {
    margin: 0;
    font-size: xx-large;
}
</style>
