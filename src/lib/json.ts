
import JsonBig from "json-bigint";
import fs from "fs-extra";
import path from "path";

const Json = JsonBig({useNativeBigInt:true});

/** Stringify JSON GMS2-style: windows newlines, 4-space tabs, and allowing Int64s */
export function stringify(stuff:any){
  return Json.stringify(stuff,null,4).replace(/\r?\n/g,'\r\n');
}

/** Parse JSON GMS2-style: allowing Int64s */
export function parse(string:string){
  return Json.parse(string);
}

/** Read GMS2-style JSON into an object */
export function loadFromFileSync(filePath:string){
  const content = fs.readFileSync(filePath,'utf8');
  return Json.parse(content);
}

/** Write GMS2-style JSON into an object */
export function writeFileSync(filePath:string,stuff:any){
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath,stringify(stuff));
}
