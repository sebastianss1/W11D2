import entitiesReducer from './entities_reducer';

const rootReducer = (state = {}, action) => {
    return {
        entities: entitiesReducer,
    };
};

export default rootReducer;