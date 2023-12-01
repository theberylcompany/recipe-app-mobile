class Recipe {
    private name!: String;
    private description!: String;
    private ingreds = [];
    private time = {
        prep: Number,
        cook: Number 
    }
    private directions = [

    ]

    private nutrition = {

    }
    private background!: String;

    __constructor(name: String){
        this.name= name;
    }

    readName(){
        return this.name;
    }

    changeName(newName: String){
        this.name = newName;
    }

    getDescription(){
        return this.description;
    }

    changeDescription(newDesc: String){
        this.description = newDesc;
    }

    readRecipe(){
        return {name: this.name, description: this.description, steps: this.directions}
    }
}