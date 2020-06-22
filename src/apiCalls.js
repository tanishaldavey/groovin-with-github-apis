export const getAllUsers = queryInfo => {
    return fetch(`https://api.github.com/search/users?q=${queryInfo}`)
        .then(response => {           
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('Ooops, something went wrong!')
            }
        })
        
}