
    import * as chuck from '..';

    /*******************************************************************************************************************
    *   Offers network functionality for requesting the backend API.
    *
    *   Start the Chrome with
    *   open -a Google\ Chrome --args --disable-web-security --user-data-dir=""
    *******************************************************************************************************************/
    export class Networking
    {
        /** The HTTP status code that expresses a successful HTTP connection. */
        private     static          readonly            HTTP_OK                 :number         = 200;

        /***************************************************************************************************************
        *   Performs a HTTP request via the JavaScript fetch API.
        *
        *   @param url       The URL to request.
        *   @param method    The HTTP request method to use.
        *   @param body      The JSON body object to set.
        *   @param onSuccess The callback method to invoke and pass the data to when the result is available.
        *   @param onError   The callback method to invoke when an error occurred.
        ***************************************************************************************************************/
        public static fetchViaApi(
            url       :string,
            method    :string,
            body      :any,
            onSuccess :( json:JSON ) => void,
            onError   :( error:Error ) => void
        )
        : void
        {
            chuck.Debug.network.log(
                'Requesting API URL: [' + url + '] '
                + 'via [' + method + '] '
                + 'with body [' + JSON.stringify( body ) + ']'
            );

            const headers:Headers = new Headers();

            headers.append( 'Accept',       'application/json' );

            if ( method === 'post' )
            {
                headers.append( 'Content-Type', 'application/json' );
            }

            fetch
            (
                url,
                {
                    method:  method,
                    headers: headers,
                    body:    ( body === null ? null : JSON.stringify( body ) ),
                }
            )
            .then(
                ( response:Response ) :Promise<any> => {

                    if ( response.status === Networking.HTTP_OK )
                    {
                        return response.json();
                    }

                    chuck.Debug.network.log( 'Response is NOT okay - HTTP Status [' + response.status + ']' );

                    onError( new Error( 'Response is NOT okay - HTTP Status [' + response.status + ']' ) );
                }
            )
            .then(
                ( json:JSON ) :void => {

                    if ( json != null )
                    {
                        onSuccess( json );
                        return;
                    }

                    chuck.Debug.network.log( 'JSON from Response is NULL !? [' + json + ']' );

                    onError( new Error( 'JSON from Response is NULL' ) );
                }
            )
            .catch(
                ( error:Error ) :void => {

                    chuck.Debug.network.log( 'Caught error on connecting to URL [' + url + ']' );
                    chuck.Debug.network.log( error.message );

                    onError( error );
                }
            );
        }
    }
