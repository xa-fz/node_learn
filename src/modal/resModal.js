class basicModal {
    constructor(data, message, type) {
        if (typeof data === 'string') {
            this.message = data;
            data = null;
            message = null;
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

// 成功模型
class SuccessModal extends basicModal {
    constructor (data, message) {
        super(data, message);
        this.status = 200;
    }
}

// 失败模型
class FailedModal extends basicModal {
    constructor (data, message) {
        super(data, message);
        this.errno = -1;
    }
}

module.exports = {
    SuccessModal,
    FailedModal
}