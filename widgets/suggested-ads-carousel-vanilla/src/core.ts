function Prop() {
  return  (target: any, key: string, value: any) => {
     // property value
     console.log(target);
     // property getter
     function getter() {
       console.log(`Get: ${key} => ${value}`);
       return 'test';
     }
 
     // property setter
     function setter(newVal: any) {
       console.log(`Set: ${key} => ${newVal}`);
     }
 
     // Delete property.
     // if (delete this[key]) {
       // Create new property with getter and setter
       Object.defineProperty(target, key, {
         get: getter,
         set: setter,
         enumerable: true,
         configurable: true,
       });
     // }
  }
}

export {
  Prop,
}
