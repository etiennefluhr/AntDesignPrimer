
    import * as gp from '..';

    /*******************************************************************************************************************
    *   Holds mocked response data for offline requests.
    *******************************************************************************************************************/
    // tslint:disable:max-line-length
    export class Mock
    {
        /***************************************************************************************************************
        *   Returns a mocked response for the route 'search/groups'.
        *
        *   @return Mocked offline response json data.
        ***************************************************************************************************************/
        public static mockSearchGroups() : gp.SearchGroupResponse[]
        {
            return [
                {
                    docCount: 3,
                    docType: 'MOCKED Programming'
                },
                {
                    docCount: 1,
                    docType: 'MOCKED Fantasy'
                },
                {
                    docCount: 1,
                    docType: 'MOCKED Language'
                },
                {
                    docCount: 1,
                    docType: 'MOCKED Management'
                }
            ];
        }

        /***************************************************************************************************************
        *   Returns a mocked response for the route 'search/match'.
        *
        *   @return Mocked offline response json data.
        ***************************************************************************************************************/
        public static mockSearchMatch() : gp.SearchMatchResponse
        {
            return {
                _shards: {
                    failed: 0,
                    skipped: 0,
                    successful: 1,
                    total: 1
                },
                hits: {
                    hits: [
                        {
                            '_id': 'M_01',
                            '_index': 'books_v1',
                            '_score': null,
                            '_source': {
                                'author': 'Ernst Tiemeyer',
                                'cover_url': 'res/image/mocked-covers/it-kosten-und-finanzmanagement.png',
                                'doc_group': [
                                    'Management'
                                ],
                                'doc_id': 'M_01',
                                'file_url': 'res/image/mocked-pdfs/dummy.pdf',
                                'language': 'german',
                                'pages': 193,
                                'publish_date': '2019-04-26T12:00:00+0000',
                                'title': 'MOCKED IT-Kosten- und Finanzmanagement'
                            },
                            '_type': '_doc',
                            'highlight': {
                                'content.english': [
                                    'Problem <em>Management</em>\nAvailability <em>Management</em>\n\nBeispiel-Leistungsart: Bereitstellung von IT-Infrastrukturen',
                                    'IT-Asset-<em>Management</em>-Datenbanken\n○○ Teilbereiche eines Asset-<em>Management</em> (Infrastruktur-, Software-Assets',
                                    'Liefaranten-<em>Management</em>\n(z.B.',
                                    'Vertrags-<em>Management</em>\n(z.B.',
                                    'sowie des Availability-<em>Management</em> und Capacity-<em>Managment</em>\nzurückgegriffen.'
                                ]
                            },
                            'sort': [
                                1556280000000,
                                'M_01'
                            ]
                        },

                        {
                            '_id': 'L_01',
                            '_index': 'books_v1',
                            '_score': null,
                            '_source': {
                                'author': 'Patricia Ellman',
                                'cover_url': 'res/image/mocked-covers/english-grammar-for-economics-and-business.png',
                                'doc_group': [
                                    'Language'
                                ],
                                'doc_id': 'L_01',
                                'file_url': 'res/image/mocked-pdfs/dummy.pdf',
                                'language': 'english',
                                'pages': 189,
                                'publish_date': '2019-04-26T12:00:00+0000',
                                'title': 'MOCKED English Grammar For Economics And Business'
                            },
                            '_type': '_doc',
                            'highlight': {
                                'content.english': [
                                    'Few is used with countable nouns: few <em>managers</em>.\n(See Less and Fewer above.)',
                                    'The meaning of this sentence is unclear: it might mean:\nYesterday, the <em>Managing</em> Director said the firm',
                                    'Or:\n\nThe <em>Managing</em> Director said the firm had lost nearly all its suppliers yesterday.',
                                    'The <em>managing</em> director’s indiscretion provoked a disastrous fall in the price of shares in his\ncompany',
                                    'The bank <em>manager</em> asked the entrepreneur to come to his office with a business plan.'
                                ]
                            },
                            'sort': [
                                1556280000000,
                                'L_01'
                            ]
                        },

                        {
                            '_id': 'F_01',
                            '_index': 'books_v1',
                            '_score': null,
                            '_source': {
                                'author': 'J. J. J. Tolkien',
                                'cover_url': 'res/image/mocked-covers/The Hobbit (Enhanced Edition) - J. R. R. Tolkien.png',
                                'doc_group': [
                                    'Fantasy'
                                ],
                                'doc_id': 'F_01',
                                'file_url': 'res/image/mocked-pdfs/dummy.pdf',
                                'language': 'english',
                                'pages': 286,
                                'publish_date': '2019-04-26T12:00:00+0000',
                                'title': 'MOCKED The Hobbit: Enhanced Edition'
                            },
                            '_type': '_doc',
                            'highlight': {
                                'content.english': [
                                    'he <em>managed</em> to say after taking a deep\nbreath.',
                                    'I can\n<em>manage</em>.” But the dwarves only started to sing:\n\n00:00 / 00:00\n\nJ.R.R.',
                                    'They guard it always and no one has ever\n<em>managed</em> to block it up.',
                                    'The dwarves <em>managed</em> all the preparations.',
                                    '“That will be quite as\nmuch as I can <em>manage</em>,” said he.'
                                ]
                            },
                            'sort': [
                                1556280000000,
                                'F_01'
                            ]
                        },

                        {
                            '_id': 'C_GUI',
                            '_index': 'books_v1',
                            '_score': null,
                            '_source': {
                                'author': 'David A. Curry',
                                'cover_url': 'res/image/mocked-covers/UsingContheUNIXSystem.png',
                                'doc_group': [
                                    'Programming'
                                ],
                                'doc_id': 'C_GUI',
                                'file_url': 'res/image/mocked-pdfs/dummy.pdf',
                                'language': 'english',
                                'pages': 230,
                                'publish_date': '2019-04-26T12:00:00+0000',
                                'title': 'MOCKED UNIX Systems Programming'
                            },
                            '_type': '_doc',
                            'highlight': {
                                'content.english': [
                                    'I owe a special debt of gratitude to Curt Freeland, who\n<em>managed</em> to get an old Exabyte tape drive working',
                                    'uncompress examples.shar\nsh examples.shar\n\nFor more information on UUNET, see the Nutshell Handbooks <em>Managing</em>',
                                    'Call\nThe select system call is used to perform I/O multiplexing—that is, it enables the\nprogrammer to <em>manage</em>',
                                    'As an\nexample, consider a program that <em>manages</em> all the printer queues on a machine.',
                                    'C., A Tour Through the Portable C Compiler, UNIX System <em>Manager’s</em>\nManual, 4.3 Berkeley Software Distribution'
                                ]
                            },
                            'sort': [
                                1556280000000,
                                'C_GUI'
                            ]
                        },

                        {
                            '_id': 'C_01',
                            '_index': 'books_v1',
                            '_score': null,
                            '_source': {
                                'author': 'David A. Curry',
                                'cover_url': 'res/image/mocked-covers/C_GUI_Programming.png',
                                'doc_group': [
                                    'Programming'
                                ],
                                'doc_id': 'C_01',
                                'file_url': 'res/image/mocked-pdfs/dummy.pdf',
                                'language': 'english',
                                'pages': 156,
                                'publish_date': '2019-04-26T12:00:00+0000',
                                'title': 'MOCKED C GUI Programming'
                            },
                            '_type': '_doc',
                            'highlight': {
                                'content.english': [
                                    'what widgets you want,\nwhereabouts you want to put them, and what you want them to do, and GTK will <em>manage</em>',
                                    'To give you an idea of what ‘<em>manage</em> everything else’ means, imagine the situation\ndescribed above where'
                                ]
                            },
                            'sort': [
                                1556280000000,
                                'C_01'
                            ]
                        }

                    ],
                    'max_score': null,
                    'total': {
                        'relation': 'eq',
                        'value': 6
                    }
                },
                'timed_out': false,
                'took': 113
            };
        }
    }
