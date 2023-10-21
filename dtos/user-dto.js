
class UserDto {

    id;
    name;
    email;
    type;
    status;

    constructor(user) {
        this.id = user._id;
        this.name = user.name;
        this.email = user.email;
        this.type = user.type;
        this.status = user.status;
    }

}

module.exports = UserDto;