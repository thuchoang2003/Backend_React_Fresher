'use strict';var _0x1851f7=_0x5c15;(function(_0x3b1bca,_0xa5d37){var _0x3f3c3d=_0x5c15,_0x2af81c=_0x3b1bca();while(!![]){try{var _0x252b58=parseInt(_0x3f3c3d(0x12b))/0x1*(parseInt(_0x3f3c3d(0x122))/0x2)+-parseInt(_0x3f3c3d(0x10f))/0x3*(-parseInt(_0x3f3c3d(0x118))/0x4)+parseInt(_0x3f3c3d(0x115))/0x5*(-parseInt(_0x3f3c3d(0x126))/0x6)+-parseInt(_0x3f3c3d(0x11f))/0x7+parseInt(_0x3f3c3d(0x128))/0x8+parseInt(_0x3f3c3d(0x116))/0x9*(-parseInt(_0x3f3c3d(0x117))/0xa)+-parseInt(_0x3f3c3d(0x119))/0xb;if(_0x252b58===_0xa5d37)break;else _0x2af81c['push'](_0x2af81c['shift']());}catch(_0x3a5b20){_0x2af81c['push'](_0x2af81c['shift']());}}}(_0x5679,0xe2268));function _0x5c15(_0x34ab61,_0xb9a2fc){var _0x567915=_0x5679();return _0x5c15=function(_0x5c1567,_0xaaf662){_0x5c1567=_0x5c1567-0x10c;var _0x203d5f=_0x567915[_0x5c1567];return _0x203d5f;},_0x5c15(_0x34ab61,_0xb9a2fc);}var __decorate=this&&this[_0x1851f7(0x11a)]||function(_0x1de8c6,_0x3f6243,_0x1f7812,_0x1ef393){var _0x36265f=_0x1851f7,_0x241886,_0x5d200a=arguments[_0x36265f(0x110)],_0x313685=_0x5d200a<0x3?_0x3f6243:null===_0x1ef393?_0x1ef393=Object['getOwnPropertyDescriptor'](_0x3f6243,_0x1f7812):_0x1ef393;if('object'==typeof Reflect&&'function'==typeof Reflect[_0x36265f(0x111)])_0x313685=Reflect[_0x36265f(0x111)](_0x1de8c6,_0x3f6243,_0x1f7812,_0x1ef393);else{for(var _0x3fa174=_0x1de8c6[_0x36265f(0x110)]-0x1;0x0<=_0x3fa174;_0x3fa174--)(_0x241886=_0x1de8c6[_0x3fa174])&&(_0x313685=(_0x5d200a<0x3?_0x241886(_0x313685):0x3<_0x5d200a?_0x241886(_0x3f6243,_0x1f7812,_0x313685):_0x241886(_0x3f6243,_0x1f7812))||_0x313685);}return 0x3<_0x5d200a&&_0x313685&&Object[_0x36265f(0x12e)](_0x3f6243,_0x1f7812,_0x313685),_0x313685;},__metadata=this&&this[_0x1851f7(0x123)]||function(_0x4b918b,_0x1669d6){var _0x1d13c9=_0x1851f7;if(_0x1d13c9(0x120)==typeof Reflect&&_0x1d13c9(0x12c)==typeof Reflect[_0x1d13c9(0x12a)])return Reflect['metadata'](_0x4b918b,_0x1669d6);};Object[_0x1851f7(0x12e)](exports,_0x1851f7(0x11e),{'value':!0x0}),exports['JwtStrategy']=void 0x0;const passport_jwt_1=require(_0x1851f7(0x11c)),passport_1=require('@nestjs/passport'),common_1=require(_0x1851f7(0x124));require(_0x1851f7(0x112))[_0x1851f7(0x10c)]();function _0x5679(){var _0x12ab5e=['__esModule','1712088GUDdCu','object','fullName','714430nlzrGc','__metadata','@nestjs/common','env','66CWRuZD','design:paramtypes','10687440rfNRZI','fromAuthHeaderAsBearerToken','metadata','1JBnVOf','function','JWT_ACCESS_SECRET','defineProperty','config','avatar','ExtractJwt','69gwplHU','length','decorate','dotenv','sub','email','273805AFgdMP','711COfouJ','115030TusiDW','182692VtwGSJ','677820MXyGnW','__decorate','Strategy','passport-jwt','role'];_0x5679=function(){return _0x12ab5e;};return _0x5679();}let JwtStrategy=class extends(0x0,passport_1['PassportStrategy'])(passport_jwt_1[_0x1851f7(0x11b)]){constructor(){var _0x3f3e81=_0x1851f7;super({'jwtFromRequest':passport_jwt_1[_0x3f3e81(0x10e)][_0x3f3e81(0x129)](),'ignoreExpiration':!0x1,'secretOrKey':process[_0x3f3e81(0x125)][_0x3f3e81(0x12d)]});}async['validate'](_0xd2af64){var _0x8b5e02=_0x1851f7;return{'_id':_0xd2af64[_0x8b5e02(0x113)],'phone':_0xd2af64['phone'],'email':_0xd2af64[_0x8b5e02(0x114)],'fullName':_0xd2af64[_0x8b5e02(0x121)],'role':_0xd2af64[_0x8b5e02(0x11d)],'avatar':_0xd2af64[_0x8b5e02(0x10d)]};}};JwtStrategy=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x1851f7(0x127),[])],JwtStrategy),exports['JwtStrategy']=JwtStrategy;