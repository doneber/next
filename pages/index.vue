<template>
    <main>
        <section class="banner">
            <h1><span class="title">Next</span> <span class="thin-weight">Project</span></h1>
            <p>Bienvenido al proyecto <span class="title">Next</span>, donde encontrarás re-cursos espectaculares!</p>
        </section>
        <CourseList />
    </main>
</template>
<style scoped>
    h1 {
        font-size: 5rem;
        font-weight: bolder;
    }
    p {
        font-size: 1.3rem;
    }
    section.banner {
        display: grid;
        place-content: center;
        height: 55vh;
        padding: 0 var(--horizontal-page-separation);
        /* background-color: rgb(51, 56, 68); */
        text-align: center;
    }
</style>