<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<form action="?/logup" method="POST">
    <input type="text" name="first_name" placeholder="first">
    <input type="text" name="last_name" placeholder="last" >
    <input type="email" name="email" placeholder="email">
    <input type="password" name="password" placeholder="wacht">

    <button>Submit</button>
</form>