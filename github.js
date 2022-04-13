class GitHub {
    constructor(){
        this.client_id = 'ba6b0f035b137af0971c';
        this.client_secret = '0a7988bd50b44f9a81ab8c2e19c155cdf6b512e6';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

   async getUser(user){
        const profileResponse = await fetch (`https://api.github.com/users/${user}?
        client_id=${this.client_id}
        &client_secret=${this.client_secret}`)

        const repoResponse = await fetch (`
        https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&
        sort=${this.repos_sort}&
        client_id=${this.client_id}
        &client_secret=${this.client_secret}`)

        const repos = await repoResponse.json();
        const profile = await profileResponse.json();

        return {
            profile,
            repos
        }
   };
   
}

