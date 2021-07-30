<script>

import Component from '../components/Component.svelte';

import { data as appData } from '../../ts/app.ts';

let name = 'Svelte';

</script>

<div class="svelte-logo" title="{ appData.product }">
    <img src="https://svelte.dev/svelte-logo-horizontal.svg" alt="{ name }">

    <Component />
</div>

<style type="text/scss">

$svelte-color: #ff3c00;

.svelte-logo
{
    width: auto;
    height: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 46px;
    font-weight: 900;
    color: $svelte-color;
}

.svelte-logo > img
{
    width: inherit;
    height: inherit;
    margin-right: 20px;
}

</style>