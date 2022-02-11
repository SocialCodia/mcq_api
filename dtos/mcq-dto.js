
class McqDto {

    id;
    question;
    opOne;
    opTwo;
    opThree;
    opFour;
    answer;

    constructor(data) {
        this.id = data._id;
        this.question = data.question;
        this.opOne = data.opOne;
        this.opTwo = data.opTwo;
        this.opFour = data.opFour;
        this.answer = data.answer;
    }

}

module.exports = McqDto;