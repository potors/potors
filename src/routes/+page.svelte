<script lang="ts">
    import { Header } from "$lib/components";

    import { IconContext, Link, Star } from "phosphor-svelte";
</script>

<Header />
<main>
    <!-- <section class="projects"> -->
    <!--     <div class="project"> -->
    <!--         <h2>Title</h2> -->
    <!--         <p>Description</p> -->
    <!--         <div class="icons"> -->
    <!--             <IconContext values={{ size: "1rem" }}> -->
    <!--                 <span><Star />N Stars</span> -->
    <!--                 <span><Link />Website</span> -->
    <!--             </IconContext> -->
    <!--         </div> -->
    <!--     </div> -->
    <!-- </section> -->

    <section class="end">
        <div>
            <p>See more on my <a class="reach" id="github" href="https://github.com/potors">github</a></p>
            <p>Reach me on <a class="reach" id="instagram" href="https://www.instagram.com/pitol.dev">instagram</a>, <a class="reach" id="telegram" href="https://t.me/powtors">telegram</a> or <a class="reach" id="email" href="mailto:contact@pitol.dev">email</a></p>
            <p>Support me on <a class="reach" id="kofi" href="https://ko-fi.com/pitoldev">kofi</a></p>
        </div>
    </section>
</main>

<style lang="scss">
    main {
        display: flex;
    }

    .end {
        flex: 1;

        display: grid;
        place-items: center;

        font-size: 1.8rem;
        text-align: center;

        margin: 0 3ch;

        @media only screen and (max-width: 768px) {
            & { font-size: 1.3rem; }
        }
    }

    a.reach {
        --tone: hsl(var(--primary));

        color: hsl(var(--foreground));
        text-decoration-color: var(--tone);

        &#github { --tone: #998979; }
        &#instagram { --tone: #dF2069; }
        &#telegram { --tone: #1695e4; }
        &#kofi { --tone: #eF8423; }

        transition: 100ms ease-in-out;

        &:hover, &:focus {
            text-shadow:
                0 0 6px var(--tone),
                0 0 1px var(--tone);
        }
    }
</style>