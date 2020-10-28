const httpStatus = require('http-status-codes');

exports.mess_Json = (status) => {
    status = typeof status === 'string' ? status : httpStatus.getStatusText(status);
    return {
        message : status,
        data: []
    }    
};

exports.Json = (status, data) => {
    status = typeof status === 'string' ? status : httpStatus.getStatusText(status);
    return {
        message: status,
        data: data
    }
}