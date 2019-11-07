
    import * as gp      from '../..';
    import * as React   from 'react';
    import * as antd    from 'antd';
    import { Parallax } from 'rc-scroll-anim';

    /*******************************************************************************************************************
    *   React properties for the Content component.
    *******************************************************************************************************************/
    export interface ContentProps
    {
        /** The current selected content site to display. */
        currentSite: gp.MenuItem;
    }

    /*******************************************************************************************************************
    *   The react component that represents the content part of the website.
    *******************************************************************************************************************/
    export class Content extends React.Component<gp.ContentProps, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            gp.Debug.react.log( 'Content.render() being invoked' );

            return <antd.Layout.Content>

                <div>
                    { this.createContent() }
                </div>

            </antd.Layout.Content>;
        }

        /***************************************************************************************************************
        *   Creates the different content part for this Content component.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        private createContent() : JSX.Element
        {
            switch ( this.props.currentSite )
            {
                case gp.MenuItem.SEARCH_PDF:
                {
                    return <gp.SearchPdf />;
                }

                case gp.MenuItem.DOWNLOAD:
                {
                    return <div className="mainContentContainer">
                        Download ..
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        <Parallax
                          animation={ { x: 0 } }
                          style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
                        >
                            <div style={
                                { width: '50px', height: '50px', backgroundColor: 'blue',  }
                            } />
                        </Parallax>
                        <Parallax
                          animation={{ scale: 1 }}
                          style={{ transform: 'scale(0)', margin: '10px auto' }}
                        >
                            <div style={
                                { width: '50px', height: '50px', backgroundColor: 'blue',  }
                            } />
                        </Parallax>

                        <Parallax
                          animation={ { scale: 1 } }
                          style={ { transform: 'scale( 0 )', margin: '10px auto' }}
                        >
                            <div style={
                                {
                                    width: '100%',
                                    height: '200px',
                                    backgroundColor: 'orange',
                                    border: '1px solid red',
                                }
                            } />
                        </Parallax>

                        <Parallax
                          animation={
                            {
                                backgroundPositionY: '100%'
                            }
                          }
                          style={
                            {
                                width: '100%',
                                height: '200px',
                                backgroundImage: 'url( res/image/content/example.jpg )',
                                backgroundSize: '100% auto',
                                backgroundPositionY: '0%',
                                margin: '10px auto'
                            }
                          }
                        />

                        <Parallax
                          animation={
                            {
                                backgroundPositionY: '0%'
                            }
                          }
                          style={
                            {
                                width: '100%',
                                height: '200px',
                                backgroundImage: 'url( res/image/content/example.jpg )',
                                backgroundSize: '100% auto',
                                backgroundPositionY: '100%',
                                margin: '10px auto'
                            }
                          }
                        />

                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        content
                        <antd.Divider />
                        more content
                    </div>;
                }

                case gp.MenuItem.ABOUT:
                case gp.MenuItem.GO_PREMIUM:
                case gp.MenuItem.EXTENDED:
                case gp.MenuItem.LEGAL:
                case gp.MenuItem.IMPRINT:

                default:
                {
                    return <div className="mainContentContainer">
                        To be defined ..
                    </div>;
                }
            }
        }
    }
