
    import * as gp    from '../..';
    import * as React from 'react';
    import * as antd  from 'antd';

    /*******************************************************************************************************************
    *   The React state for the RandomJoke component.
    *******************************************************************************************************************/
    export interface RandomJokeState
    {
        /** Current search term inserted in AutoComplete search field. */
        currentSearchTerm    :string;

        /** All search groups to display in this component. */
        searchGroups         :gp.SearchGroupResponse[];
        /** The search results from the last search response. */
        searchResults        :gp.SearchMatchResponse;

        /** Indicates that the search results are currently requested from the server. */
        loadingSearchResults :boolean;
    }

    /*******************************************************************************************************************
    *   The react component that represents the RandomJoke main content page.
    *******************************************************************************************************************/
    export class RandomJoke extends React.Component<any, gp.RandomJokeState>
    {
        /***************************************************************************************************************
        *   Creates a new Website React component.
        *
        *   @param props The initial properties to assign to this component.
        ***************************************************************************************************************/
        public constructor( props:any )
        {
            super( props );

            this.state = {
                currentSearchTerm:    'management',
                searchGroups:         [],
                searchResults:        null,
                loadingSearchResults: false,
            };
        }

        /***************************************************************************************************************
        *   Being invoked when this component did mount.
        ***************************************************************************************************************/
        public componentDidMount() : void
        {
            gp.Debug.react.log( 'RandomJoke.componentDidMount() being invoked' );

            this.requestRandomJoke();
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            gp.Debug.react.log( 'RandomJoke.render() being invoked' );

            return <div>

                <div>

                    <antd.Button
                        type="primary"
                        onClick={ ( me: React.MouseEvent ) :void => { this.onClickJokeButton(); } }
                    >
                        Get a Random Joke
                    </antd.Button>

                </div>
{ /*
                <SearchResults
                    searchResults={ this.state.searchResults }
                />
*/ }
            </div>;
        }

        /***************************************************************************************************************
        *   Being invoked when the submit search data arrived.
        *
        *   @param data The received searchMatch data model.
        ***************************************************************************************************************/
        private searchSubmitDataArrived( data:gp.SearchMatchResponse ) : void
        {
            // gp.Debug.network.log( 'received submitted search data:' );
            // gp.Debug.network.log( JSON.stringify( data ) );

            this.setState(
                {
                    ...this.state,

                    searchResults:        data,
                    loadingSearchResults: false,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the 'Get Random Joke' button is clicked.
        ***************************************************************************************************************/
        private onClickJokeButton() : void
        {
            gp.Debug.major.log( 'Button "Get a Joke" clicked.' );

            requestRandomJoke();
        }

        /***************************************************************************************************************
        *   Requests a new random joke.
        ***************************************************************************************************************/
        private requestRandomJoke() : void
        {
            gp.Debug.major.log( 'requestRandomJoke() being invoked.' );




        }

        /***************************************************************************************************************
        *   Being invoked when the 'Search' field is submitted.
        ***************************************************************************************************************/
        private submitSearch() : void
        {
            // trim the search term
            const searchTerm:string = this.state.currentSearchTerm.trim();

            gp.Debug.network.log( 'Search term is [' + searchTerm + ']' );

            // request API for strings from three chars on
            if ( searchTerm.length >= 3 )
            {
                gp.Debug.network.log( 'Search submitted for: [' + searchTerm + ']' );

                // prune all current search results
                this.setState(
                    {
                        ...this.state,

                        searchResults:        null,
                        loadingSearchResults: true,
                    }
                );

                // submit a new search
                gp.API.postSearchMatch(
                    searchTerm,
                    ( data:gp.SearchMatchResponse ) => {
                        this.searchSubmitDataArrived( data );
                    }
                );
            }
        }
    }
