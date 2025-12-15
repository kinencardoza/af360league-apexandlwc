import { LightningElement } from 'lwc';
import counterManager  from "c/counterManager";
import {fromContext} from '@lwc/state';

export default class SimpleCounterChild extends LightningElement {
    counter = fromContext(counterManager);
    get doubleCount(){
        return (this.counter.value.doubleCount);
    }
}