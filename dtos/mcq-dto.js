
class McqDto {

    id;
    question;
    opOne;
    opTwo;
    opThree;
    opFour;
    answer;
    verified;
    addedBy;

    constructor(data) {
        this.id = data._id;
        this.question = data.question;
        this.opOne = data.opOne;
        this.opTwo = data.opTwo;
        this.opThree = data.opThree;
        this.opFour = data.opFour;
        this.verified = data.verified;
        this.addedBy = data.addedBy && data.addedBy.name;
        this.answer = data.answer == 1 ? data.opOne : data.answer == 2 ? data.opTwo : data.answer == 3 ? data.opThree : data.answer == 4 ? data.opFour : data.answer;
    }

}

module.exports = McqDto;