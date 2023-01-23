<script setup lang="ts">

/**
* Retorna una oración aleatoria de palabras.
* Sirve para simular contenido de en cursos que estan en borrador.
* @param {number} minWords - Cantidad mínima de palabras.
* @param {number} maxWords - Cantidad máxima de palabras.
* @return {string} La oración aleatoria.
*/

const randomSentence = (minWords: number, maxWords: number): string => {
    const words = ['de', 'la', 'que', 'el', 'en',
        'y', 'a', 'que', 'solo', 'han',
        'hay', 'vez', 'puede', 'todos']
    const num = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords
    let sentence = ''
    for (let i = 0; i < num; i++) {
        const word = words[Math.floor(Math.random() * words.length)]
        sentence += word + ' '
    }
    return sentence
}
</script>
<template>
    <section class="container">
        <h2>Lista de Re-Cursos:</h2>
        <ContentNavigation v-slot="{ navigation }">
            <ul class="card-wrapper">
                <template v-for="link of navigation" :key="link._path">
                    <li v-if="!link?.draft">
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
                    <li v-else class="card-draft-container">
                        <div class="card">
                            <header>
                                <h3>{{ randomSentence(7, 8) }}</h3>
                                <p class="icon">❔</p>
                            </header>
                            <p>{{ randomSentence(20, 24) }}</p>
                        </div>
                        <div class="glass"></div>
                    </li>
                </template>
            </ul>
        </ContentNavigation>
    </section>
</template>

<style scoped>
section {
    padding: 4rem 0;
}

h2 {
    text-align: center;
}

.card-wrapper {
    margin: 2rem 0;
    padding: 0;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.card {
    display: flex;
    gap: 6px;
    flex-direction: column;
    height: 100%;
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

.card header h3 {
    font-size: 1.5rem;
    font-weight: 500;
}

.card:hover {
    background: var(--card-bg-color-hover);
}

.card-draft-container {
    position: relative;
    height: 100%;
    min-height: 180px;
    border-radius: 12px;
}

.card-draft-container .card {
    width: 100%;
    height: 100%;
    border: 1px solid var(--card-bg-color);
    background: var(--card-bg-color-hover);
}

.glass {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.glass::after {
    content: 'Coming soon 🚧';

    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;


    font-size: 1.9rem;
    font-weight: 500;
    color: #eee;
    text-shadow: 1px 1px 2px rgb(0 0 0 /.5), 0 0 1em rgb(0 0 0 /.5), 0 0 0.2em rgb(0 0 0 /.5);
}

.icon {
    margin: 0;
    font-size: xx-large;
}
</style>
