<script lang="ts">
    import { Social } from "$lib/components";

    let { simple }: {
        simple?: boolean;
    } = $props();
</script>

<header>
    <h1><a href="/">pitol.dev</a></h1>
    {#if !simple}
        <Social compact size="1.75rem" hide={["instagram", "kofi"]} />
    {/if}
</header>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0.75rem 1.25rem;

        border-bottom: 1px solid hsla(var(--dark));
    }

    h1 {
        font-size: 2.125em;
        text-align: center;
    }

    a {
        transition: 100ms ease-in-out;

        &:hover, &:focus {
            text-decoration-color: hsl(var(--secondary));

            text-shadow:
                0 0 6px hsl(var(--secondary)),
                0 0 1px hsl(var(--secondary));
        }
    }

    @media only screen and (max-width: 768px) {
        header {
            justify-content: center;

            > :global(:not(:first-child)) {
                display: none;
            }
        }
    }
</style>