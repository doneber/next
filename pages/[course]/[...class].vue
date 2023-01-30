<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useSeens } from '@/stores/seens'

const { path } = useRoute()
const seens = useSeens()
const parentPath = path.split('/').slice(0, -1).join('/')

const { navigation } = await queryContent(parentPath).findOne()
const authorData = { ...navigation.author }
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
      <ClassSideBar :path="parentPath" />
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