
//if (typeof process.env.VCAP_SERVICES === "undefined")
//{
//	process.env.VCAP_SERVICES = JSON.stringify(require('../vcap.local'));
//}

//require('./server/logging');
//require('./server/db');
require('./server/http');
