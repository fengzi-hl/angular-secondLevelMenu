import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FirstLevel } from './first-level';
import { SecondLevel } from './second-level';
import { FIRSTLEVEL } from './mock-data';
import { SECONDLEVEL } from './mock-data';

@Injectable()
export class SelectService {

  constructor() { }

  previousId = null;
  getFirstLevels(): Observable<FirstLevel[]> {
    return of(FIRSTLEVEL);
  }

  getSecondLevels():SecondLevel[] {
    return SECONDLEVEL;
  }

  filterSecond(previousId) {
    console.log(previousId);
    if(!previousId) return null;
    return this.getSecondLevels().filter((item) => item.preId == previousId);
 }
}