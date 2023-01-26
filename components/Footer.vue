<template>
    <footer>
        <div class="contacto">
            <p>¿Queres contactar?
                Escríbenos a <a href="mailto:doneber.dev@gmail.com">doneber.dev@gmail.com</a>
            </p>
        </div>
        <div class="links">
            <a href="https://discord.doneber.dev">Discord</a>
            <span>•</span>
            <a href="https://www.youtube.com/c/doneber?sub_confirmation=1">YouTube</a>
            <span>•</span>
            <a href="https://doneber.dev">Website</a>
            <span>•</span>
            <a href="https://github.com/doneber">GitHub</a>
        </div>
    </footer>
</template>
<style>
footer {
    position: sticky;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    height: var(--footer-height);
    padding: 32px 0;
    text-align: center;
}

footer p {
    margin: 0;
    font-size: .9rem;
}
footer p a {
    text-decoration: underline;
}

.links {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 12px;
}
</style>
