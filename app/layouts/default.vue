<template>
  <div class="DefaultLayout">
    <h1 class="m-8 text-5xl text-center">Default layout</h1>
    <header class="">
        <ul class="flex justify-center gap-12 mx-8 mb-8">
          <li class="flex items-center">
            <SvgoArrow />
          </li>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/counter">Counter</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/userinfo">User info</NuxtLink>
          </li>
          <li class="flex items-center">
            <SvgoArrow class="rotate-180" />
          </li>
        </ul>
      </header>
    <SpeedInsights />
    <slot />
  </div>
</template>