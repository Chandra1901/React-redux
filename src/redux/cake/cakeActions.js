// Generally An action is an object with the type property 

import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (number = 1) => {
    
    return {
        type: BUY_CAKE,
        payload: number
    }
}
