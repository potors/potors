<script>
    import { Header, Social } from "$lib/components";
    import { ReadCvLogo as Resume } from "phosphor-svelte";
</script>

<!-- TODO: fix resume workaround -->

<Header />
<main>
    <img src="profile_x1024.png" alt="profile" />
    <Social colorful list size="3.125rem" />

    <div class="social">
        <a href="/resume.html" class="colorful" style:--color="200, 75%, 70%">
            <Resume size="3.125rem" />
            Currículo
        </a>
    </div>
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


    .social {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 1.175rem;

        a {
            display: flex;
            align-items: start;
            justify-content: center;
            gap: 0.5rem;

            color: hsl(var(--foreground));

            &.colorful :global(svg) {
                color: hsl(var(--color));
            }

            text-decoration: underline;
            text-decoration-thickness: 0.175em;
            text-decoration-color: hsla(var(--color), 25%);

            transition: 100ms ease-in-out;

            &:hover {
                :global(svg) {
                    color: hsl(var(--color));
                }

                filter: drop-shadow(0 0 4px hsla(var(--color), 70%));
            }
        }
    }
</style>