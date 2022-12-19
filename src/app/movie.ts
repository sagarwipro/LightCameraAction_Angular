export class Movie {

    public imageUrl : String = "";
    public name : String="";
    public type : String = "";
    public description : String= "";
    public duration : number = 0;
    public releaseYear : number= 0; 

    constructor(imageUrl : String,name: String, type : String, description : String,duration : number, releaseYear : number){
        this.description = description;
        this.duration=duration;
        this.imageUrl=imageUrl;
        this.name=name;
        this.releaseYear=releaseYear;
        this.type=type;
    }

}
