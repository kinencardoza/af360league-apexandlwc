import {defineState} from "@lwc/state";

const counterManager = defineState(
    ({atom, computed, setAtom }, initialValue = 0) => {
        //atom - represents a single reactive piece of data.

        // define variables
        const count = atom(initialValue);
        const myName = atom('LWC User');

        // create functions 
        const inc = () => {
            setAtom(count, count + 1);
        }

        const updateName = (newName) =>{
            setAtom(myName, newName);
        }

        // computed - like a formula. it shgould be auto calculated.

        const doubleCount = computed([count], ((count)=> count*2));
        return {
            count,
            inc,
            doubleCount,
            myName,
            updateName
        }
    }
);

export default counterManager;