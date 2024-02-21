import { fromJS } from './node_modules/immutable/dist/immutable';

// converts javascript object to immutable object using fromJS
const getImmutableObject = (object) => fromJS(object);
export default getImmutableObject;
