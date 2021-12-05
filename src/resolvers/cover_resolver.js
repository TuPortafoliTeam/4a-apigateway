const coverResolver = {

    Query: {
        coverByIdCover: async (_, {idCover}, {dataSource}) => {
            return await dataSource.coverByIdCover(idCover);
        }
    },
    Mutation: {
        createCover: async (_, {cover}, {dataSource}) => {
            return await dataSource,createCover(cover);
        }
    }
}

module.exports = coverResolver;