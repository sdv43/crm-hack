<template>
  <section>
    <ul>
      <li>
        <router-link :to="{name:'OperatorCard'}">Operator Card</router-link>
      </li>
      <li>
        <router-link :to="{name:'ScriptEditor'}">Script Editor</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>
