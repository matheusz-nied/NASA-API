<template>
    <nav class="flex h-20 items-center justify-between px-4 py-4">
        
        
        <RouterLink to="/" class="flex items-center	absolute">
            <img src="../assets/nied-logo.png" alt="Nied logo" width="100">
                <span class="text-3xl font-bold ml-4">Nasa API</span>
            </RouterLink>
        <ul class="flex gap-16 items-center justify-center  space-x-4 flex-grow text-lg font-medium	underline underline-offset-4
">
            <li class="hidden md:block hover:scale-105 duration-300">
                <RouterLink to="/apods">Notices</RouterLink>
            </li>
            <li  class="hidden md:block hover:scale-105 duration-300" >
                <RouterLink to="/apods">Images</RouterLink>
            </li>
            <li  class="hidden md:block hover:scale-105 duration-300">
                <a href="#about">About</a>
            </li>
        </ul>

    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>