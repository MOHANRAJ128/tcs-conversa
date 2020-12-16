
export default (state={},action)=>{
    switch(action.type)
    {
        case 'LOGGED_IN':
            {
                return {userName:action.userName};
            }
        default :
        {
            return state;
        }
    }
}