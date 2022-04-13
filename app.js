//Init Github
const github = new GitHub;

//Init UI 
const ui = new UI;
//Search input
const searchUser = document.getElementById('search-user');

//Search input event listener 
searchUser.addEventListener('keyup', (e) =>{
    //Get input text
    const userText = e.target.value;

    if (userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data =>{
            
            if(data.profile.message === 'Not found'){
            
            //Show alert
            ui.showAlert('User not found', 'alert alert-danger');
            
            } else {
            //SHow profile
            ui.showProfile(data.profile)
            ui.showRepos(data.repos)
            }
        })
    } else {
        //Clear the profile
        ui.clearProfile();
    }
})