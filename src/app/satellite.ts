export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
}

shouldShowWarning() : boolean{
    let debris = false;
    
    if(this.type.toLowerCase( ) === 'space debris'){
        debris = true;
    }

    return debris;
}

//Use shouldShowWarning to add the warning CSS class to the <td> containing the satellite's type.
}
