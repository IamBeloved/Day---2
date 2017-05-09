function dataTypes(input){
  if ( typeof input === "string"){
	  return input.length;
  }
	else if (typeof input === "boolean"){
    return input;
	}
  else if (typeof input === "number"){
    	if(input > 100){
        return "more than 100";
      }
      else if (input < 100){
        return "less than 100";
      }
      else if(input === 100){
        return "equal to 100";
      }
  }
  else if ( input instanceof Array){
    if(input.length >= 3){
      return input[2];
    }
    else if (input.length < 3){
      return "undefined"
    }
  }
  else if (input === "function"){
     return input(true);
  }
  else if (typeof input === "undefined" || "object"){
	  return "no value";
	}
  else{
      return "undefined";
    }
}
console.log(dataTypes([4, 9]));