<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useSeens } from '@/stores/seens'

const { path } = useRoute()
const parentPath = path.split('/').slice(0, -1).join('/')

const { navigation: currentFileNavigation } = await queryContent(parentPath).findOne()
const authorData = { ...currentFileNavigation.author }

/**
* Obtiene la información de la navegación de contenidos.
*/
const seens = useSeens()
const { data: navigation } = await useAsyncData(path, () => fetchContentNavigation(parentPath))
const currentCourse = navigation['_rawValue'].find(course => course._path === parentPath)
let lessonList = currentCourse.children.filter((item) => item._path !== parentPath)
lessonList.forEach(item => {
  const seen = seens.history.get(item._path) ? true : false
  item.seen = seen
});

// TODO: Actualizar el checkbox cuando se cambia el estado de visto
// watch(seens.history, async () => {
//   lessonList.forEach(item => {
//     const seen = seens.history.get(item._path) ? true : false
//     item.seen = seen
//   });
// })

/**
* El evento scroll se dispara para verificar
* si el usuario ha llegado al final de la página
*/

const scrolling = (e) => {
  const clientHeight = e.target.clientHeight
  const scrollHeight = e.target.scrollHeight
  const scrollTop = e.target.scrollTop

  if (scrollTop >= (scrollHeight - clientHeight - 130)) {
    if (!seens.history.get(path)) {
      seens.setSeen(path, true)
    }
  }
}
/**
* Dispara el evento scroll para 
* verificar si el usuario ha llegado al final de la página
* ni bien se carga la página
**/
const input = ref(null)
watchEffect(() => {
  if (input.value) {
    input.value.dispatchEvent(new Event("scroll"))
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
})

</script>
<template>
  <div class="wrapper">
    <main
      ref="input"
      class="rich-content"
      @scroll="scrolling"
    >
      <LessonList
        :path="parentPath"
        :lesson-list="lessonList"
      />
      <div class="container">
        <TheBreadcrumb />
        <AuthorInfo :author="authorData" />
        <ContentDoc />
        <!-- <TheFooter /> -->
      </div>
    </main>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  height: calc(100vh - var(--app-bar-height));
}

.rich-content {
  display: flex;
  overflow: auto;
}

@media (max-width: 900px) {
  .rich-content {
    flex-direction: column-reverse;
  }
}
</style>