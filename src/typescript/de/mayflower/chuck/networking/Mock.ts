
    import * as chuck from '..';

    /*******************************************************************************************************************
    *   Holds mocked response data for offline requests.
    *******************************************************************************************************************/
    // tslint:disable:max-line-length
    export class Mock
    {
        /***************************************************************************************************************
        *   Returns a mocked response for the route 'jokes/random'.
        *
        *   @return Mocked offline response json data.
        ***************************************************************************************************************/
        public static mockRandomJoke() : chuck.RandomJokeResponse
        {
            return {
                type: 'success',
                value: {
                    'id':         1,
                    'joke':       'Time stands still for no man. Except that man is Chuck Norris.',
                    'categories': [],
                }
            }
        }
    }
