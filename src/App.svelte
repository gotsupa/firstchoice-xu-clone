<script lang="ts">
  import { Route, Router } from 'svelte-navigator'

  import Navbar from './components/Navbar.svelte'
  import Home from './pages/Home.svelte'
</script>

<Router>
  <Navbar />
  <Route component={Home} />
</Router>
