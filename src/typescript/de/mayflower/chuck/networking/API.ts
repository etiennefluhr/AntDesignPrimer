
    import * as gp from '..';

    /*******************************************************************************************************************
    *   Triggers all different API requests.
    *******************************************************************************************************************/
    export class API
    {
        /***************************************************************************************************************
        *   Delivers all search groups.
        *
        *   @param onSuccess The callback method to invoke and pass the data to when the result is available.
        ***************************************************************************************************************/
        public static getSearchGroups( onSuccess: ( json:gp.SearchGroupResponse[] ) => void ) : void
        {
            if ( gp.Setting.DEBUG_MOCK_ALL_REQUESTS )
            {
                window.setTimeout(
                    () => {
                        onSuccess( gp.Mock.mockSearchGroups() );
                    },
                    gp.Setting.DEBUG_MOCK_REQUEST_TIMEOUT
                );
                return;
            }

            gp.Networking.fetchViaApi(
                gp.Setting.BASE_API_URL + 'search/groups',
                'GET',
                null,
                ( json:JSON ) => {
                    const dtoArray :gp.SearchGroupResponse[] = json as unknown as gp.SearchGroupResponse[];
                    onSuccess( dtoArray );
                }
            );
        }

        /***************************************************************************************************************
        *   Delivers all search results.
        *
        *   @param searchTerm The term to search for.
        *   @param onSuccess  The callback method to invoke and pass the data to when the result is available.
        ***************************************************************************************************************/
        public static postSearchMatch( searchTerm:string, onSuccess: (data:gp.SearchMatchResponse ) => void ) : void
        {
            const requestBody:gp.SearchMatchRequest = {
                search:       searchTerm,
                group:        [ /* 'management', */ ],
                language:     'english',
                search_after: [ /* '', 5, */ ],

            };

            if ( gp.Setting.DEBUG_MOCK_ALL_REQUESTS )
            {
                window.setTimeout(
                    () => {
                        onSuccess( gp.Mock.mockSearchMatch() );
                    },
                    gp.Setting.DEBUG_MOCK_REQUEST_TIMEOUT
                );
                return;
            }

            gp.Networking.fetchViaApi(
                gp.Setting.BASE_API_URL + 'search/match',
                'POST',
                requestBody,
                ( json:JSON ) => {

                    gp.Debug.network.log( 'Received search phrase response' );

                    const dtoModel :gp.SearchMatchResponse = json as unknown as gp.SearchMatchResponse;
                    onSuccess( dtoModel );
                }
            );
        }
    }
