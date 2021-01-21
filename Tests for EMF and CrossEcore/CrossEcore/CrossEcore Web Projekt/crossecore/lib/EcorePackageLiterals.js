define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EcorePackageLiterals = (function () {
        function EcorePackageLiterals() {
        }
        EcorePackageLiterals.EMODELELEMENT = 8;
        EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT = 1;
        EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT = 1;
        EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS = 0;
        EcorePackageLiterals.ENAMEDELEMENT = 9;
        EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 1;
        EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 0;
        EcorePackageLiterals.ENAMEDELEMENT_EANNOTATIONS = 0;
        EcorePackageLiterals.ENAMEDELEMENT_NAME = 1;
        EcorePackageLiterals.ETYPEDELEMENT = 16;
        EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 8;
        EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
        EcorePackageLiterals.ETYPEDELEMENT_EANNOTATIONS = 0;
        EcorePackageLiterals.ETYPEDELEMENT_NAME = 1;
        EcorePackageLiterals.ETYPEDELEMENT_ORDERED = 2;
        EcorePackageLiterals.ETYPEDELEMENT_UNIQUE = 3;
        EcorePackageLiterals.ETYPEDELEMENT_LOWERBOUND = 4;
        EcorePackageLiterals.ETYPEDELEMENT_UPPERBOUND = 5;
        EcorePackageLiterals.ETYPEDELEMENT_MANY = 6;
        EcorePackageLiterals.ETYPEDELEMENT_REQUIRED = 7;
        EcorePackageLiterals.ETYPEDELEMENT_ETYPE = 8;
        EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE = 9;
        EcorePackageLiterals.ESTRUCTURALFEATURE = 15;
        EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 8;
        EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 2;
        EcorePackageLiterals.ESTRUCTURALFEATURE_EANNOTATIONS = 0;
        EcorePackageLiterals.ESTRUCTURALFEATURE_NAME = 1;
        EcorePackageLiterals.ESTRUCTURALFEATURE_ORDERED = 2;
        EcorePackageLiterals.ESTRUCTURALFEATURE_UNIQUE = 3;
        EcorePackageLiterals.ESTRUCTURALFEATURE_LOWERBOUND = 4;
        EcorePackageLiterals.ESTRUCTURALFEATURE_UPPERBOUND = 5;
        EcorePackageLiterals.ESTRUCTURALFEATURE_MANY = 6;
        EcorePackageLiterals.ESTRUCTURALFEATURE_REQUIRED = 7;
        EcorePackageLiterals.ESTRUCTURALFEATURE_ETYPE = 8;
        EcorePackageLiterals.ESTRUCTURALFEATURE_EGENERICTYPE = 9;
        EcorePackageLiterals.ESTRUCTURALFEATURE_CHANGEABLE = 10;
        EcorePackageLiterals.ESTRUCTURALFEATURE_VOLATILE = 11;
        EcorePackageLiterals.ESTRUCTURALFEATURE_TRANSIENT = 12;
        EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL = 13;
        EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUE = 14;
        EcorePackageLiterals.ESTRUCTURALFEATURE_UNSETTABLE = 15;
        EcorePackageLiterals.ESTRUCTURALFEATURE_DERIVED = 16;
        EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS = 17;
        EcorePackageLiterals.EATTRIBUTE = 0;
        EcorePackageLiterals.EATTRIBUTE_FEATURE_COUNT = EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT + 2;
        EcorePackageLiterals.EATTRIBUTE_OPERATION_COUNT = EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
        EcorePackageLiterals.EATTRIBUTE_EANNOTATIONS = 0;
        EcorePackageLiterals.EATTRIBUTE_NAME = 1;
        EcorePackageLiterals.EATTRIBUTE_ORDERED = 2;
        EcorePackageLiterals.EATTRIBUTE_UNIQUE = 3;
        EcorePackageLiterals.EATTRIBUTE_LOWERBOUND = 4;
        EcorePackageLiterals.EATTRIBUTE_UPPERBOUND = 5;
        EcorePackageLiterals.EATTRIBUTE_MANY = 6;
        EcorePackageLiterals.EATTRIBUTE_REQUIRED = 7;
        EcorePackageLiterals.EATTRIBUTE_ETYPE = 8;
        EcorePackageLiterals.EATTRIBUTE_EGENERICTYPE = 9;
        EcorePackageLiterals.EATTRIBUTE_CHANGEABLE = 10;
        EcorePackageLiterals.EATTRIBUTE_VOLATILE = 11;
        EcorePackageLiterals.EATTRIBUTE_TRANSIENT = 12;
        EcorePackageLiterals.EATTRIBUTE_DEFAULTVALUELITERAL = 13;
        EcorePackageLiterals.EATTRIBUTE_DEFAULTVALUE = 14;
        EcorePackageLiterals.EATTRIBUTE_UNSETTABLE = 15;
        EcorePackageLiterals.EATTRIBUTE_DERIVED = 16;
        EcorePackageLiterals.EATTRIBUTE_ECONTAININGCLASS = 17;
        EcorePackageLiterals.EATTRIBUTE_ID = 18;
        EcorePackageLiterals.EATTRIBUTE_EATTRIBUTETYPE = 19;
        EcorePackageLiterals.EANNOTATION = 1;
        EcorePackageLiterals.EANNOTATION_FEATURE_COUNT = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 5;
        EcorePackageLiterals.EANNOTATION_OPERATION_COUNT = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 0;
        EcorePackageLiterals.EANNOTATION_EANNOTATIONS = 0;
        EcorePackageLiterals.EANNOTATION_SOURCE = 1;
        EcorePackageLiterals.EANNOTATION_DETAILS = 2;
        EcorePackageLiterals.EANNOTATION_EMODELELEMENT = 3;
        EcorePackageLiterals.EANNOTATION_CONTENTS = 4;
        EcorePackageLiterals.EANNOTATION_REFERENCES = 5;
        EcorePackageLiterals.ECLASSIFIER = 3;
        EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 6;
        EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 2;
        EcorePackageLiterals.ECLASSIFIER_EANNOTATIONS = 0;
        EcorePackageLiterals.ECLASSIFIER_NAME = 1;
        EcorePackageLiterals.ECLASSIFIER_INSTANCECLASSNAME = 2;
        EcorePackageLiterals.ECLASSIFIER_INSTANCECLASS = 3;
        EcorePackageLiterals.ECLASSIFIER_DEFAULTVALUE = 4;
        EcorePackageLiterals.ECLASSIFIER_INSTANCETYPENAME = 5;
        EcorePackageLiterals.ECLASSIFIER_EPACKAGE = 6;
        EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS = 7;
        EcorePackageLiterals.ECLASS = 2;
        EcorePackageLiterals.ECLASS_FEATURE_COUNT = EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT + 16;
        EcorePackageLiterals.ECLASS_OPERATION_COUNT = EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT + 10;
        EcorePackageLiterals.ECLASS_EANNOTATIONS = 0;
        EcorePackageLiterals.ECLASS_NAME = 1;
        EcorePackageLiterals.ECLASS_INSTANCECLASSNAME = 2;
        EcorePackageLiterals.ECLASS_INSTANCECLASS = 3;
        EcorePackageLiterals.ECLASS_DEFAULTVALUE = 4;
        EcorePackageLiterals.ECLASS_INSTANCETYPENAME = 5;
        EcorePackageLiterals.ECLASS_EPACKAGE = 6;
        EcorePackageLiterals.ECLASS_ETYPEPARAMETERS = 7;
        EcorePackageLiterals.ECLASS_ABSTRACT = 8;
        EcorePackageLiterals.ECLASS_INTERFACE = 9;
        EcorePackageLiterals.ECLASS_ESUPERTYPES = 10;
        EcorePackageLiterals.ECLASS_EOPERATIONS = 11;
        EcorePackageLiterals.ECLASS_EALLATTRIBUTES = 12;
        EcorePackageLiterals.ECLASS_EALLREFERENCES = 13;
        EcorePackageLiterals.ECLASS_EREFERENCES = 14;
        EcorePackageLiterals.ECLASS_EATTRIBUTES = 15;
        EcorePackageLiterals.ECLASS_EALLCONTAINMENTS = 16;
        EcorePackageLiterals.ECLASS_EALLOPERATIONS = 17;
        EcorePackageLiterals.ECLASS_EALLSTRUCTURALFEATURES = 18;
        EcorePackageLiterals.ECLASS_EALLSUPERTYPES = 19;
        EcorePackageLiterals.ECLASS_EIDATTRIBUTE = 20;
        EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES = 21;
        EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES = 22;
        EcorePackageLiterals.ECLASS_EALLGENERICSUPERTYPES = 23;
        EcorePackageLiterals.EDATATYPE = 4;
        EcorePackageLiterals.EDATATYPE_FEATURE_COUNT = EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT + 1;
        EcorePackageLiterals.EDATATYPE_OPERATION_COUNT = EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT + 0;
        EcorePackageLiterals.EDATATYPE_EANNOTATIONS = 0;
        EcorePackageLiterals.EDATATYPE_NAME = 1;
        EcorePackageLiterals.EDATATYPE_INSTANCECLASSNAME = 2;
        EcorePackageLiterals.EDATATYPE_INSTANCECLASS = 3;
        EcorePackageLiterals.EDATATYPE_DEFAULTVALUE = 4;
        EcorePackageLiterals.EDATATYPE_INSTANCETYPENAME = 5;
        EcorePackageLiterals.EDATATYPE_EPACKAGE = 6;
        EcorePackageLiterals.EDATATYPE_ETYPEPARAMETERS = 7;
        EcorePackageLiterals.EDATATYPE_SERIALIZABLE = 8;
        EcorePackageLiterals.EENUM = 5;
        EcorePackageLiterals.EENUM_FEATURE_COUNT = EcorePackageLiterals.EDATATYPE_FEATURE_COUNT + 1;
        EcorePackageLiterals.EENUM_OPERATION_COUNT = EcorePackageLiterals.EDATATYPE_OPERATION_COUNT + 3;
        EcorePackageLiterals.EENUM_EANNOTATIONS = 0;
        EcorePackageLiterals.EENUM_NAME = 1;
        EcorePackageLiterals.EENUM_INSTANCECLASSNAME = 2;
        EcorePackageLiterals.EENUM_INSTANCECLASS = 3;
        EcorePackageLiterals.EENUM_DEFAULTVALUE = 4;
        EcorePackageLiterals.EENUM_INSTANCETYPENAME = 5;
        EcorePackageLiterals.EENUM_EPACKAGE = 6;
        EcorePackageLiterals.EENUM_ETYPEPARAMETERS = 7;
        EcorePackageLiterals.EENUM_SERIALIZABLE = 8;
        EcorePackageLiterals.EENUM_ELITERALS = 9;
        EcorePackageLiterals.EENUMLITERAL = 6;
        EcorePackageLiterals.EENUMLITERAL_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 4;
        EcorePackageLiterals.EENUMLITERAL_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
        EcorePackageLiterals.EENUMLITERAL_EANNOTATIONS = 0;
        EcorePackageLiterals.EENUMLITERAL_NAME = 1;
        EcorePackageLiterals.EENUMLITERAL_VALUE = 2;
        EcorePackageLiterals.EENUMLITERAL_INSTANCE = 3;
        EcorePackageLiterals.EENUMLITERAL_LITERAL = 4;
        EcorePackageLiterals.EENUMLITERAL_EENUM = 5;
        EcorePackageLiterals.EFACTORY = 7;
        EcorePackageLiterals.EFACTORY_FEATURE_COUNT = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 1;
        EcorePackageLiterals.EFACTORY_OPERATION_COUNT = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 3;
        EcorePackageLiterals.EFACTORY_EANNOTATIONS = 0;
        EcorePackageLiterals.EFACTORY_EPACKAGE = 1;
        EcorePackageLiterals.EOBJECT = 10;
        EcorePackageLiterals.EOBJECT_FEATURE_COUNT = 0;
        EcorePackageLiterals.EOBJECT_OPERATION_COUNT = 15;
        EcorePackageLiterals.EOPERATION = 11;
        EcorePackageLiterals.EOPERATION_FEATURE_COUNT = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 5;
        EcorePackageLiterals.EOPERATION_OPERATION_COUNT = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 2;
        EcorePackageLiterals.EOPERATION_EANNOTATIONS = 0;
        EcorePackageLiterals.EOPERATION_NAME = 1;
        EcorePackageLiterals.EOPERATION_ORDERED = 2;
        EcorePackageLiterals.EOPERATION_UNIQUE = 3;
        EcorePackageLiterals.EOPERATION_LOWERBOUND = 4;
        EcorePackageLiterals.EOPERATION_UPPERBOUND = 5;
        EcorePackageLiterals.EOPERATION_MANY = 6;
        EcorePackageLiterals.EOPERATION_REQUIRED = 7;
        EcorePackageLiterals.EOPERATION_ETYPE = 8;
        EcorePackageLiterals.EOPERATION_EGENERICTYPE = 9;
        EcorePackageLiterals.EOPERATION_ECONTAININGCLASS = 10;
        EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS = 11;
        EcorePackageLiterals.EOPERATION_EPARAMETERS = 12;
        EcorePackageLiterals.EOPERATION_EEXCEPTIONS = 13;
        EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS = 14;
        EcorePackageLiterals.EPACKAGE = 12;
        EcorePackageLiterals.EPACKAGE_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 6;
        EcorePackageLiterals.EPACKAGE_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 1;
        EcorePackageLiterals.EPACKAGE_EANNOTATIONS = 0;
        EcorePackageLiterals.EPACKAGE_NAME = 1;
        EcorePackageLiterals.EPACKAGE_NSURI = 2;
        EcorePackageLiterals.EPACKAGE_NSPREFIX = 3;
        EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE = 4;
        EcorePackageLiterals.EPACKAGE_ECLASSIFIERS = 5;
        EcorePackageLiterals.EPACKAGE_ESUBPACKAGES = 6;
        EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE = 7;
        EcorePackageLiterals.EPARAMETER = 13;
        EcorePackageLiterals.EPARAMETER_FEATURE_COUNT = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 1;
        EcorePackageLiterals.EPARAMETER_OPERATION_COUNT = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 0;
        EcorePackageLiterals.EPARAMETER_EANNOTATIONS = 0;
        EcorePackageLiterals.EPARAMETER_NAME = 1;
        EcorePackageLiterals.EPARAMETER_ORDERED = 2;
        EcorePackageLiterals.EPARAMETER_UNIQUE = 3;
        EcorePackageLiterals.EPARAMETER_LOWERBOUND = 4;
        EcorePackageLiterals.EPARAMETER_UPPERBOUND = 5;
        EcorePackageLiterals.EPARAMETER_MANY = 6;
        EcorePackageLiterals.EPARAMETER_REQUIRED = 7;
        EcorePackageLiterals.EPARAMETER_ETYPE = 8;
        EcorePackageLiterals.EPARAMETER_EGENERICTYPE = 9;
        EcorePackageLiterals.EPARAMETER_EOPERATION = 10;
        EcorePackageLiterals.EREFERENCE = 14;
        EcorePackageLiterals.EREFERENCE_FEATURE_COUNT = EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT + 6;
        EcorePackageLiterals.EREFERENCE_OPERATION_COUNT = EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
        EcorePackageLiterals.EREFERENCE_EANNOTATIONS = 0;
        EcorePackageLiterals.EREFERENCE_NAME = 1;
        EcorePackageLiterals.EREFERENCE_ORDERED = 2;
        EcorePackageLiterals.EREFERENCE_UNIQUE = 3;
        EcorePackageLiterals.EREFERENCE_LOWERBOUND = 4;
        EcorePackageLiterals.EREFERENCE_UPPERBOUND = 5;
        EcorePackageLiterals.EREFERENCE_MANY = 6;
        EcorePackageLiterals.EREFERENCE_REQUIRED = 7;
        EcorePackageLiterals.EREFERENCE_ETYPE = 8;
        EcorePackageLiterals.EREFERENCE_EGENERICTYPE = 9;
        EcorePackageLiterals.EREFERENCE_CHANGEABLE = 10;
        EcorePackageLiterals.EREFERENCE_VOLATILE = 11;
        EcorePackageLiterals.EREFERENCE_TRANSIENT = 12;
        EcorePackageLiterals.EREFERENCE_DEFAULTVALUELITERAL = 13;
        EcorePackageLiterals.EREFERENCE_DEFAULTVALUE = 14;
        EcorePackageLiterals.EREFERENCE_UNSETTABLE = 15;
        EcorePackageLiterals.EREFERENCE_DERIVED = 16;
        EcorePackageLiterals.EREFERENCE_ECONTAININGCLASS = 17;
        EcorePackageLiterals.EREFERENCE_CONTAINMENT = 18;
        EcorePackageLiterals.EREFERENCE_CONTAINER = 19;
        EcorePackageLiterals.EREFERENCE_RESOLVEPROXIES = 20;
        EcorePackageLiterals.EREFERENCE_EOPPOSITE = 21;
        EcorePackageLiterals.EREFERENCE_EREFERENCETYPE = 22;
        EcorePackageLiterals.EREFERENCE_EKEYS = 23;
        EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY = 48;
        EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_FEATURE_COUNT = 2;
        EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_OPERATION_COUNT = 0;
        EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_KEY = 0;
        EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_VALUE = 1;
        EcorePackageLiterals.EGENERICTYPE = 50;
        EcorePackageLiterals.EGENERICTYPE_FEATURE_COUNT = 6;
        EcorePackageLiterals.EGENERICTYPE_OPERATION_COUNT = 1;
        EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND = 0;
        EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS = 1;
        EcorePackageLiterals.EGENERICTYPE_ERAWTYPE = 2;
        EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND = 3;
        EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER = 4;
        EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER = 5;
        EcorePackageLiterals.ETYPEPARAMETER = 51;
        EcorePackageLiterals.ETYPEPARAMETER_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 1;
        EcorePackageLiterals.ETYPEPARAMETER_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
        EcorePackageLiterals.ETYPEPARAMETER_EANNOTATIONS = 0;
        EcorePackageLiterals.ETYPEPARAMETER_NAME = 1;
        EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS = 2;
        EcorePackageLiterals.EBIGDECIMAL = 17;
        EcorePackageLiterals.EBIGINTEGER = 18;
        EcorePackageLiterals.EBOOLEAN = 19;
        EcorePackageLiterals.EBOOLEANOBJECT = 20;
        EcorePackageLiterals.EBYTE = 21;
        EcorePackageLiterals.EBYTEARRAY = 22;
        EcorePackageLiterals.EBYTEOBJECT = 23;
        EcorePackageLiterals.ECHAR = 24;
        EcorePackageLiterals.ECHARACTEROBJECT = 25;
        EcorePackageLiterals.EDATE = 26;
        EcorePackageLiterals.EDIAGNOSTICCHAIN = 27;
        EcorePackageLiterals.EDOUBLE = 28;
        EcorePackageLiterals.EDOUBLEOBJECT = 29;
        EcorePackageLiterals.EELIST = 30;
        EcorePackageLiterals.EENUMERATOR = 31;
        EcorePackageLiterals.EFEATUREMAP = 32;
        EcorePackageLiterals.EFEATUREMAPENTRY = 33;
        EcorePackageLiterals.EFLOAT = 34;
        EcorePackageLiterals.EFLOATOBJECT = 35;
        EcorePackageLiterals.EINT = 36;
        EcorePackageLiterals.EINTEGEROBJECT = 37;
        EcorePackageLiterals.EJAVACLASS = 38;
        EcorePackageLiterals.EJAVAOBJECT = 39;
        EcorePackageLiterals.ELONG = 40;
        EcorePackageLiterals.ELONGOBJECT = 41;
        EcorePackageLiterals.EMAP = 42;
        EcorePackageLiterals.ERESOURCE = 43;
        EcorePackageLiterals.ERESOURCESET = 44;
        EcorePackageLiterals.ESHORT = 45;
        EcorePackageLiterals.ESHORTOBJECT = 46;
        EcorePackageLiterals.ESTRING = 47;
        EcorePackageLiterals.ETREEITERATOR = 49;
        EcorePackageLiterals.EINVOCATIONTARGETEXCEPTION = 52;
        return EcorePackageLiterals;
    }());
    exports.EcorePackageLiterals = EcorePackageLiterals;
});
//# sourceMappingURL=EcorePackageLiterals.js.map