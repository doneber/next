<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <section class="banner">
      <h1><span class="title">Next</span> <span class="thin-weight">Project</span></h1>
      <p>
        Bienvenido al proyecto <span class="title">Next</span> donde encontrarás cursos y re-cursos de
        programación!
      </p>
      <a href="#re-cursos">
        Empieza aquí
        <svg
          viewBox="0 0 1024 1024"
          class="arrow-icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g
            id="SVGRepo_bgCarrier"
            stroke-width="0"
          />
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
              fill="#ffffff"
            />
          </g>
        </svg></a>
    </section>
    <CourseList id="re-cursos" />
  </main>
  <TheFooter />
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
    gap: .5rem;

    height: 85vh;
    padding-left: 0 var(--horizontal-page-separation);
    padding-bottom: 12vh;
    /* background-color: rgb(51, 56, 68); */
    text-align: center;
}

section.banner a .arrow-icon {
    width: 1.3rem;
    /* animation of arrow moving down */
    animation: arrow-down 1s infinite alternate;

}

@keyframes arrow-down {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(4px);
    }
}

section.banner a {
    display: grid;
    gap: 16px;
    grid-template-columns: auto 1fr;
    place-items: center;

    width: fit-content;
    margin: auto;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border: 2px solid transparent;
    border-radius: 0.5rem;

    background-color: var(--primary-color);
    font-size: 1.3rem;
}

section.banner a:hover {
    background-color: var(--primary-color);
}
</style>