import { EObject } from "crossecore/src/EObject";
import { XmiResource } from "ecore/XmiResource";
import { waitForDebugger } from "inspector";
import { RailwayFactory } from "railway/RailwayFactory";
import { RailwayFactoryImpl } from "railway/RailwayFactoryImpl";
import { RailwayPackage } from "railway/RailwayPackage";
import { RailwayPackageImpl } from "railway/RailwayPackageImpl";

// import txt from 'C:\Users\Zeus.000\Desktop\CrossEcore Train Benchmark\instances\standard_seed_19871053l\railway-1.xmi';

var railway : RailwayPackage = RailwayPackageImpl.eINSTANCE;
var factory : RailwayFactory = RailwayFactoryImpl.eINSTANCE;

var xmiResource : XmiResource;

// var xmi_sample = ``;

interface Counter {
  no_eobj: number;
  no_ref: number;
}

export function main(xmi_sample:string, file_name:string) {
    console.log(file_name);
    // console.log(xmi_sample);
    var train_loaded = loadFromXMI(xmi_sample);
    console.log(train_loaded);
    let counted = countEObjectsAndReferences(train_loaded);
    console.log("Anzahl Objekte: " + counted.no_eobj + "    Anzahl Referenzen oder Kompositionen: " + counted.no_ref);
    console.log(saveToXMI(train_loaded));
    console.log("");
}

function saveToXMI(ecore_instance_to_serialize: Array<EObject> /*, URL: string*/):string {
    let start = performance.now();
    xmiResource = new XmiResource(railway, factory, new DOMParser());
    let ret_save = xmiResource.save(ecore_instance_to_serialize);
    let end = performance.now();
    let time_needed = end - start;
    console.log("Time to save: " + time_needed.toFixed(4) + "ms");
    return ret_save;
}

function loadFromXMI(xmi: string /*URL: string*/): EObject[] {
    let start = performance.now();
    xmiResource = new XmiResource(railway, factory, new DOMParser());
    let ret_load = xmiResource.load(xmi);
    let end = performance.now();
    let time_needed = end - start;
    console.log("Time to load: " + time_needed.toFixed(4) + "ms");
    return ret_load;
};

function countEObjectsAndReferences(ecore_instance: Array<EObject>) {
  let counter:Counter = {"no_eobj": 0, "no_ref": 0};
  if (null == ecore_instance) {
    return counter;
  }

  for (let eobject of ecore_instance) {
    counter.no_eobj++; // zählt korrekt, habe nachgeprüft
    let eclass = eobject.eClass();
    let references = eclass.eAllReferences;
    for (let ref of references) {
      if (ref.many) {
        counter.no_ref += eobject.eGet(ref).length; // Achtung: es werden auch bidirektional angepasste Referenzen gezählt -> korrekt
        if (ref.containment) {
          let counter_containment = countEObjectsAndReferences(eobject.eGet(ref));
          counter.no_eobj += counter_containment.no_eobj;
          counter.no_ref += counter_containment.no_ref;
        }
      } else {
        counter.no_ref++; // Achtung: es werden auch bidirektional angepasste Referenzen gezählt -> korrekt
        if (ref.containment) {
          let counter_containment = countEObjectsAndReferences([eobject.eGet(ref)]);
          counter.no_eobj += counter_containment.no_eobj;
          counter.no_ref += counter_containment.no_ref;
        }
      }

    }
  }

  return counter;
}

// main();