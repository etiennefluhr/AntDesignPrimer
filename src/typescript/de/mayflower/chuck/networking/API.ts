
    import * as gp from '..';

    /*******************************************************************************************************************
    *   Triggers all different API requests.
    *******************************************************************************************************************/
    export class API
    {
        /***************************************************************************************************************
        *   Requests a random joke.
        *
        *   @param onSuccess The callback method to invoke and pass the response data to when the result is available.
        ***************************************************************************************************************/
        public static getRandomJoke( onSuccess: ( json:gp.RandomJokeResponse ) => void ) : void
        {
            gp.Networking.fetchViaApi(
                gp.Setting.BASE_API_URL + 'jokes/random',
                'GET',
                null,
                ( json:JSON ) => {
                    const dto :gp.RandomJokeResponse = json as unknown as gp.RandomJokeResponse;
                    onSuccess( dto );
                }
            );
        }
    }
