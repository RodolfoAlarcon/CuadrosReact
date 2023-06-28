

export const CarritoHook = (initialState = [], action) => {

    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload]

        case 'Delete Todo':
            return []

        default:
            break;
    }

}