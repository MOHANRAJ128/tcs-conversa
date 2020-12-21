

const initialState={
    userName:"",
    bot:{
        name:"",
        description:""
    }
}
export default (state=initialState,action)=>{
    switch(action.type)
    {
        case 'LOGGED_IN':
            {
                state.userName=action.userName;
                return state;
            }
        case 'NEW_BOT':
            {
                console.log(action.bot);
                state.bot=action.bot;
                return state;
            }
        default :
        {
            return state;
        }
    }
}