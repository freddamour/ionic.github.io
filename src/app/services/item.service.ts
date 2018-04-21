//import {Injectable} from '@angular/core';
import {Config} from '../models/config';
import {Item} from '../models/Item';
//import {CollectionService} from './collection.service';

export class ItemService {
    public collection: Item[];

    constructor() {
        this.setFakeCollection();
    }

    setFakeCollection(): void {
        this.collection = [
            new Item({reference: '1234', name: 'Thomas', state: 0, image:'http://via.placeholder.com/350x150'}),
            new Item({reference: '3456', name: 'Gabriel', state: 1, image:'http://via.placeholder.com/350x150'}),
            new Item({reference: '5678', name: 'Eloise', state: 2, image:'http://via.placeholder.com/350x150'})
        ];
    }

    

    getCollection(): Item[] {
        return this.collection;
    }

    addItemToCollection(item: Item): ItemService {
        this.collection.unshift(item);

        return this;// un pivo permet d'anchainé les appels de méthodes
    }
}