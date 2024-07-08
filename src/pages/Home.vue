<template>

    <div class="flex flex-col items-center justify-center py-16 px-16 ">

        <h1 class="text-5xl font-medium w-2/5 text-center mt-16">Explore the wonders of the universe with NASA</h1>

        <div class="flex gap-16 mt-16">

            <Button text="Starting exploring" link="/apods" :outline=false> </Button>
            <Button text="Features" link="/apods" :outline=true></Button>
        </div>
        <section class="w-2/5 mt-32 text-center flex flex-col items-center gap-24">

            <div>
                
                <h2 class="text-4xl font-medium">
                    How it works?
                </h2>
                <p class="mt-10 text-lg">
                    The goal of this application is to create a front-end for the REST APIs that are found in
                    the api.nasa.gov catalog. These APIs expose a wealth of images and information, such as data on comets,
                    measurements of mars, and real-time imagery of earth.
                </p>
            </div>

            <Card title="Nasa Image and library" description="NAhSA's official database of over 140,000 photos. Browse stunning images of outer space,
                        astronauts,
                        rocket launches, and much more."/>

        </section>
        <section class="w-2/5 mt-48 text-center text-lg">
            <h2 class="text-4xl font-medium">
                About this app
            </h2>
            <p class="mt-10">
                The goal of this application is to create a front-end for the REST APIs that are found in
                the api.nasa.gov catalog. These APIs expose a wealth of images and information, such as data on comets,
                measurements of mars, and real-time imagery of earth.
            </p>

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