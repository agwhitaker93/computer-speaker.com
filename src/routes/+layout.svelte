<script>
  import Header from './Header.svelte'
  import '../app.pcss'
</script>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="mx-auto box-border flex w-full max-w-5xl flex-1 flex-col p-4">
    <slot />
  </main>

  <footer class="flex flex-col items-center justify-center p-3">
    <p>
      Made with <a href="https://kit.svelte.dev">SvelteKit</a> and
      <a href="https://www.skeleton.dev">Skeleton</a>
    </p>
  </footer>
</div>
