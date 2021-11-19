

function passwordVal()
{

    
    
        let user_input = document.getElementById('user_input');
        let validation = document.getElementById('validation');
        let input = user_input.value;
        let validate_input = validation.value;
        console.log("hello");
        
        if(input.length < 8 || validate_input < 8)
        {
            alert("Password is too short");
            return
        }
        else if(input != validate_input)
        {
            alert("The passwords are incorrect");
        }
        else if(input == validate_input)
        {
            alert("Welcome back Mr.Wayne");
        }
        else
        {
            alert("Unknown error Encountered");
        }
    

}