module.exports = {
   Query: {
     //Resolve a person query passing the name args.
     person: async (_, {name}, {dataSources}) =>  {
       let personData =  dataSources.starWarAPI.getPersonByName(name)
       personData.then(function(data) {
         console.log(data)
       })
       return personData.then(data => data)
     },
     
     //Resolve page query passing the argument id.
     page: async (_, {id}, {dataSources}) => {
      let personData = dataSources.starWarAPI.getPage(id)
      personData.then(function(data) {
        console.log(data)
      })
      return personData.then(data => data)
     }
   },
};
