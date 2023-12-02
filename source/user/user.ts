class User {
    private username!: String;
    private password!: String;
    private email!: String;
    private interests = [];

    __constructor(name: String, email: String){
        this.username = name;
        this.email = email;
    }
}

class Creator extends User {
    __constructor(){
        
    }
    
    private expertise = [];
    private yearsCooked!: Number;
    private recipesMade!: Number;
    private popularRecipes = [];

}