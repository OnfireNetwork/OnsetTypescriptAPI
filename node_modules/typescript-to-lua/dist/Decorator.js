"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Decorator {
    constructor(name, args) {
        this.args = args;
        const kind = Decorator.getDecoratorKind(name);
        if (kind === undefined) {
            throw new Error(`Failed to parse decorator '${name}'`);
        }
        this.kind = kind;
    }
    static isValid(decoratorKindString) {
        return this.getDecoratorKind(decoratorKindString) !== undefined;
    }
    static getDecoratorKind(decoratorKindString) {
        return Object.values(DecoratorKind).find(decoratorKind => decoratorKind.toLowerCase() === decoratorKindString.toLowerCase());
    }
}
exports.Decorator = Decorator;
var DecoratorKind;
(function (DecoratorKind) {
    DecoratorKind["Extension"] = "Extension";
    DecoratorKind["MetaExtension"] = "MetaExtension";
    DecoratorKind["CustomConstructor"] = "CustomConstructor";
    DecoratorKind["CompileMembersOnly"] = "CompileMembersOnly";
    DecoratorKind["NoResolution"] = "NoResolution";
    DecoratorKind["PureAbstract"] = "PureAbstract";
    DecoratorKind["Phantom"] = "Phantom";
    DecoratorKind["TupleReturn"] = "TupleReturn";
    DecoratorKind["LuaIterator"] = "LuaIterator";
    DecoratorKind["LuaTable"] = "LuaTable";
    DecoratorKind["NoSelf"] = "NoSelf";
    DecoratorKind["NoSelfInFile"] = "NoSelfInFile";
    DecoratorKind["Vararg"] = "Vararg";
    DecoratorKind["ForRange"] = "ForRange";
})(DecoratorKind = exports.DecoratorKind || (exports.DecoratorKind = {}));
//# sourceMappingURL=Decorator.js.map