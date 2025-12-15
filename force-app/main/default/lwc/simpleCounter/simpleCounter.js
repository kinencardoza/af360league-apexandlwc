import { LightningElement } from 'lwc';
import counterManager  from "c/counterManager";  // i have imported the module here. 



export default class SimpleCounter extends LightningElement {
    counter = counterManager(100); // initializing the module here with 100 as initial value.

    get count(){
        return this.counter.value.count;
    }

    handleIncrement(){
        this.counter.value.inc()
    }
}