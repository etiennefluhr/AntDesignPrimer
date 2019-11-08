
    import * as gp       from '..';
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';

    /*******************************************************************************************************************
    *   The main class contains the application's point of entry.
    *
    *   TODO Add TypeDoc output / jest / coverage output paths to .gitignore.
    *   TODO enrich search group for specifying search categories in API.postSearchMatch!
    *   TODO Add app logo in Menu.render!
    *   TODO extract title and footer to separate components.
    *
    *   TODO MINOR Unify names for all tests.
    *   TODO MINOR Update to latest npm packages version.
    *   TODO MINOR Update Jest Tests.
    *******************************************************************************************************************/
    export class Main
    {
        /***************************************************************************************************************
        *   This method is invoked when the application starts.
        ***************************************************************************************************************/
        public static main() : void
        {
            // set website title
            document.title = gp.Setting.TITLE;

            // acclaim debug console
            gp.Debug.major.log( gp.Setting.TITLE );
            gp.Debug.major.log();

            // add container div
            const websiteContainer:HTMLDivElement = document.createElement( 'div' );
            document.body.appendChild( websiteContainer );

            // create and mount React component 'Website' into container div
            const website:JSX.Element = <gp.Website />;
            // const website:JSX.Element = <Demo />;

            ReactDOM.render(
                website,
                websiteContainer
            );
        }
    }
