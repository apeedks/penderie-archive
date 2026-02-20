import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({ name: 'jsonFilterBy' })
@Injectable()
export class JsonFilterByPipe implements PipeTransform {

  transform(json: any[], args: any[]) : any[] {
    var searchText = args[0];
    var jsonKey = args[1];

    // json = undefined, args = (2) [undefined, "name"]
    if(searchText == null || searchText == 'undefined') return json;
    if(jsonKey    == null || jsonKey    == 'undefined') return json;
    // console.log(json,searchText);
    // Copy all objects of original array into new Array.
    if(json != undefined){
      var returnObjects = json;
      json.forEach( function ( filterObjectEntery ) {

        if( filterObjectEntery.hasOwnProperty( jsonKey ) ) {

          if ( typeof filterObjectEntery[jsonKey] != "undefined" && 
          filterObjectEntery[jsonKey].toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
              // object value contains the user provided text.
          } else {
              // object didn't match a filter value so remove it from array via filter
              returnObjects = returnObjects.filter(obj => obj !== filterObjectEntery);
          }
        } else {
          console.log('Search key is not available in JSON object.');
        }

      })
      return returnObjects;
    }
  }
}