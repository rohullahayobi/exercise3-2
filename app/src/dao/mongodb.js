// TODO: Implement DAO
// create, get, getAll, update, remove


module.exports = class DAO {
    constructor(Model) {
        this.Model = Model;
    }

    create(model) {

       return this.Model.create(model);

    }

    get(query) {

        return this.Model.find(query);
    }

    getAll() {

        return this.Model.find({});
    }

    update(query, body) {

        return this.Model.update(query, { $set: body});
    };

    remove(query) {
        return this.Model.remove(query);
    }
}
