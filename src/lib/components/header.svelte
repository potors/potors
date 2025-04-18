<script lang="ts">
    import { IconContext, GithubLogo, InstagramLogo, TelegramLogo, At } from "phosphor-svelte";
</script>

<header>
    <h1>
        <a href="/">pitol.dev</a>
    </h1>
    <IconContext values={{ size: "1.70rem" }}>
        <nav>
            <ul>
                <li>
                    <a href="https://github.com/potors">
                        <GithubLogo />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/pitol.dev">
                        <InstagramLogo />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/powtors">
                        <TelegramLogo />
                    </a>
                </li>
                <li>
                    <a href="mailto:contact@pitol.dev">
                        <At />
                    </a>
                </li>
            </ul>
        </nav>
    </IconContext>
</header>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0.75rem 1.25rem;

        border-bottom: 1px solid hsl(var(--dark));
    }

    h1 {
        font-size: 2.125em;
        text-align: center;

        a {
            text-decoration: underline;
            text-decoration-color: hsl(var(--primary));
        }
    }

    a {
        text-decoration: none;
        color: inherit;

        transition: 100ms ease-in-out;

        &:hover, &:focus {
            text-decoration: underline;
            text-decoration-color: hsl(var(--secondary));

            text-shadow:
                0 0 6px hsl(var(--secondary)),
                0 0 1px hsl(var(--secondary));
        }
    }

    nav {
        ul {
            display: flex;
            gap: 1rem;

            list-style: none;
        }

        li {
            display: flex;
        }

        a {
            display: inherit;

            color: hsl(var(--foreground));

            transition: 100ms ease-in-out;

            &:hover, &:focus {
                background: radial-gradient(circle at center, hsla(var(--secondary), 40%), transparent 75%),
                            radial-gradient(circle at center, hsla(var(--secondary), 40%), transparent 55%);

                transform: scale(1.05);
            }
        }
    }
</style>