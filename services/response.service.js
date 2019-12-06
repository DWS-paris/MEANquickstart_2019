/*
Service definition
*/
    const sendBodyError = (response, errorMessage) => {
        return response.status(400).json({
            message: errorMessage,
            err: null,
            data: null,
        });
    }

    const sendFieldsError = (response, errorMessage, miss, extra) => {
        return response.status(400).json({
            message: errorMessage,
            err: { miss, extra },
            data: null,
        });
    }

    const sendApiSuccessResponse = (response, successMessage, data) => {
        return response.status(200).send({
            message: successMessage,
            err: null,
            data: data,
        })
    }

    const sendApiErrorResponse = (response, errorMessage, error) => {
        return response.status(500).json({
            message: errorMessage,
            error,
            data: null,
        });
    }
// 


/*
Export service fonctions
*/
    module.exports = {
        sendBodyError,
        sendFieldsError,
        sendApiSuccessResponse,
        sendApiErrorResponse
    };
//