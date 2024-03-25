export default {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    // let's do a 20% discount everytime
    console.log(select, populate, "before create");
  },

  afterCreate(event) {
    const { result, params } = event;
    console.log("after create", result)
    // do something to the result;
  },
};