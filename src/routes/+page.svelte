<script>
    import { Header, Social } from "$lib/components";
</script>

<Header />
<main>
    <img src="profile.png" alt="profile" />
    <Social colorful list size="3.125rem" />
</main>

<style lang="scss">
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 4rem;
    }

    img {
        height: 16rem;

        border: 4px solid hsl(var(--secondary));
        border-radius: 1rem;

        box-shadow: 0 0 12px hsla(var(--secondary), 60%);
    }

    :global(.social) {
        font-size: 2rem;
    }
</style>