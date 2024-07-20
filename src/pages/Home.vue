<template>

    <div class="flex flex-col items-center justify-center py-16 px-4 md:px-16 ">


        <h1
            class="w-4/5 md:w-3/4 text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Explore the
            wonders of the universe with <span
                class="text-transparent bg-clip-text bg-gradient-to-r to-green-700 from-green-300">NASA</span>
        </h1>



        <div class="flex gap-10 md:gap-16 mt-16 flex-col	md:flex-row	">

            <Button text="Starting exploring" :outline=false link="/apods"> </Button>
            <a href="#how-works"> <Button text="Features" link="#how-works" :outline=true></Button>
            </a>
        </div>
        <section class=" w-4/5 md:w-2/5 mt-32 2xl:mt-48 text-center flex flex-col items-center gap-24">

            <div>
                <h2 id="how-works" class="text-4xl font-medium">
                    How it works?
                </h2>
                <p class="mt-10 text-lg">
                    The purpose of this application is to develop a front-end for the REST APIs listed in the
                    api.nasa.gov catalog. These APIs provide a wealth of images and information, including data on
                    comets, measurements of Mars, and real-time imagery of Earth.
                </p>

            </div>


            <div class="rounded border md:shadow w-[21rem] h-[26rem] bg-white bg-opacity-10 overflow-hidden relative">

                <img class="object-cover w-full h-[12rem]"
                    src="https://conteudo.imguol.com.br/c/noticias/44/2021/07/09/planeta-terra-visto-do-espaco-1625856127096_v2_900x506.jpg" />

                <div class="px-4 py-4 h-[10rem]">
                    <h3 class="font-semibold mb-2 text-2xl">Nasa Image and library</h3>
                    <p class="leading-snug opacity-95 line-clamp-3">
                        NASA's official database contains over 140,000 photos. Explore breathtaking images of outer
                        space, astronauts, rocket launches, and much more.

                    </p>
                </div>
                <div class="absolute bottom-4 right-4 text-right">
                    <Button text="Check it out" :outline="true" width="150" :hoverEffect="false" link="/apods"></Button>
                </div>

            </div>


        </section>
        <section class=" w-4/5 md:w-2/5  mt-48 text-center text-lg">
            <h2 id="about" class="text-4xl font-medium">
                About this app
            </h2>
            <p class="mt-10">
                The application uses <span
                    class="text-transparent bg-clip-text bg-gradient-to-r to-green-600 font-semibold from-green-300">Vue.Js</span> and
                Axios to interact with NASA APIs, Tailwind CSS for responsive design. It provides a dynamic interface
                for exploring
                NASA's catalog.</p>

        </section>

    </div>

</template>


<script>
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
export default {
    name: "Home",
    components: {
        Button,
        Card
    }
};

</script>