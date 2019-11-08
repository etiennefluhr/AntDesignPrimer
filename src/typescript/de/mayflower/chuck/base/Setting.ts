
    /*******************************************************************************************************************
    *   All settings for the application.
    *******************************************************************************************************************/
    // tslint:disable:max-line-length
    export class Setting
    {
        /** The application's internal name. */
        public  static  readonly    TITLE                       :string             = 'GsapPrimer, (c) 2019 Mayflower GmbH, v.0.0.1';

        /** The global debug switch. */
        public  static  readonly    DEBUG_MODE                  :boolean            = true;
        /** Debug switch to mock ALL http requests, allowing offline mode. */
        public  static  readonly    DEBUG_MOCK_ALL_REQUESTS     :boolean            = ( true && Setting.DEBUG_MODE );
        /** Debug mocked timeout for API requests in millis. */
        public  static  readonly    DEBUG_MOCK_REQUEST_DELAY    :number             = 1000;

        /** The relative path from index.html where all images reside. */
        public  static  readonly    PATH_IMAGE                  :string             = 'res/image/';

        /** The base64 encoded basic authorization token. */
        public  static  readonly    MIN_SUBMIT_STRING_LENGTH    :number             = 3;

        /** The base API URL. */
        public  static  readonly    BASE_API_URL                :string             = 'https://pdf.catalano.de/api/';

        /** Debug constant search phrase string. */
        public  static  readonly    DEBUG_TEST_SEARCH_STRING    :string             = 'management';
    }
