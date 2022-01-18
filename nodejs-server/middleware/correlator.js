const { v4 } = require('uuid');
const executionContext = require('../utils/executionContext');

const DEFAULT_HEADER_NAME = 'x-correlation-id';

function correlator(options) {
    const headerName = (options && options.header) || DEFAULT_HEADER_NAME;

    return (req, _, next) => {
        const correlationId = req.headers[headerName] || v4();
        return executionContext.init({
            correlationId
        }, next);
    }
}

module.exports = correlator;