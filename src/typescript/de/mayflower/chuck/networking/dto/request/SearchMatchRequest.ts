
    /*******************************************************************************************************************
    *   The request model for the route 'search/phrase'.
    *******************************************************************************************************************/
    export interface SearchMatchRequest
    {
        /** The search term that shall trigger this search. */
        search: string;

        /** All search groups to apply the search term on. */
        group?: string[];

        /** The language to trigger the search for. */
        language?: string;

        /** Possible information for receiving next search results. */
        search_after?: Array<string|number>;
    }
