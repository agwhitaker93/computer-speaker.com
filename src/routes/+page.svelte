<script>
  import header from '$lib/images/header.png'
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Personal website of Andrew Whitaker" />
</svelte:head>

<section class="flex flex-1 flex-col items-center justify-center">
  <h1>Hello!</h1>
  <div class="hero">
    <picture>
      <img
        src={header}
        class="rounded-lg drop-shadow-lg"
        alt="A quiet city road"
      />
    </picture>
  </div>

  <h3 class="mt-4">I'm Andrew!</h3>
  <p>I write code for a living, and I have a great time doing it!</p>
  <p>
    Most of the code I write these days is JavaScript for Cloudflare Workers and helper utilities at
    work. I enjoy the flexibility JavaScript gives me for solving problems, letting me weave object
    oriented and functional concepts together.
  </p>
  <p>
    I occasionally get the chance to write Java and Groovy code too! I learned Java in university,
    but Groovy is still relatively new to me. I especially like Groovy's capacity for writing
    self-contained scripts, using Grape to pull dependencies in. One fun example of that is a script
    I wrote to compile PlantUML diagrams, pulling the JAR they provide down with Grape.
  </p>
  <p>
    In my spare time, I've recently been learning how to use C# to make mods for Vintage Story. I've
    not spent enough time with C# to have formed much of an opinion on it so far, but I am enjoying
    how Harmony lets you dynamically modify and augment C# code.
  </p>
  <p>
    I have a slightly neglected project tying JavaScript and Rust together, with Tauri, to allow
    alternate keybindings for games that don't natively provide them (like DarkTide). I really like
    the idea of Rust, but again, I haven't spent enough time with it to really form an opinion.
    Tauri is cool though!
  </p>
  <p>
    A few years ago, I began writing a utility for myself with Clojure and ClojureScript, to help
    figure out what I can make with the various resources I have in Old School RuneScape. I really
    enjoy Clojure's syntax, but often feel like I'm not quite smart enough to take advantage of the
    more advanced features it provides.
  </p>
</section>
