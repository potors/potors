<script lang="ts">
    import {
        GithubLogo as Github,
        TelegramLogo as Telegram,
        InstagramLogo as Instagram,
        At as Email,
        Coffee as Kofi,
    } from "phosphor-svelte";

    const contacts = {
        "github": { icon: Github, at: "potors", site: "https://github.com/", color: "210, 100%, 100%" },
        "telegram": { icon: Telegram, at: "pitol_dev", site: "https://t.me/", color: "200, 90%, 50%" },
        "instagram": { icon: Instagram, at: "pitol.dev", site: "https://instagram.com/", color: "330, 75%, 60%" },
        "email": { icon: Email, at: "me@pitol.dev", site: "mailto:", color: "120, 55%, 50%" },
        "kofi": { icon: Kofi, at: "pitoldev", site: "https://ko-fi.com/", color: "40, 100%, 50%" },
    };


    const { list, compact, colorful, hide = [], size = "1.5rem" }: {
        list?: boolean,
        compact?: boolean,
        colorful?: boolean,
        hide?: (keyof typeof contacts)[],
        size?: string,
    } = $props();

    for (const key of hide) {
        delete contacts[key];
    }
</script>

<div class="social" style:flex-direction={list ? "column" : "row"}>
    {#each Object.values(contacts) as contact}
        <a href={contact.site + contact.at} class={colorful ? "colorful" : ""} style:--color={contact.color}>
            <contact.icon {size} />
            {#if !compact}
                {contact.at}
            {/if}
        </a>
    {/each}
</div>

<style lang="scss">
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