<script>
        import {goto} from '$app/navigation'

</script>

<body class="bg-gray-100">
    <div class="flex items-center justify-center h-screen">
        <form action="?/logout" method="POST" class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
            <h1 class="text-greenNav font-bold pb-3 text-2xl">Logout</h1>
            <img src="src\images\logout.png" alt="tets" class="mx-auto mb-4">
            <p class="text-gray-600">Bent u zeker dat u wilt uitloggen ?</p>

            <button type="submit" class="w-full bg-redKLJ hover:bg-greenNav text-white hover:text-redKLJ font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500">Logout</button>
            <button class="w-full bg-greenNav hover:bg-greenNav text-white hover:text-redKLJ font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500 mt-3 mb-5" on:click={() => {goto('/home')}}>Neen, surf verder</button>
        </form>
    </div>
</body>
