"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const AppService_1 = require("./AppService");
const AppController_1 = require("./AppController");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        providers: [
            AppService_1.AppService
        ],
        controllers: [
            AppController_1.AppController
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=AppModule.js.map