
    import * as gp from '..';

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
        ***************************************************************************************************************/
        public static fetchViaApi( url:string, method:string, body:any, onSuccess:( json:JSON ) => void ) : void
        {
            gp.Debug.network.log(
                'Requesting API URL: [' + url + '] via [' + method + '] with body [' + JSON.stringify( body ) + ']'
            );

            const headers:Headers = new Headers();

            headers.append( 'Accept',        'application/json'                     );
            headers.append( 'Authorization', 'Basic ' + gp.Setting.BASIC_AUTH_TOKEN );
            headers.append( 'Content-Type',  'application/json'                     );

            fetch
            (
                url,
                {
                    method:  method,
                    headers: headers,
                    body:    ( body === null ? null : JSON.stringify( body ) ),

                    // mode:        'no-cors',
                    // credentials: 'include',
                }
            )
            .then(
                ( response:Response ) :Promise<any> => {

                    if ( response.status === Networking.HTTP_OK )
                    {
                        return response.json();
                    }

                    gp.Debug.network.log( 'Response is NOT okay - HTTP Status [' + response.status + ']' );

                    return null;
                }
            )
            .then(
                ( json:JSON ) :void => {

                    if ( json != null )
                    {
                        onSuccess( json );
                        return;
                    }

                    gp.Debug.network.log( 'JSON from Response is NULL !? [' + json + ']' );
                }
            )
            .catch(
                ( error:Error ) :void => {

                    gp.Debug.network.log( 'Caught error on connecting to URL [' + url + ']' );
                    gp.Debug.network.log( error.message );
                }
            );
        }
    }
