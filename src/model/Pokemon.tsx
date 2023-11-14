export interface Pokemon{
    id:number,
    name:string,
    weight:number,
    base_experience:number,
    height:number,
    stats:{
        [0]:{
            base_stat:number //HP
        }
        [1]:{
            base_stat:number //ATTACK
        }
        [2]:{
            base_stat:number //DEFENSE
        }
        [3]:{
            base_stat:number //SPECIAL ATTACK
        }
        [4]:{
            base_stat:number //SPECIAL DEFENSE
        }
        [5]:{
            base_stat:number //SPEED
        }
    }
    sprites:{
        other:{
            "official-artwork":{
                front_default:string
            }
        }
    },

}