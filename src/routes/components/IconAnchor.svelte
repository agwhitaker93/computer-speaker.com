<script lang="ts">
  export let iconClass: string
  export let href: string
  export let anchorText: string
</script>

<a {href}>
  {#if iconClass}
    <i class={iconClass}></i>
  {/if}
  {anchorText}</a
>
