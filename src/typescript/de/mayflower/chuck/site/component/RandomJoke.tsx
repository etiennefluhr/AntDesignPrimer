
    import * as chuck from '../..';
    import * as React from 'react';
    import * as antd  from 'antd';

    /*******************************************************************************************************************
    *   The React state for the RandomJoke component.
    *******************************************************************************************************************/
    export interface RandomJokeState
    {
        /** Indicates that the search results are currently requested from the server. */
        requestInProgress :boolean;

        /** The search results from the last search response. */
        randomJoke        :chuck.RandomJokeResponse;
    }

    /*******************************************************************************************************************
    *   The react component that represents the RandomJoke main content page.
    *******************************************************************************************************************/
    export class RandomJoke extends React.Component<any, chuck.RandomJokeState>
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
                randomJoke:        null,
                requestInProgress: false,
            };
        }

        /***************************************************************************************************************
        *   Being invoked when this component did mount.
        ***************************************************************************************************************/
        public componentDidMount() : void
        {
            chuck.Debug.react.log( 'RandomJoke.componentDidMount() being invoked' );

            this.requestRandomJoke();
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            chuck.Debug.react.log( 'RandomJoke.render() being invoked' );

            return <div>

                <div>

                    <antd.Button
                        type="primary"
                        onClick={ ( me: React.MouseEvent ) :void => { this.onClickJokeButton(); } }
                        loading={  this.state.requestInProgress }
                    >
                        Get a Random Joke
                    </antd.Button>

                </div>
{ /*
                <div>

                    <antd.List


                    >

                    </antd.List>

                </div>
*/ }
            </div>;
        }

        /***************************************************************************************************************
        *   Being invoked when the 'Get Random Joke' button is clicked.
        ***************************************************************************************************************/
        private onClickJokeButton() : void
        {
            chuck.Debug.major.log( 'Button "Get a Joke" clicked.' );

            this.requestRandomJoke();
        }

        /***************************************************************************************************************
        *   Requests a new random joke.
        ***************************************************************************************************************/
        private requestRandomJoke() : void
        {
            chuck.Debug.major.log( 'requestRandomJoke() being invoked.' );

            this.setState(
                {
                    ...this.state,

                    requestInProgress: true,
                }
            );

            // submit a new search
            chuck.API.getRandomJoke(
                ( data:chuck.RandomJokeResponse ) => {
                    this.onRandomJokeResponse( data );
                },
                ( error:Error ) => {
                    this.onRandomJokeError( error );
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the random joke data has arrived.
        *
        *   @param data The received random joke data model.
        ***************************************************************************************************************/
        private onRandomJokeResponse( data:chuck.RandomJokeResponse ) : void
        {
            chuck.Debug.network.log( 'received random joke:' );
            chuck.Debug.network.log( JSON.stringify( data ) );

            this.setState(
                {
                    randomJoke:        data,
                    requestInProgress: false,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the random joke request threw an error.
        *
        *   @param error The error that occurred on requesting the random joke.
        ***************************************************************************************************************/
        private onRandomJokeError( error:Error ) : void
        {
            chuck.Debug.network.log( 'requesting random joke threw an error:' );
            chuck.Debug.network.log( error.message );

            this.setState(
                {
                    ...this.state,

                    requestInProgress: false,
                }
            );
        }
    }
